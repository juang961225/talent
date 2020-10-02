let callFuntion = [
  {
    link: "https://www.iceenterprise.com/careers/job/?job_id=2284917",
    text: "Scottsdale, AZ",
    title: "Accounts Payable Specialist",
  },
  {
    link: "https://www.iceenterprise.com/careers/job/?job_id=2353603",
    text: "Carlsbad, CA",
    title: "Ecommerce Fraud Manager",
  },
  {
    link: "https://www.iceenterprise.com/careers/job/?job_id=2308797",
    text: "Scottsdale, AZ",
    title: "Chief Technology Officer",
  },
];

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

  oneWrapper.style.width = "10%";
  twoWrapper.style.width = "40%";
  threeWrapper.style.width = "30%";
  fourWrapper.style.width = "20%";

  data.forEach((element, index) => {
    let num = newText("p", index + 1, ["table__text", "table__text-num"]);
    let numContainer = newContainer("div", [num], ["tablet__one-block"]);
    numContainer.style.height = "30px";
    let title = newText("h3", element.title, ["table__text"]);
    title.style.fontSize = "16px";
    let titleContainer = newContainer("div", [title], ["tablet__one-block"]);
    titleContainer.style.height = "30px";
    let location = newText("p", element.text, ["table__text"]);
    let locationContainer = newContainer(
      "div",
      [location],
      ["tablet__one-block"]
    );
    locationContainer.style.height = "30px";
    let link = newLink(element.link, "click to enter the offer", [
      "table__text",
    ]);
    let linkContainer = newContainer("div", [link], ["tablet__one-block"]);
    linkContainer.style.height = "30px";

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

let root = document.getElementsByClassName("fl-page-header-wraps")[0];
console.log(root);
root.appendChild(sectionTablet);
