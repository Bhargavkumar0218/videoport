import VideoCard from "./VideoCard";

const VideoList = ({ videos, onFavorite }) => {
  return (
    <div className="video-list">
      {videos.length > 0 ? (
        videos.map((video) => (
          <VideoCard key={video.videoId} video={video} onFavorite={onFavorite} />
        ))
      ) : (
        <p>No videos found.</p>
      )}
    </div>
  );
};

export default VideoList;
