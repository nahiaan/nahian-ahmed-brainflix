import "./CommentSection.scss";
// import CommentList from "./components/CommentList/CommentList";

const CommentSection = () => {
  return (
    <section className="comment-section">
      {/* <p className="comment-section__number"></p> */}
      <section className="form">
        <form className="form__box">
          <h1 className="form__title">JOIN THE CONVERSATION</h1>
          <fieldset className="comment__content">
            <div className="comment-img__container"></div>
            <div className="comment-form__wrapper">
              <label htmlFor="Name" className="comment__name">
                NAME
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your name"
                className="comment__name--input"
              />
              <label htmlFor="Name" className="comment__box">
                COMMENT
              </label>
              <textarea
                name="comment"
                id="comment-box"
                placeholder="Add a new comment"
                className="comment__text--input"
              ></textarea>
              <button id="post" className="comment__button">
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
