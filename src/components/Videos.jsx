import { useState, useEffect } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import "./Videos.css";

const videos = [
  {
    id: 1,
    title: "Thailand Tour Highlights",
    description: "Watch our comprehensive tour showcase featuring the best of Thailand. From cultural landmarks to breathtaking beaches, see what awaits you on your Thai adventure.",
    thumbnail: "https://res.cloudinary.com/desenbguq/image/upload/v1772620492/photo-1508009603885-50cf7c579365_ury1y0.jpg",
    videoUrl: "https://res.cloudinary.com/desenbguq/video/upload/v1772615084/Thailand_Tour_Video_Creation_Request_ecswsz.mp4",
    location: "Thailand Tours",
  },
  {
    id: 2,
    title: "Experience Our Thailand Packages",
    description: "Discover the exclusive experiences included in our tour packages. See firsthand the activities, destinations, and memories that make SK Tours special.",
    thumbnail: "https://res.cloudinary.com/desenbguq/image/upload/v1772455023/06749fe2dfee011eb0c6b48edba49ef29e3ffc0d-1600x1066_mawins.jpg",
    videoUrl: "https://res.cloudinary.com/desenbguq/video/upload/v1772620744/Thailand_Tour_Video_Creation_Request_1_n64hob.mp4",
    location: "Tour Packages",
  },
  {
    id: 3,
    title: "Your Perfect Thailand Itinerary",
    description: "Get inspired by our carefully crafted travel itinerary. Follow the journey through Bangkok, Pattaya, and Phuket with day-by-day highlights and experiences.",
    thumbnail: "https://res.cloudinary.com/desenbguq/image/upload/v1772620252/photo-1589394815804-964ed0be2eb5_mf8nfz.jpg",
    videoUrl: "https://res.cloudinary.com/desenbguq/video/upload/v1772620763/Thailand_Travel_Itinerary_Video_x5okrk.mp4",
    location: "Travel Guide",
  },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (video) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  // Check if video URL is an embed (YouTube/Vimeo) or direct video file
  const isEmbedUrl = (url) => {
    return url.includes('youtube.com/embed') || url.includes('vimeo.com/video') || url.includes('player.vimeo.com');
  };

  // Handle body scroll lock
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeVideo]);

  return (
    <section className="videos" id="videos">
      <div className="videos__container">
        <ScrollReveal animation="fade-up">
          <p className="videos__subtitle">Watch & Explore</p>
          <h2 className="videos__title">
            Experience Thailand <span>in Motion</span>
          </h2>
          <p className="videos__description">
            Get a glimpse of the incredible experiences waiting for you. Watch our curated
            video guides showcasing the beauty and excitement of each destination.
          </p>
        </ScrollReveal>

        <div className="videos__grid">
          {videos.map((video, index) => (
            <ScrollReveal
              key={video.id}
              animation="zoom-in"
              delay={index * 150}
              duration={600}
            >
              <button
                className="video-card"
                onClick={() => openVideo(video)}
              >
                <div className="video-card__thumbnail">
                  <img src={video.thumbnail} alt={video.title} loading="lazy" />
                  <div className="video-card__overlay" />
                  <div className="video-card__play">
                    <FaPlay />
                  </div>
                  <span className="video-card__location">{video.location}</span>
                </div>
                <div className="video-card__content">
                  <h3 className="video-card__title">{video.title}</h3>
                  <p className="video-card__desc">{video.description}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="video-modal"
          onClick={closeVideo}
        >
          <div
            className="video-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal__close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <FaTimes />
            </button>
            <div className="video-modal__player">
              {isEmbedUrl(activeVideo.videoUrl) ? (
                <iframe
                  src={`${activeVideo.videoUrl}?autoplay=1`}
                  title={activeVideo.title}
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="video-modal__info">
              <h3>{activeVideo.title}</h3>
              <p>{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;
