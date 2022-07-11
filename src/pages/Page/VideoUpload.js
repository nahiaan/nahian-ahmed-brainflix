import React, { Component } from "react";
import "./VideoUpload.scss";
import bike from "../../assets/Images/bike.jpg";
import "../../styles/main.scss";
import "../../styles/partials/_resets.scss";

function VideoUpload(props) {
  console.log(props);
  const successfulResponse = () => {
    alert("successful!");
    props.history.push("/");
  };
  return (
    <section className="comment-section">
      <section className="form">
        <form className="form__box" onSubmit={successfulResponse}>
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
