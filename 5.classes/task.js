class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this._state *= 1.5;
    if (this._state > 100) {
      this._state = 100
    };
  }

  set state(value) {
    this._state = 100;
    if (value <= 100 && value >= 0) {
      this._state = value
    } else {
      this._state = 0
    };
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i in this.books) {
      for (let key in this.books[i]) {
        if (key === type && this.books[i][key] === value) {
          return this.books[i];
        };
      };
    };
    return null;
  }

  giveBookByName(bookName) {
    for (let i in this.books) {
      if (this.books[i].name === bookName) {
        let temporary = this.books[i]
        this.books.splice(i, 1);
        return temporary;
      };
    };
    return null;
  };
}

//------------------------------------------

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks_subjects = {};
  }

  addMark(mark, subject) {
    if (!this.marks_subjects[subject]) {
      this.marks_subjects[subject] = [];
    };
    if (mark>5 || mark<1 || typeof mark === 'string' ) {
     return console.log(`оценка ${mark} студента ${this.name} по предмету ${subject} не внесена в журнал.\nОценка должна быть числом от 1 до 5.`);
    }
    this.marks_subjects[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks_subjects[subject]) {
      return console.log(subject + ' Несуществующий предмет.');
    };
    return this.marks_subjects[subject].reduce((sum, elem) => sum + elem, 0)/this.marks_subjects[subject].length;
  }

  getAverage() {
    let sum = 0, i = 0;
    for (let key in this.marks_subjects) {
      sum = sum + this.marks_subjects[key].reduce((summa, elem) => summa + elem, 0)/this.marks_subjects[key].length;
      ++i;
    };
    return sum/i;
  }

  exclude(reason) {
  delete this.marks_subjects;
  this.excluded = reason;
  }

}
