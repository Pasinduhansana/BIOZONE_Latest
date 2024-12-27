import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const Admin = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [advertisements, setAdvertisements] = useState([]);

  const navigate = useNavigate();

  // Reusable function to fetch advertisements
  const fetchAdvertisements = async () => {
    try {
      const response = await axios.get("http://localhost:3080/api/admin/");
      if (response.data.message === "Advertisements fetched successfully") {
        setAdvertisements(response.data.data);
      } else {
        console.error("Failed to fetch advertisements.");
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
    }
  };

  // Fetch advertisements on mount
  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);

      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      toast.error("Please select a valid image file.");
    }
  };

  const handleUpload = async () => {
    if (!image || !title || !description) {
      toast.error("Please fill in all fields and select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "biozone");

    try {
      setUploading(true);
      setUploadProgress(0);

      // Upload image to Cloudinary
      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dyfllgtxc/image/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
        }
      );

      const uploadedUrl = cloudinaryResponse.data.secure_url;

      // Upload advertisement data to the backend
      const response = await axios.post("http://localhost:3080/api/admin/add", {
        title,
        description,
        imageUrl: uploadedUrl,
      });

      if (response.status === 201) {
        toast.success("Advertisement uploaded successfully!");
        setImage(null);
        setPreview(null);
        setTitle("");
        setDescription("");
        setUploadProgress(0);
        fetchAdvertisements();
      } else {

        toast.error("Failed to save advertisement data. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading:", error);
      toast.error("An error occurred. Please try again.");

    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    toast(
      (t) => (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm font-medium">Are you sure you want to delete this advertisement?</p>
          <div className="flex space-x-4">
            {/* Yes Button */}
            <button
              onClick={async () => {
                toast.dismiss(t.id); // Dismiss the confirmation toast
                try {
                  const response = await axios.delete(
                    `http://localhost:3080/api/admin/delete/${id}`
                  );
                  if (response.status === 200) {
                    toast.success("Advertisement deleted successfully!");
                    fetchAdvertisements();
                  } else {
                    toast.error("Failed to delete the advertisement.");
                  }
                } catch (error) {
                  console.error("Error deleting advertisement:", error);
                  toast.error("An error occurred while deleting. Please try again.");
                }
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Yes
            </button>
            {/* No Button */}
            <button
              onClick={() => toast.dismiss(t.id)} // Dismiss the toast without deleting
              className="bg-gray-300 px-4 py-2 rounded-md"
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: 5000 } // Toast will auto-dismiss after 5 seconds
    );
  };
  //  Logout with comformation button
  const handleLogout = () => {
    toast(
      (t) => (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm font-medium">Are you sure you want to log out?</p>
          <div className="flex space-x-4">
            {/* Yes Button */}
            <button
              onClick={() => {
                toast.dismiss(t.id);

                localStorage.removeItem("adminToken");
                navigate("/admin");
                toast.success("Logged out successfully!");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Yes
            </button>
            {/* No Button */}
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 px-4 py-2 rounded-md"
            >
              No
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };



  return (
    <div className="p-8 min-h-screen font-sans">
      {/* Logout */}
      <div className="grid justify-items-end m-3"> <button onClick={handleLogout} className="bg-[#d43437] p-2 text-stone-100 rounded-md">
        Logout
      </button></div>
      {/* Header */}
      <h1 className="lg:p-18 lg:text-5xl text-3xl font-medium text-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text">
        Admin Panel - Upload Advertisement
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side */}
        <div className="lg:w-1/2  rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text mb-4">
            Upload Advertisement
          </h2>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpload();
            }}
            encType="multipart/form-data"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="file">
                Select Image:
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-gray-600 border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Preview img */}
            {preview && (
              <div className="mt-4 flex justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-48 h-48 rounded-lg shadow-md border border-green-300"
                />
              </div>
            )}

            {/* Title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter advertisement title"
                className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
                Description:
              </label>
              <textarea
                id="description"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter advertisement description"
                className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            {/* Upload Progress */}
            {uploading && (
              <div className="mb-4">
                <p className="text-green-600 font-semibold">
                  Uploading: {uploadProgress}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={uploading}
                className={`w-full py-2 rounded-md text-white font-medium ${uploading
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-700"
                  }`}
              >
                {uploading
                  ? `Uploading...`
                  : "Upload Advertisement"}
              </button>
            </div>
          </form>
        </div>

        {/* Right side*/}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md lg:p-6">
          <h2 className="text-lg font-semibold text-center bg-gradient-to-r  from-primary1 to-primary2  text-transparent bg-clip-text mb-4">
            Advertisements Details
          </h2>

          {/* Table */}
          <div className="flex flex-col w-full space-y-4">

            <div className="flex justify-between bg-gray-100 p-4 rounded-t-lg text-sm font-medium text-gray-600">
              <div className="w-1/3">Image</div>
              <div className="w-1/3">Title</div>
              <div className="w-1/3">Actions</div>
            </div>
            {advertisements.map((ad, index) => (
              <div
                key={ad._id}
                className={`flex  lg:flex-row items-center lg:items-stretch w-full bg-white p-1 lg:p-4 rounded-lg shadow-sm `}
              >
                <div className="flex w-full lg:w-1/3 justify-center lg:justify-start mb-4 lg:mb-0">
                  <img
                    src={ad.imageUrl}
                    alt={ad.title}
                    className="w-16 h-16 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex flex-col w-full lg:w-1/3 lg:text-left space-y-2">
                  <div className="text-sm font-semibold text-gray-700">{ad.title}</div>
                  <div className="text-xs font-light text-gray-500">
                    {new Date(ad.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </div>
                </div>
                <div className=" w-full lg:w-1/3 justify-center lg:justify-end">
                  <button
                    onClick={() => handleDelete(ad._id)}
                    className="p-2 rounded-full hover:bg-red-100 transition"
                  >
                    <MdDeleteOutline style={{ color: "#EE7F80", fontSize: "24px" }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
