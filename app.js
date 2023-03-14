"use script";

const calcBtn = document.querySelector(".calc");
const resetBtn = document.querySelector(".reset");
const billAmount = document.querySelector(".bill--amount");
const tipPercentage = document.querySelector(".tip--percentage");
const people = document.querySelector(".people");
const tipAmount = document.querySelector(".tip--amount");
const totalBill = document.querySelector(".total--bill");
const perPerson = document.querySelector(".per--person");

calcBtn.addEventListener("click", function () {
  tipAmount.value = (billAmount.value / 100) * tipPercentage.value;
  totalBill.value = Number(tipAmount.value) + Number(billAmount.value);
  perPerson.value = totalBill.value / people.value;
});

resetBtn.addEventListener("click", function () {
  billAmount.value = "";
  tipPercentage.value = "";
  people.value = "";
  tipAmount.value = "";
  totalBill.value = "";
  perPerson.value = "";
});
