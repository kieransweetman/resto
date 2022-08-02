import { divGen, removeContent, BannerImage, styler } from "../utils/utilities";

const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  let bannerDiv = divGen();
  removeContent(wrapper);

  let banner = BannerImage();

  styler(["flex", "content-center", "justify-center"], bannerDiv);
  bannerDiv.appendChild(banner);
  wrapper.appendChild(bannerDiv);
};
export { displayContent };
