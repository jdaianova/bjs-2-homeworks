function parseCount(value) {
  let n = Number.parseInt(value);
  if (isNaN(n)) {
    throw new Error("Невалидное значение");
  };
  return n;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch(error) {
    return error;
  };
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return Number((this.side1 + this.side2 + this.side3).toFixed(3));
  }

  getArea() {
    let p = this.getPerimeter() * 0.5;
    return Number(Math.sqrt(p * (p-this.side1) * (p-this.side2) * (p-this.side3)).toFixed(3));
  }
}

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3);
  } catch (e) {
    return {getPerimeter(), getArea()};
  };
}

if ((this.side1 + this.side2 < this.side3) || (this.side2 + this.side3 < this.side1) || (this.side3 + this.side1 < this.side2)) {
  throw new Error("Треугольник с такими сторонами не существует");
};
