import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
	{
		
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

const AdminModel = mongoose.model("admin", adminSchema);

export default AdminModel;