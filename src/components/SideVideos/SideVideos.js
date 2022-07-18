import "./SideVideos.scss";
import React from "react";
import { Link } from "react-router-dom";

const SideVideos = (props) => {
  const filteredVideoList = props.sideVideoList.filter((video) => {
    return video.id !== props.mainVideoId;
  });

  return (
    <section className="side-videos">
      <>
        <h3 className="side-videos__subtitle">NEXT VIDEOS</h3>
      </>
      {filteredVideoList.map((videoInfo) => {
        const videoId = videoInfo.id;

        return (
          <div className="side-videos__container" id={videoId} key={videoId}>
            <Link to={`/video/${videoId}`}>
              <img
                className="side-videos__img"
                id={videoId}
                src={videoInfo.image}
              />
            </Link>
            <div className="side-videos__wrapper" id={videoId}>
              <h3 className="side-videos__title" id={videoId}>
                {videoInfo.title}
              </h3>
              <h3 className="side-videos__channel" id={videoId}>
                {videoInfo.channel}
              </h3>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SideVideos;
