// 1. primer paso copiar y pegar la funcion en la consola de google Chrome y oprimir la tecla enter para definir la funcion

const scraping = (nodeContainer) => {
  let list = document.getElementsByClassName(nodeContainer);
  let listChildren = [].slice.call(list[0].children);

  let data = listChildren.map((element) => {
    let titleData = element.getElementsByTagName("h3")[0];
    const title = titleData.innerText;
    let textData = element.getElementsByTagName("p")[0];
    const text = textData.innerText;
    let linkData = element.getElementsByTagName("a")[0];
    const link = linkData.href;

    const ofertas = {
      title: title,
      text: text,
      link: link,
    };
    return ofertas;
  });

  return data;
};

// 2.paso dos copiar y pegar tola la linea donde se define la variable callFuntion y dar enter para llamar la funcion

const callFuntion = scraping("job-search-results-container");

// 3. peque y defina cada una de las funciones colocadas a continuacion para luego desplegar otra funcion donde me pintara cada uno de los elementos extraidos

// copiar pegar y presionar enter para declarar la function

const assingClasses = (element, classes = []) => {
  classes.forEach((className) => {
    element.classList.add(className);
  });
  return element;
};

// copiar pegar y presionar enter para declarar la function

const createTagWithClasses = (tag, classes) => {
  let element = document.createElement(tag);
  element = assingClasses(element, classes);
  return element;
};

// copiar pegar y presionar enter para declarar la function

const newContainer = (type, content = [], classes = []) => {
  const oneElement = createTagWithClasses(type, classes);
  content.forEach((element) => {
    oneElement.appendChild(element);
  });
  return oneElement;
};

// copiar pegar y presionar enter para declarar la function

const newText = (type, content, classes = []) => {
  const oneElement = createTagWithClasses(type, classes);
  oneElement.innerText = content;
  return oneElement;
};

// copiar pegar y presionar enter para declarar la function

const newLink = (href, text, classes = []) => {
  const oneElement = createTagWithClasses("a", classes);
  oneElement.innerText = text;
  oneElement.href = href;
  return oneElement;
};

// copiar pegar y presionar enter para declarar la function

const createTable = (data) => {
  let information = ["Job Title", "Location", "Job URL", ">>"];
  let onetitle = newText("h2", information[3], ["table__text"]);
  let twotitle = newText("h2", information[0], ["table__text"]);
  let threetitle = newText("h2", information[1], ["table__text"]);
  let fourtitle = newText("h2", information[2], ["table__text"]);

  let oneWrapper = newContainer("div", [onetitle], ["tablet__wrapper"]);
  let twoWrapper = newContainer("div", [twotitle], ["tablet__wrapper"]);
  let threeWrapper = newContainer("div", [threetitle], ["tablet__wrapper"]);
  let fourWrapper = newContainer("div", [fourtitle], ["tablet__wrapper"]);

  oneWrapper.style.width = "5%";
  twoWrapper.style.width = "42.5%";
  threeWrapper.style.width = "22.5%";
  fourWrapper.style.width = "30%";

  data.forEach((element, index) => {
    let num = newText("p", index + 1, ["table__text", "table__text-num"]);
    let numContainer = newContainer("div", [num], ["tablet__one-block"]);
    numContainer.style.height = "55px";
    let title = newText("h3", element.title, ["table__text"]);
    title.style.fontSize = "16px";
    let titleContainer = newContainer("div", [title], ["tablet__one-block"]);
    titleContainer.style.height = "55px";
    let location = newText("p", element.text, ["table__text"]);
    let locationContainer = newContainer(
      "div",
      [location],
      ["tablet__one-block"]
    );
    locationContainer.style.height = "55px";
    let link = newLink(element.link, "click to enter the offer", [
      "table__text",
    ]);
    let linkContainer = newContainer("div", [link], ["tablet__one-block"]);
    linkContainer.style.height = "55px";

    oneWrapper.appendChild(numContainer);
    twoWrapper.appendChild(titleContainer);
    threeWrapper.appendChild(locationContainer);
    fourWrapper.appendChild(linkContainer);
  });
  let section = newContainer(
    "section",
    [oneWrapper, twoWrapper, threeWrapper, fourWrapper],
    ["tablet"]
  );

  section.style.display = "flex";

  return section;
};

// copiar pegar y presionar enter para declarar

let sectionTablet = createTable(callFuntion);

// copiar pegar y presionar enter para declarar

let root = document.getElementsByClassName("job-search-results-container")[0];

// copiar pegar y presionar enter para declarar

root.appendChild(sectionTablet);
