function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...theMarks) {
  if(this.marks === undefined){
    this.marks = theMarks;
  } else {
    this.marks = this.marks.concat(theMarks);
  }
}

Student.prototype.getAverage = function () {
   return this.marks.map(i=>x+=i, x=0).reverse()[0] / this.marks.length;
}

Student.prototype.excluded = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
