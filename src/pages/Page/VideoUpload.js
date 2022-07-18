import React, { Component } from "react";
import "./VideoUpload.scss";
import bike from "../../assets/Images/bike.jpg";
import "../../styles/main.scss";
import "../../styles/partials/_resets.scss";
import axios from "axios";

function VideoUpload(props) {
  console.log("VideoUpload props", props);
  const successfulResponse = (e, props) => {
    e.preventDefault();
    alert("successful!");
    //props.history.push("/");
    axios
      .post("http://localhost:5050/api/videos", {
        title: e.target.fullName.value,
        description: e.target.comment.value,
      })
      .then((response) => {
        //e() before then
        console.log("post", response);
        props.history.push("/home");
        //  this.setState({
        //   videos: response.updatedVideos,
        // });
        // didnt work: props.loadVideoData();

        // axios
        //   .get(
        //     // "https://project-2-api.herokuapp.com/videos?api_key=ffe0d61d-b430-491d-9649-c096b1d32fd3"
        //     "http://localhost:5050/api/videos"
        //   )
        //   .then((response) => {
        //     // console.log("get", response);
        //     this.setState({
        //       videos: response.data,
        //     });
        //     return response.data[0].id;
        //   })
        //   .then((id) => {
        //     axios
        //       .get(
        //         // `https://project-2-api.herokuapp.com/videos/${id}/?api_key=ffe0d61d-b430-491d-9649-c096b1d32fd3`
        //         `http://localhost:5050/api/mainvideo/${id}`
        //       )
        //       .then((response) => {
        //         this.setState({
        //           mainVideo: response.data,
        //         });
        //         props.history.push("/");
        //       })
        //       .catch((err) => {
        //         this.setState({
        //           error: err.message,
        //         });
        //       });
        //   });
      })
      .catch((error) => console.log(error));
    // axios call ends here
  };

  return (
    <section className="comment-section">
      <section className="form">
        <form
          className="form__box"
          onSubmit={(e) => successfulResponse(e, props)}
        >
          <hr className="form__divider"></hr>
          {/* <div className="form__wrapper--desktop"></div> */}
          <div className="form__wrapper">
            <h1 className="form__title">Upload Video </h1>
            <h2 className="form__title--sub">VIDEO THUMBNAIL</h2>
            <img className="form__img" src={bike} alt="blue bike"></img>
          </div>
          <fieldset className="comment__content">
            <div className="comment-form__wrapper">
              <label htmlFor="Name" className="comment__name">
                TITLE YOUR VIDEO
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your name"
                className="comment__name--input"
              />
              <label htmlFor="Name" className="comment__box">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                name="comment"
                id="comment-box"
                placeholder="Add a new comment"
                className="comment__text--input"
              ></textarea>

              <div className="comment__wrapper--button">
                <button id="post" className="comment__button">
                  PUBLISH
                </button>
                <button id="post" className="comment__button--cancel">
                  CANCEL
                </button>
              </div>
            </div>
          </fieldset>
          <p className="panel__error panel__error--hide"></p>
        </form>
        <section className="comment">
          <div className="comment__list"></div>
        </section>
      </section>
    </section>
  );
}
export default VideoUpload;
