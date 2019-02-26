const instrumentFamilyData = require("./data/instrument_family_data.js");
const SelectView = require("./views/select_view.js");
const ResultView = require("./views/result_view.js");
const InstrumentFamilies = require("./models/instrument_families.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector("#instrument-families")
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();

  const bodyElement = document.querySelector("body");
  const resultView = new ResultView(bodyElement);
  resultView.bindEvents();


  // console.log(instrumentFamilyData);


});
