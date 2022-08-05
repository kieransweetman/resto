import Logo from "../images/logo.jpg";
import Banner from "../images/banner.png";

import * as about from "../pages/about";
import * as menu from "../pages/menu";
import * as reviews from "../pages/reviews";
import * as home from "../pages/home";

const divGen = (ID, classStyles = []) => {
  const div = document.createElement("div");

  div.id = ID;
  styler(classStyles, div);
  return div;
};

const Nav = (navStyles) => {
  let el = document.createElement("nav");

  styler(navStyles, el);

  return el;
};
const logo = () => {
  const ramenLogo = new Image();
  let styles = ["h-10", "mr-3", "sm:h-14"];
  styler(styles, ramenLogo);

  ramenLogo.src = Logo;

  return ramenLogo;
};

const BannerImage = () => {
  const banner = new Image();
  let styles = ["object-fill"];
  styler(styles, banner);

  banner.src = Banner;

  return banner;
};

const a = (href = "", textcontent = "", classStyles = []) => {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = textcontent;
  styler(classStyles, a);

  return a;
};

const li = () => {
  return document.createElement("li");
};

const ul = (count = 0, classStyles = []) => {
  const ul = document.createElement("ul");
  for (let i = 0; i < count; i++) {
    const list = li();
    list.id = i;
    ul.appendChild(list);
  }

  styler(classStyles, ul);

  return ul;
};

const Hr = (css) => {
  const hr = document.createElement("hr");
  if (css.lenght <= 0) {
    return hr;
  }

  css.forEach((style) => {
    hr.classList.add(style);
  });

  return hr;
};

const span = (text = "", css) => {
  let span = document.createElement("span");

  span.textContent = text;
  styler(css, span);

  return span;
};

const tabButton = (text = "", classStyles = []) => {
  const btn = document.createElement("button");

  btn.type = "button";
  btn.id = `${text}-tab`;
  btn.textContent = text;

  styler(classStyles, btn);
  return btn;
};

const removeContent = (wrapper) => {
  wrapper.childNodes.forEach((child) => {
    child.remove();
  });
};

const h2 = (text = "") => {
  let h2 = document.createElement("h2");
  h2.textContent = text;
  return h2;
};

const p = (text = "") => {
  let p = document.createElement("p");
  p.textContent = text;
  return p;
};

const parser = (id) => {
  if (id.includes("home")) {
    home.displayContent();
  } else if (id.includes("menu")) {
    menu.displayContent();
  } else if (id.includes("about")) {
    about.displayContent();
  } else {
    reviews.displayContent();
  }
};

const styler = (list = [], element) => {
  return typeof list == "undefined" || typeof list == "string"
    ? element
    : list.forEach((style) => {
        element.classList.add(style);
      });
};

export {
  divGen,
  logo,
  ul,
  li,
  a,
  p,
  Hr,
  span,
  tabButton,
  parser,
  removeContent,
  h2,
  BannerImage,
  styler,
  Nav,
};
