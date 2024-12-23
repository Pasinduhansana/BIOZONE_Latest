import express from 'express';
import Advertisement from '../models/model.addvertisement.js';

const router = express.Router();

// create advertisement
router.post('/add', async (req, res) => {
  const { title, description, imageUrl } = req.body;

  if (!title || !description || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newAdvertisement = new Advertisement({ title, description, imageUrl });
    await newAdvertisement.save();
    res.status(201).json({ message: 'Advertisement saved successfully', data: newAdvertisement });
  } catch (error) {
    console.error('Error saving advertisement data:', error);
    res.status(500).json({ message: 'Failed to save advertisement data' });
  }
});

// reed all advertisements
router.get('/', async (req, res) => {
  try {
    const advertisements = await Advertisement.find();
    res.status(200).json({ message: 'Advertisements fetched successfully', data: advertisements });
  } catch (error) {
    console.error('Error fetching advertisements:', error);
    res.status(500).json({ message: 'Failed to fetch advertisements' });
  }
});

// read advertisement by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const advertisement = await Advertisement.findById(id);
    if (!advertisement) {
      return res.status(404).json({ message: 'Advertisement not found' });
    }
    res.status(200).json({ message: 'Advertisement fetched successfully', data: advertisement });
  } catch (error) {
    console.error('Error fetching advertisement:', error);
    res.status(500).json({ message: 'Failed to fetch advertisement' });
  }
});

// Update advertisement by ID
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl } = req.body;

  try {
    const updatedAdvertisement = await Advertisement.findByIdAndUpdate(
      id,
      { title, description, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updatedAdvertisement) {
      return res.status(404).json({ message: 'Advertisement not found' });
    }

    res.status(200).json({ message: 'Advertisement updated successfully', data: updatedAdvertisement });
  } catch (error) {
    console.error('Error updating advertisement:', error);
    res.status(500).json({ message: 'Failed to update advertisement' });
  }
});

// delete advertisement by ID
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAdvertisement = await Advertisement.findByIdAndDelete(id);
    if (!deletedAdvertisement) {
      return res.status(404).json({ message: 'Advertisement not found' });
    }
    res.status(200).json({ message: 'Advertisement deleted successfully', data: deletedAdvertisement });
  } catch (error) {
    console.error('Error deleting advertisement:', error);
    res.status(500).json({ message: 'Failed to delete advertisement' });
  }
});

export default router;
