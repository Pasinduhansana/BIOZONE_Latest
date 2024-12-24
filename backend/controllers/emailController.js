import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "navodchathushka@gmail.com",  // Replace with actual email
    pass: "sepm ecqg zbyt wgum",  // Replace with actual app password provided by gmail
  },
});

const emailController = async (req, res) => {
  const { from, to, subject, text } = req.body;

  try {
    const info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
    });

    // If the email was successfully sent
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email", error });
  }
};

export default emailController;