/**
 *@import "../../styles/main";
@import "../../styles/partials/_resets";
@import "../../styles/partials/templates";
@import "../../styles/partials/breakpoints";

.form__img {
  width: 95%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;

  @include tablet {
    width: 72vw;
    height: 330px;
    border-bottom: solid 1px $Silver;
  }
}

.form__divider {
  border-color: white;
  color: $Mercury;
  padding-bottom: 2rem;
}

.form__wrapper {
  margin-left: 1.5rem;
}
.form__title {
  font-family: "avenirnext-bold";
  font-size: 2.5rem;
  margin-bottom: 2rem;

  &--sub {
    font-family: "avenirnext-bold";
    font-size: 1.3rem;
    color: $Silver;
    margin-bottom: 0.5rem;
  }
}

.comment__name {
  margin-top: 2rem;
}

.comment__box,
.comment__name {
  font-family: "avenirnext-bold";
  color: $Silver;
  font-size: 1.3rem;
}

.comment__button--cancel {
  @include button-template;
  background-color: white;
  border: white;
  color: $BrainFlix-Blue;
  margin: 2rem 0 2rem 23%;

  @include tablet {
    margin: 0;
    width: 20vw;
    padding-right: 5rem;
  }
}

.comment__button {
  background-image: url(/assets/Icons/publish.svg);
  background-repeat: no-repeat;
  background-position: 0.5rem;
  height: 9vh;
  @include button-template;
  width: 100%;

  @include tablet {
    width: 30%;
  }
}
.comment__text--input {
  height: 22vh;
  margin-bottom: 2rem;
  padding-top: 1rem;
}

.comment__name--input {
  height: 8vh;
  margin-bottom: 1rem;
}

.comment__name--input,
.comment__text--input {
  background-color: $Alabaster;
  width: 100%;
  border: solid 2px rgba($color: #000000, $alpha: 0.1);
  border-radius: 5px;
  font-size: 2rem;
  display: block;
}
.comment__content {
  border: none;
}

.comment__content {
  @include margin-styling;
}

.comment__wrapper--button {
  display: flex;
  flex-direction: row-reverse;
}

 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
