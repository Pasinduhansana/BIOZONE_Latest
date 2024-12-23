const Advertisement = require('../models/model.addvertisement');


exports.addAdvertisement = async (req, res) => {
  try {
    const { title, description } = req.body;
   

    const advertisement = new Advertisement({ title, description, imageUrl });

    await advertisement.save();
    res.status(201).json({ message: 'Advertisement added successfully', advertisement });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
};
