import Header from "./components/Header/Header";
import "./styles/main.scss";
import "./styles/partials/_resets.scss";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import CommentSection from "./components/CommentSection/CommentSection";
import SideVideos from "./components/SideVideos/SideVideos";
import VideoContent from "./Data/videos.json";
import React, { Component } from "react";

export default class App extends Component {
  // store VideoContent in state
  state = {
    sideVideoList: VideoContent,
  };

  render() {
    return (
      <div>
        <Header />
        <MainVideo />
        <VideoDetails />
        <CommentSection />
        {/* passed down video data into side video component */}
        <SideVideos sideVideoList={this.state.sideVideoList} />
      </div>
    );
  }
}
