const Video = require("../models/Video");

exports.getFavorites = async (req, res) => {
  try {
    const videos = await Video.find({ userId: req.user.id });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching favorites" });
  }
};

exports.addToFavorites = async (req, res) => {
  try {
    const { videoId, title, thumbnail } = req.body;
    const newVideo = new Video({ userId: req.user.id, videoId, title, thumbnail });
    await newVideo.save();
    res.status(201).json({ message: "Video added to favorites" });
  } catch (error) {
    res.status(500).json({ error: "Error adding video" });
  }
};

exports.removeFromFavorites = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: "Video removed from favorites" });
  } catch (error) {
    res.status(500).json({ error: "Error removing video" });
  }
};
