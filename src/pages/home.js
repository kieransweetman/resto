import { divGen, a, li, ul, removeContent } from "../utils/utilities";

const displayContent = () => {
  console.log("test home.js");
  let wrapper = document.querySelector("#content-wrapper");
  removeContent(wrapper);
};

export { displayContent };
