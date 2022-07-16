import "./MainVideo.scss";

const MainVideo = (props) => {
  // console.log("mainvideo", props);
  return (
    <section className="video__container">
      <video
        poster={props.mainVideo.image} //why cnt i specify obj? image
        controls
        className="video"
        src={props.mainVideo}
      ></video>
    </section>
  );
};

export default MainVideo;
