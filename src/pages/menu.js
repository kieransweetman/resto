import {
  divGen,
  a,
  li,
  ul,
  removeContent,
  h2,
  p,
  styler,
} from "../utils/utilities";

const displayContent = () => {
  let wrapper = document.querySelector("#content-wrapper");
  removeContent(wrapper);

  let bodyStyles = [
    "container",
    "mx-auto",
    "flex",
    "flex-col",
    "content-center",
    "justify-center",
    "gap-4",
  ];

  let gridStyles = [
    "grid",
    "sm:grid-cols-4",
    "sm:grid-rows-1",
    "bg-slate-200",
    "mx-auto",
    "gap-5",
    "grid-cols-1",
    "grid-rows-4",
  ];

  let cardStyles = [
    "px-3",
    "py-3",
    "items-center",
    "flex",
    "flex-col",
    "rounded-lg",
    "shadow",
    "text-center",
    "bg-slate-700",
  ];

  let body = divGen("body", bodyStyles);
  let titleStyles = ["text-center"];
  let title = divGen("title.info", titleStyles);
  let grid = divGen("cards", gridStyles);
  let cards = [divGen(), divGen(), divGen(), divGen()];

  //title settings
  let menuTitle = h2("Ohayo Ramen Menu");
  let menuDesc = p(
    "Our broths are made with time and love to produce the most Umami-esque flavors you will ever taste"
  );

  title.appendChild(menuTitle);
  title.appendChild(menuDesc);

  // card generator
  cards.forEach((card) => {
    const image = new Image();
    image.src =
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png";
    card.appendChild(image);

    let text = divGen();

    text.appendChild(h2("Tonkutsu Ramen"));
    text.appendChild(
      p(
        "A porc rich broth - Served with braised porc, veggies, 1 poached egg and egg noodles"
      )
    );

    card.appendChild(text);

    card.id = "card";
    styler(cardStyles, card);
  });

  // dom manip

  cards.forEach((card) => {
    grid.appendChild(card);
  });
  body.appendChild(title);
  body.appendChild(grid);
  wrapper.appendChild(body);
};

export { displayContent };
