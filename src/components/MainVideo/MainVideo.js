import "./MainVideo.scss";

const MainVideo = (props) => {
  console.log(props);
  return (
    <section className="video__container">
      <video
        poster={props.mainVideoInfo.image}
        controls
        className="video"
        src={props.mainVideoInfo.video}
      ></video>
    </section>
  );
};

export default MainVideo;
