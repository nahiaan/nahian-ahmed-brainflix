import Header from "../../components/Header/Header";
import "../../styles/main.scss";
import "../../styles/partials/_resets.scss";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentSection from "../../components/CommentSection/CommentSection";
import SideVideos from "../../components/SideVideos/SideVideos";
// import videoContent from "../../Data/videos.json";
// import mainVideoContent from "../../Data/video-details.json";
import React, { Component } from "react";
import CommentList from "../../components/CommentList/CommentList";
import "../../App.scss";
import axios from "axios";

export default class HomePage extends Component {
  //
  state = {
    videos: [],
    mainVideo: [],
    error: "",
  };

  // function to load initial page
  loadVideoData = () => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=ffe0d61d-b430-491d-9649-c096b1d32fd3"
      )
      .then((response) => {
        // console.log("get", response);
        this.setState({
          videos: response.data,
        });
        return response.data[0].id;
      })
      .then((id) => {
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/${id}/?api_key=ffe0d61d-b430-491d-9649-c096b1d32fd3`
          )
          .then((response) => {
            // console.log("get request2", response);

            this.setState({
              mainVideo: response.data,
            });
          })
          .catch((err) => {
            this.setState({
              error: err.message,
            });
          });
      });
  };

  componentDidMount() {
    this.loadVideoData();
  }

  componentDidUpdate(prevProps) {
    //destructure for current props id
    const { videoId } = this.props.match.params;
    if (prevProps.match.params.videoId !== videoId) {
      axios
        .get(
          "https://project-2-api.herokuapp.com/videos?api_key=ffe0d61d-b430-491d-9649-c096b1d32fd3"
        )
        .then((response) => {
          this.setState({
            videos: response.data,
          });
        });
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoId}/?api_key=ffe0d61d-b430-491d-9649-c096b1d32fd3`
        )
        .then((response) => {
          this.setState({
            mainVideo: response.data,
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
          });
        });
    }
    //change the state if side video is clicked, sidevideo.id must match video.id
  }

  //COMP DID UPDATE HAS PREDEFINED PARAMETERS, CAPACITY TO LOOK AT WHAT WAS PON THE PAGE AT LAUNCH AND GIVE ACCESS TO IT
  //before the component did update, do a function where it states
  // sideVideoClickHandler = (sideVideoId) => {
  //   // const videoId = sideVideoId.target.id;
  //   // this.setState({
  //   //   videos: videoId,
  //   // });
  //   console.log("sidevideo clicked", sideVideoId);
  // };
  //function for when side vid is click// add as prop down below
  /**
   * make side video click a  vc s main vid - change the state, give me the video whose id is qual to this.
   *
   */

  // Create a function, which we can pass to the side videos list
  // and attach it to each of the side video blocks.
  // We'll pass this function as a prop
  // **sideVideoClickHandler = (event) => {

  // Get the videoId of the clicked video

  // **const videoId = event.target.id;

  // Update the state mainVideoId
  // **  this.setState({
  //     mainVideoId: videoId,
  //   });
  // };

  render() {
    //   const mainVideo = this.state.mainVideoinfo.find((video) => {
    //     video.id === this.state.mainVideoId;
    //   });

    // const mainVideo = this.state.mainVideoinfo.find(
    //   (video) => video.id === this.state.mainVideoId
    // );

    // const firstVideo = this.state.videos.id; //adding [0] does not work
    // console.log("crying", firstVideo);
    // if either of the two state arrays are empty (i.e. === 0) -> dont render and return page loading

    //this block of code makes sure we are rendering on condition and therefore making sure the api's all have time to execute- therefore not breaking.
    const videosArray = this.state.videos;
    const mainVideoArray = this.state.mainVideo;
    if (videosArray.length === 0 || mainVideoArray.length === 0) {
      return <h1>page loading...</h1>;
    }

    //variable  that takes a higher order funct
    //.find is a method that goes through an array of objects, array of videos, looking at the key of each object. function will return the object that matches that
    return (
      <div>
        <div>
          <MainVideo mainVideo1={this.state.mainVideo} />
          {/* <MainVideo video={firstVideo} /> */}
        </div>
        <div className="body">
          <div className="body-inner__wrapper">
            <VideoDetails mainVideoInfo={this.state.mainVideo} />
            <CommentSection />
            <CommentList mainVideoInfo={this.state.mainVideo} />
          </div>
          {/* passed down video data into side video component */}

          <div>
            <SideVideos
              sideVideoList={this.state.videos}
              mainVideoId={this.state.mainVideo.id}
            />
          </div>
        </div>
      </div>
    );
  }
}