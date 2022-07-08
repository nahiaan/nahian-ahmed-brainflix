import React, { Component } from "react";
import "./VideoUpload.scss";
import bike from "../../assets/Images/bike.jpg";

const VideoUpload = () => {
  return (
    <section className="comment-section">
      <section className="form">
        <form className="form__box">
          <h1 className="form__title">Upload Video </h1>
          <h2 className="form__title">VIDEO THUMBNAIL</h2>
          <img className="form__img" src={bike} alt="blue bike"></img>
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
              <button id="post" className="comment__button">
                PUBLISH
              </button>
              <button id="post" className="comment__button">
                CANCEL
              </button>
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
};
export default VideoUpload;
