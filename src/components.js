import "./styles.css";
import {
  divGen,
  Nav,
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

// Create my navbar elements with applied styles
const navBar = () => {
  let navStyles = [
    "bg-slate-50",
    "border-slate-200",
    "px-2",
    "sm:px-4",
    "py-2.5",
    "rounded",
    "dark:bg-gray-900",
  ];
  const nav = Nav(navStyles);

  // link settings
  const tabStyles = [
    "underline",
    "text-black",
    "hover:underline-offset-8",
    "hover:text-gray-600",
    "hover:border-gray-300",
    "transition-all",
    "ease-in-out",
    "duration-300",
    "flex",
    "items-center",
  ];

  const links = {
    home: tabButton("home", tabStyles),
    menu: tabButton("menu", tabStyles),
    about: tabButton("about", tabStyles),
    reviews: tabButton("reviews", tabStyles),
  };

  // tabWrapper/css/content settings

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

  const tabWrapper = divGen("tabwrapper", wrapperStyle);
  const linkWrapper = divGen("myTab", linkStyle);

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
  let bodyStyles = [
    "container",
    "bg-red-700",
    "flex",
    "min-h-screen",
    "mx-auto",
  ];

  const body = divGen("content-wrapper", bodyStyles);

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
  let bodyStyles = ["container", "bg-slate-50", "flex", "mx-auto", "p-4"];
  const body = divGen("footer.body", bodyStyles);
  //css

  //copy right

  const spanTag = span("© 2022  |  ", [
    "block",
    "text-sm",
    "text-gray-500",
    "sm:text-center",
    "mx-auto",
    "my-auto",
  ]);

  let persSite = a("https://kieransweetman.com/", "Kieran Sweetman™", [
    "hover:underline",
  ]);

  spanTag.appendChild(persSite);
  // links

  //first parse nodes to get only the list elements + links css (ul)

  let linkStyles = [
    "container",
    "flex",
    "justify-end",
    "items-center",
    "flex-row",
    "mx-auto",
    "px-4",
  ];
  let links = ul(3, linkStyles);

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
