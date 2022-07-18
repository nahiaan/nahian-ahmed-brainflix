import "./CommentSection.scss";

const CommentSection = (props) => {
  return (
    <section className="comment-section1">
      <p className="comment-section__number">
        {props.mainVideoInfo.comments.length} Comments
      </p>
      <section className="form1">
        <form className="form__box1">
          <h1 className="form__title1">JOIN THE CONVERSATION</h1>
          <fieldset className="comment__content1">
            <div className="comment-img__container1"></div>
            <div className="comment-form__wrapper1">
              <label htmlFor="Name" className="comment__name1">
                NAME
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your name"
                className="comment__name--input1"
              />
              <label htmlFor="Name" className="comment__box1">
                COMMENT
              </label>
              <textarea
                name="comment"
                id="comment-box"
                placeholder="Add a new comment"
                className="comment__text--input1"
              ></textarea>
              <button id="post" className="comment__button1">
                COMMENT
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

export default CommentSection;
