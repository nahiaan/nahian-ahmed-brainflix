import "./SideVideos.scss";
import React from "react";

export const SideVideos = (props) => {
  console.log(props);
  //   console.log(props.sideVideoList);
  // const handleClick = (event, message) => {
  //   console.log(event.target);
  //   console.log(message);
  //   console.log("image was clicked");
  // };

  // Filter all the videos to exclude the main video
  const filteredVideoList = props.sideVideoList.filter((video) => {
    // console.log(video);
    // console.log(video.id);
    // console.log(props.mainVideoId);

    // If the video is NOT the same as the main video ID - Keep it.
    return video.id !== props.mainVideoId;
  });
  //filter is a higher order function and takes a callback function as an argument.
  // console.log(filteredVideoList);

  return (
    <section className="side-videos">
      <>
        <h3 className="side-videos__subtitle">NEXT VIDEOS</h3>
      </>
      {filteredVideoList.map((videoInfo) => {
        const videoId = videoInfo.id;

        return (
          <div
            onClick={(event) => props.clickHandler(event)}
            className="side-videos__container"
            id={videoId}
          >
            <img
              className="side-videos__img"
              id={videoId}
              src={videoInfo.image}
            />
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

<section>
  {/* {props.sideVideoList.map((videoInfo) => {
const videoThumbnail = () => {
  const handleClick = () => {
    console.log("it worked");
  };
  return <img onClick={handleClick()} src={videoInfo.image}></img>;
}; */}
</section>;
//what happened here was that my class component function in sidevideo.js was moved to
/**app.js - and in there we added a state, and then after i did a state, i passed it as a prop
 * in sidevideos.js - i make a normal function, and pass a prop.
 *
 *
 *
 */

export default SideVideos;

// id={videoInfo.id}
// onClick={props.fn} - inside img
