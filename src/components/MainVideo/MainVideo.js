import "./MainVideo.scss";

const MainVideo = (props) => {
  return (
    <section className="video__container">
      <video
        poster={props.mainVideo.image}
        controls
        className="video"
        src={props.mainVideo}
      ></video>
    </section>
  );
};

export default MainVideo;
