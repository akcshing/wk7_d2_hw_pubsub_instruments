const PubSub = require("../helpers/pub_sub.js");

const ResultView = function (element) {
  this.element = element
};

ResultView.prototype.bindEvents = function () {

  const displayElement = document.createElement("section");
  this.element.appendChild(displayElement);

  PubSub.subscribe("InstrumentFamilies:fam", (event) => {
    // console.log(event.detail);

    const fam = event.detail

    const currentSection = document.querySelector("section");
    currentSection.innerHTML = "";

    const famName = document.createElement("h2");
    famName.textContent = fam.name;
    displayElement.appendChild(famName);

    const famDesc = document.createElement("p");
    famDesc.textContent = fam.description;
    displayElement.appendChild(famDesc);

    const instrumentsHeading = document.createElement("h3");
    instrumentsHeading.textContent = "Instruments include:"
    displayElement.appendChild(instrumentsHeading);

    const instrumentsList = document.createElement("ul");
    displayElement.appendChild(instrumentsList);

    const instrumentsArr = fam.instruments;
    instrumentsArr.forEach((instrument) => {
      const instrumentListItem = document.createElement("li");
      instrumentListItem.textContent = instrument;
      instrumentsList.appendChild(instrumentListItem);
    });



  })

};


module.exports = ResultView;
