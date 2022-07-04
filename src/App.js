import Header from "./components/Header/Header";
import "./styles/main.scss";
import "./styles/partials/_resets.scss";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import CommentSection from "./components/CommentSection/CommentSection";
import SideVideos from "./components/SideVideos/SideVideos";
import videoContent from "./Data/videos.json";
import mainVideoContent from "./Data/video-details.json";
import React, { Component } from "react";
import CommentList from "./components/CommentList/CommentList";
import "./App.scss";

export default class App extends Component {
  // store VideoContent in state
  state = {
    mainVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8",
    sideVideoList: videoContent,
    mainVideoinfo: mainVideoContent,
  };
  //function for when side vid is cklicke// add as prop down below
  /**
   * make side video click as main vid - change the state, give me the video whose id is qual to this.
   *
   */

  // Create a function, which we can pass to the side videos list
  // and attach it to each of the side video blocks.
  // We'll pass this function as a prop
  sideVideoClickHandler = (event) => {
    // Get the videoId of the clicked video
    const videoId = event.target.id;

    // Update the state mainVideoId
    this.setState({
      mainVideoId: videoId,
    });
  };

  render() {
    const mainVideo = this.state.mainVideoinfo.find(
      (video) => video.id === this.state.mainVideoId
    );
    return (
      <div>
        <div>
          <Header />
          <MainVideo mainVideoInfo={mainVideo} />
        </div>
        <div className="body">
          <div className="body-inner__wrapper">
            <VideoDetails mainVideoInfo={mainVideo} />
            <CommentSection />
            <CommentList mainVideoInfo={mainVideo} />
          </div>
          {/* passed down video data into side video component */}

          <div>
            <SideVideos
              sideVideoList={this.state.sideVideoList}
              clickHandler={this.sideVideoClickHandler}
              mainVideoId={this.state.mainVideoId}
            />
          </div>
        </div>
      </div>
    );
  }
}

// what i need to do:
/**
 * shift data from comment section to another component
 * in app.js make a function which has onclick which console logs the exact id of json file vid
 * thumnail ur clicking.
 * pass this as a state to ur component, and then pass it as a prop in your specific component.
 *
 */
