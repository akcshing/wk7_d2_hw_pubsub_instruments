const PubSub = require("../helpers/pub_sub.js");

const SelectView = function(element){
  this.element = element
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:allInstruments', (event) => {
    // console.log(event.detail);
    const instrumentArr = event.detail;
    this.populate(instrumentArr);
  });

  this.element.addEventListener("change", (event) => {
    selectedIndex = event.target.value;
    // console.log(selectedIndex);
    PubSub.publish("SelectView:change", selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentArr){
  instrumentArr.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView;
