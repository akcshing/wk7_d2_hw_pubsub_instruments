const PubSub = require("../helpers/pub_sub.js");

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:allInstruments', this.data);

  PubSub.subscribe("SelectView:change", (event) => {
    const selectedIndex = event.detail;
    const instrumentFam = this.data[selectedIndex];
    PubSub.publish("InstrumentFamilies:fam", instrumentFam);
    // console.log(instrumentFam);
  })
};

module.exports = InstrumentFamilies;
