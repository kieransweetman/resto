import "./styles.css";
import {
  divGen,
  logo,
  ul,
  a,
  span,
  tabButton,
  parser,
  styler,
} from "./utils/utilities";

import "flowbite";

// header

const navBar = () => {
  //navbar tag settings

  const nav = document.createElement("nav");

  let navStyles = [
    "bg-slate-50",
    "border-slate-200",
    "px-2",
    "sm:px-4",
    "py-2.5",
    "rounded",
    "dark:bg-gray-900",
  ];

  styler(navStyles, nav);

  // link settings
  const links = {
    home: tabButton("home"),
    menu: tabButton("menu"),
    about: tabButton("about"),
    reviews: tabButton("reviews"),
  };

  // logo

  // tabWrapper/css/content settings
  const tabWrapper = divGen();
  const linkWrapper = divGen();
  linkWrapper.id = "myTab";

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

  styler(wrapperStyle, tabWrapper);
  styler(linkStyle, linkWrapper);

  for (let link in links) {
    linkWrapper.appendChild(links[link]);
  }

  // adding elements to dom
  tabWrapper.appendChild(logo());
  tabWrapper.appendChild(linkWrapper);

  nav.appendChild(tabWrapper);

  return nav;
};

//content
const main = () => {
  const body = divGen();
  body.id = "content-wrapper";

  let bodystyles = [
    "container",
    "bg-red-700",
    "flex",
    "min-h-screen",
    "mx-auto",
  ];

  styler(bodystyles, body);

  const tabs = document.querySelector("#myTab").childNodes;
  tabs.forEach((tab) => {
    tab.addEventListener(
      "click",
      function () {
        parser(tab.id);
      },
      false
    );
  });

  return body;
};

//footer

const foot = () => {
  const body = divGen();
  //css
  let bodyStyles = ["container", "bg-slate-50", "flex", "mx-auto", "p-4"];

  styler(bodyStyles, body);

  //copy right

  const spanTag = span(
    [
      "block",
      "text-sm",
      "text-gray-500",
      "sm:text-center",
      "mx-auto",
      "my-auto",
    ],
    " © 2022 "
  );

  let persSite = a("https://kieransweetman.com/", "Kieran Sweetman™");
  persSite.classList.add("hover:underline");

  spanTag.appendChild(persSite);
  // links

  //first parse nodes to get only the list elements + links css (ul)
  let links = ul(3);
  let linkStyles = [
    "container",
    "flex",
    "justify-end",
    "items-center",
    "flex-row",
    "mx-auto",
    "px-4",
  ];

  styler(linkStyles, links);

  // then adding each a tag to each li element
  let children = links.childNodes;
  children.forEach((li) => {
    let link = null;
    if (li.id == 0) {
      let temp = a("#", "Privacy Policy");
      link = temp;
    } else if (li.id == 1) {
      let temp = a("#", "Licensing");
      link = temp;
    } else {
      let temp = a("#", "Contact");
      link = temp;
    }

    let css = ["mr-4", "hover:underline", "md:mr-6"];

    styler(css, link);

    li.appendChild(link);
  });

  // adding to dom

  body.appendChild(logo());
  body.appendChild(spanTag);
  body.appendChild(links);
  // body.appendChild(hr);

  return body;
};

export { navBar, main, foot };
