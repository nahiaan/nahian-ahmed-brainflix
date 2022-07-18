import Header from "../../components/Header/Header";
import VideoUpload from "../Page/VideoUpload";
import "../../styles/main.scss";
import "../../styles/partials/_resets.scss";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentSection from "../../components/CommentSection/CommentSection";
import SideVideos from "../../components/SideVideos/SideVideos";
import React, { Component } from "react";
import CommentList from "../../components/CommentList/CommentList";
import "../../App.scss";
import axios from "axios";

export default class HomePage extends Component {
  state = {
    videos: [],
    mainVideo: [],
    error: "",
  };

  // function to load initial page
  loadVideoData = () => {
    axios
      .get("http://localhost:5050/api/videos")
      .then((response) => {
        this.setState({
          videos: response.data,
        });
        return response.data[0].id;
      })
      .then((id) => {
        axios
          .get(`http://localhost:5050/api/mainvideo/${id}`)
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
      });
  };

  componentDidMount() {
    this.loadVideoData();
  }
  componentDidUpdate(prevProps) {
    //destructure for current props id
    const { videoId } = this.props.match.params;
    if (prevProps.match.params.videoId !== videoId) {
      axios.get(`http://localhost:5050/api/videos`).then((response) => {
        this.setState({
          videos: response.data,
        });
      });
      axios
        .get(`http://localhost:5050/api/mainvideo/${videoId}`)
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
  }

  render() {
    const videosArray = this.state.videos;
    const mainVideoArray = this.state.mainVideo;
    if (videosArray.length === 0 || mainVideoArray.length === 0) {
      return <h1>page loading...</h1>;
    }

    return (
      <div>
        <div>
          <MainVideo mainVideo={this.state.mainVideo} />
        </div>
        <div className="body">
          <div className="body-inner__wrapper">
            <VideoDetails mainVideoInfo={this.state.mainVideo} />
            <CommentSection mainVideoInfo={this.state.mainVideo} />
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
