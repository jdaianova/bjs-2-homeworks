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
class Marks {
  constructor(mark, subject) {
    this.subject = subject;
    this.mark = [];
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

addMark(mark, subject) {
  this.subject = subject;

}

}
