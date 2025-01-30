import { useEffect, useState, useContext } from "react";
import { getFavorites, removeFromFavorites } from "../utils/api";
import { AuthContext } from "../store/AuthContext.jsx";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const res = await getFavorites(user.token);
      setVideos(res.data);
    };

    fetchFavorites();
  }, []);

  const removeFavorite = async (id) => {
    await removeFromFavorites(user.token, id);
    setVideos(videos.filter(video => video._id !== id));
  };

  return (
    <div>
      {videos.map(video => (
        <div key={video._id}>
          <h3>{video.title}</h3>
          <button onClick={() => removeFavorite(video._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
