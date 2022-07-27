import "./styles.css";
import { divGen, li, logo, ul, a } from "./utilities";

import "flowbite";

// header

const navBar = () => {
  //navbar tag settings

  const nav = document.createElement("nav");
  let navStyles = [
    "bg-gray-500",
    "border-gray-200",
    "px-2",
    "sm:px-4",
    "py-2.5",
    "rounded",
    "dark:bg-gray-900",
  ];
  navStyles.forEach((style) => {
    nav.classList.add(style);
  });

  // link settings
  const links = {
    menu: tabButton("menu"),
    about: tabButton("about"),
    reviews: tabButton("reviews"),
  };

  // logo

  // tabWrapper/css/content settings
  const tabWrapper = divGen();
  const linkWrapper = divGen();

  let linkStyle = [
    "container",
    "w-1/2",
    "flex",
    "mx-auto",
    "justify-evenly",
    "items-center",
  ];

  let wrapperStyle = [
    "container",
    "flex",
    "flex-wrap",
    "justify-between",
    "items-center",
    "mx-auto",
  ];

  wrapperStyle.forEach((style) => {
    tabWrapper.classList.add(style);
  });

  linkStyle.forEach((style) => {
    linkWrapper.classList.add(style);
  });

  for (let link in links) {
    linkWrapper.appendChild(links[link]);
  }

  // adding elements to dom
  tabWrapper.appendChild(logo());
  tabWrapper.appendChild(linkWrapper);
  // tabWrapper.appendChild(linkWrapper);

  nav.appendChild(tabWrapper);

  return nav;
};

const tabButton = (text = "", classStyles = []) => {
  const btn = document.createElement("button");
  const styles = [
    "underline",
    "hover:underline-offset-8",
    "hover:text-gray-600",
    "hover:border-gray-300",
    "transition-all",
    "ease-in-out",
    "duration-300",
    "flex",
    "items-center",
  ];
  btn.type = "button";
  btn.textContent = text;

  if (classStyles.length > 0) {
    classStyles.forEach((style) => {
      btn.classList.add(style);
    });
  }

  styles.forEach((style) => {
    btn.classList.add(style);
  });

  return btn;
};

//content
const main = () => {
  const body = divGen();

  let styles = ["container", "bg-red-700", "flex", "min-h-screen", "mx-auto"];

  styles.forEach((style) => {
    body.classList.add(style);
  });
  return body;
};

//footer

const foot = () => {
  const body = divGen();
  //css
  let styles = ["container", "bg-blue-700", "flex", "mx-auto", "p-4"];
  styles.forEach((style) => {
    body.classList.add(style);
  });
  // links
  let links = ul(3);

  let children = links.childNodes;

  children.forEach((li) => {
    let link = a("#");
    link.textContent = "test";
    let css = ["mr-4", "hover:underline", "md:mr-6"];
    css.forEach((style) => {
      link.classList.add(style);
    });

    li.appendChild(link);
  });

  // adding to dom

  body.appendChild(logo());
  body.appendChild(links);
  return body;
};

export { navBar, main, foot };
