import "./styles.css";
import { divGen, logo, ul, a, Hr, span , tabButton, parser} from "./utilities";


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
    home: tabButton("home"),
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

  let twAttr = {
    id: "myTab",
    "data-tabs-toggle": "#tabContent",
    role: "tablist",
  }

  for(let key in twAttr){
    let value = twAttr[key];
    linkWrapper.setAttribute(key, value);
  }

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

 body.id='content-wrapper';
  let styles = ["container", "bg-red-700", "flex", "min-h-screen", "mx-auto"];

  styles.forEach((style) => {
    body.classList.add(style);
  });

  const tabs = document.querySelector("#myTab").childNodes;
  tabs.forEach(tab =>{
    tab.addEventListener('click',function() {parser(tab.id)}, false);
  })  

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
  //copy right
  const hr = Hr([
    "mx-10",
    "my-6",
    "border-gray-6",
    "sm:mx-auto",
    "lg:my-8",
    "w-1/2",
  ]);

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
  let linkstyles = [
    "container",
    "flex",
    "justify-end",
    "items-center",
    "flex-row",
    "mx-auto",
    "px-4",
  ];

  linkstyles.forEach((style) => {
    links.classList.add(style);
  });

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

    css.forEach((style) => {
      link.classList.add(style);
    });

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
