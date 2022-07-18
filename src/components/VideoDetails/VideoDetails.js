import "./VideoDetails.scss";

const VideoDetails = ({ mainVideoInfo }) => {
  const date = new Date(mainVideoInfo.timestamp);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <section className="video-details">
      <div className="video-details__wrapper">
        <div className="video-details__title">{mainVideoInfo.title}</div>
      </div>
      <div className="video-details__divider--wrapper">
        <hr className="video-details__divider"></hr>
      </div>
      <div className="video-details__container">
        <div className="video-details__wrapper--inner">
          <div className="video-details__channel">
            By {mainVideoInfo.channel}
          </div>
          <div className="video-details__date2">{`${day}/${month}/${year}`}</div>
        </div>
        <div className="video-details__wrapper--inner">
          <div className="video-details__info">{mainVideoInfo.views}</div>
          {/* <div className="video-details__date">{`${day}/${month}/${year}`}</div> */}
          <div className="video-details__likes">{mainVideoInfo.likes}</div>
        </div>
      </div>
      <div className="video-details__divider--wrapper">
        <hr className="video-details__divider"></hr>
      </div>
      <div className="video-details__description">
        {mainVideoInfo.description}
      </div>
    </section>
  );
};

export default VideoDetails;
