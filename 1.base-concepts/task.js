function solveEquation(a, b, c) {
  "use strict";
  let arr = [], root1, root2;
  let discriminant = (-b)**2 - (4*a*c);
  if (discriminant > 0) {
    root1 = ((-b) + Math.sqrt(discriminant)) / (2*a);
    root2 = ((-b) - Math.sqrt(discriminant)) / (2*a);
    arr = [root1, root2];
    }
    else if (discriminant === 0) {
     root1 = (-b)/(2*a);
     arr = [root1];
   };
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount, credit, p, creditMonths, paymentMonth;
  if (!isNaN(percent)) {percent = Number(percent);}
  else {return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)};
  if (!isNaN(contribution)) {contribution = Number(contribution);}
  else {return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)};
  if (!isNaN(amount)) {amount = Number(amount);}
  else {return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`)};
  credit = amount - contribution;
  p = percent/12/100;
  creditMonths = Math.ceil((date - new Date()) / 2678400000);
  paymentMonth = credit * (p + (p / (((1 + p)**creditMonths) - 1)))
  totalAmount = Number((paymentMonth * creditMonths).toFixed(2));
  return totalAmount;
}
