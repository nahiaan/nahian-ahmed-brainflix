import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import VideoUpload from "./pages/Page/VideoUpload";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

class App extends Component {
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

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from="/home" to="/" />
          <Route
            path="/"
            exact
            render={(renderProps) => (
              <HomePage loadVideoData={this.loadVideoData} {...renderProps} />
            )}
          />
          <Route
            path="/video/:videoId"
            render={(renderProps) => (
              <HomePage loadVideoData={this.loadVideoData} {...renderProps} />
            )}
          />
          <Route
            path="/video-upload"
            render={(renderProps) => <VideoUpload {...renderProps} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
