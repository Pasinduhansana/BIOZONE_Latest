import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";

const Admin = () => {
	const [image, setImage] = useState(null);
	const [preview, setPreview] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [advertisements, setAdvertisements] = useState([]);

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

				// Refresh advertisements after upload
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
		try {
			const response = await axios.delete(
				`http://localhost:3080/api/admin/delete/${id}`
			);
			if (response.status === 200) {
				toast.success("Advertisement deleted successfully!");

				// Refresh advertisements after delete
				fetchAdvertisements();
			} else {
				toast.error("Failed to delete the advertisement.");
			}
		} catch (error) {
			console.error("Error deleting advertisement:", error);
			toast.error("An error occurred while deleting. Please try again.");
		}
	};

	return (
		<div className="p-4 sm:p-8 min-h-screen font-sans">
			{/* Header */}
			<h1 className="text-3xl sm:text-5xl font-medium text-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text mb-8">
				Admin Panel - Upload Advertisement
			</h1>

			<div className="flex flex-col sm:flex-row gap-8">
				{/* Left side */}
				<div className="w-full sm:w-1/2 bg-white rounded-lg shadow-md p-4 sm:p-6">
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
						<p className="text-green-600 font-semibold">Uploading: {uploadProgress}%</p>
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
						className={`w-full py-2 rounded-md text-white font-medium ${
						uploading
							? "bg-green-400 cursor-not-allowed"
							: "bg-green-500 hover:bg-green-700"
						}`}
					>
						{uploading ? `Uploading...` : "Upload Advertisement"}
					</button>
					</div>
				</form>
				</div>

				{/* Right side */}
				<div className="w-full sm:w-1/2 bg-white rounded-lg shadow-md p-4 sm:p-6">
				<h2 className="text-lg font-semibold text-center bg-gradient-to-r from-primary1 to-primary2 text-transparent bg-clip-text mb-4">
					Advertisements Details
				</h2>

				{/* Table */}
				<div className="overflow-x-auto">
					<table className="min-w-full table-auto border-collapse">
					<thead>
						<tr>
						<th className="px-4 py-2 text-left border-b">Created At</th>
						<th className="px-4 py-2 text-left border-b">Title</th>
						<th className="px-4 py-2 text-left border-b">Image</th>
						<th className="px-4 py-2 text-left border-b">Actions</th>
						</tr>
					</thead>
					<tbody>
						{advertisements.map((ad) => (
						<tr key={ad._id}>
							<td className="px-4 py-2 border-b">
							{new Date(ad.createdAt).toLocaleString()}
							</td>
							<td className="px-4 py-2 border-b">{ad.title}</td>
							<td className="px-4 py-2 border-b">
							<img
								src={ad.imageUrl}
								alt={ad.title}
								className="w-16 h-16 object-cover rounded-lg"
							/>
							</td>
							<td className="px-4 py-2 border-b">
							<button onClick={() => handleDelete(ad._id)}>
								<MdDeleteOutline
								style={{ color: "#EE7F80", fontSize: "34px" }}
								/>
							</button>
							</td>
						</tr>
						))}
					</tbody>
					</table>
				</div>
				</div>
			</div>
		</div>

	);
};

export default Admin;
