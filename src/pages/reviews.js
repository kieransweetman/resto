import { divGen, a, li, ul, removeContent } from "../utils/utilities";
const displayContent = () => {
  console.log("reviews.js test");
  let wrapper = document.querySelector("#content-wrapper");
  removeContent(wrapper);
};

export { displayContent };
