import "./SideVideos.scss";
import React from "react";

export const SideVideos = (props) => {
  console.log(props);
  return (
    <section className="side-videos">
      <div>
        {props.sideVideoList.map((videoInfo, index) => {
          return <h1>{videoInfo.title}</h1>;
        })}
      </div>
    </section>
  );
};
//what happened here was that my class component function in sidevideo.js was moved to
/**app.js - and in there we added a state, and then after i did a state, i passed it as a prop
 * in sidevideos.js - i make a normal function, and pass a prop.
 *
 *
 *
 */

export default SideVideos;
