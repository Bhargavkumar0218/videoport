const VideoCard = ({ video, onFavorite }) => {
    return (
      <div className="video-card">
        <img src={video.thumbnail} alt={video.title} />
        <h3>{video.title}</h3>
        <button onClick={() => onFavorite(video)}>❤️ Favorite</button>
      </div>
    );
  };
  
  export default VideoCard;
  