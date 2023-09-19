/* eslint-disable react/prop-types */

function YoutubeThumbnails({ videoId }) {
  // Construct the YouTube video thumbnail URL based on the video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div>
      <img src={thumbnailUrl} width='250' height='200' alt="Video Thumbnail" />
    </div>
  );
}

export default YoutubeThumbnails;