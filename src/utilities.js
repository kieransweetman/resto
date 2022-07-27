import Logo from "./logo.jpg";

const divGen = () => {
  const div = document.createElement("div");
  return div;
};

const logo = () => {
  const ramenLogo = new Image();
  let styles = ["h-10", "mr-3", "sm:h-14"];

  styles.forEach((style) => {
    ramenLogo.classList.add(style);
  });

  ramenLogo.src = Logo;

  return ramenLogo;
};

const a = (href = "") => {
  const a = document.createElement("a");
  a.href = href;

  return a;
};

const li = () => {
  return document.createElement("li");
};

const ul = (count = 0) => {
  const ul = document.createElement("ul");
  for (let i = 0; i < count; i++) {
    const list = li();
    ul.appendChild(list);
  }

  return ul;
};
export { divGen, logo, ul, li, a };
