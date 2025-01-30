import { useState, useEffect } from "react";
import axios from "axios";
import VideoList from "../components/VideoList";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=technology&maxResults=10&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      );

      setVideos(
        response.data.items.map((item) => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
        }))
      );
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Trending Videos</h2>
      <VideoList videos={videos} onFavorite={(video) => console.log("Favorite clicked", video)} />
    </div>
  );
};

export default Home;
