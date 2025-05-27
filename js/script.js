// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html


function myButtonClicked() {
  // input
  const inputHours = parseFloat(document.getElementById("hours-input").value)
  const inputWage = parseFloat(document.getElementById("wage-input").value)
  const TAX_INCOME = 0.18

  // process
  const homeSalary = (inputHours * inputWage) * (1.00 - TAX_INCOME)
  const payedTax = (inputHours * inputWage) * TAX_INCOME


  // output
  document.getElementById('answer').innerHTML =
    `Your take-home pay will be: $${homeSalary.toFixed(2)}<br>
    Total tax paid: $${payedTax.toFixed(2)}`
}
