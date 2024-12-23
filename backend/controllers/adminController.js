import bcrypt from "bcrypt";
import AdminModel from "../models/model.admin.js"; // Path to your AdminMode

// Register  new admin
export const registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new AdminModel({
      email,
      password: hashedPassword,
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully." });
  } catch (error) {
    console.error("Error during admin registration:", error);
    res.status(500).json({ message: "Server error during registration." });
  }
};

//  admin login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Compare with the hashed password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ message: "Server error during login." });
  }
};
