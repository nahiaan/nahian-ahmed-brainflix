import React from "react";
import "./CommentList.scss";

export const CommentList = (props) => {
  console.log(props);

  return (
    <section className="commentList">
      {props.mainVideoInfo.comments.map((comment) => {
        const date = new Date(props.mainVideoInfo.comments.timestamp);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return (
          <div className="commentList__container" key={comment.id}>
            <div className="commentList-img__wrapper">
              <img />
            </div>
            <div className="commentList__wrapper">
              <div className="commentList-inner__wrapper">
                <h3 className="commentList__author">{comment.name}</h3>
                <h3 className="commentList__date">{`${day}/${month}/${year}`}</h3>
              </div>
              <h3 key={comment.id} className="commentList__content">
                {comment.comment}
              </h3>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default CommentList;
