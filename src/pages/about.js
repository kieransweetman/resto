import {
  divGen,
  a,
  li,
  ul,
  removeContent,
  h2,
  p,
  BannerImage,
} from "../utilities";

const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  removeContent(wrapper);

  // about sections
  let aboutText = divGen();
  let banner = BannerImage();

  // about text settings

  let aboutStyles = [];
  let aboutInfo = [
    h2("Ohayo Ramen"),
    p(
      "Here you will find our short history, why we love making ramen, and what to expect from us in the future."
    ),
  ];

  //   aboutInfo.forEach((blurb) => {
  //     aboutText.appendChild(blurb);
  //   });

  wrapper.appendChild(aboutText);
  wrapper.appendChild(banner);
};
export { displayContent };
