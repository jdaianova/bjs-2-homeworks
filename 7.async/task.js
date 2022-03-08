class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (isNaN(id)) {
      throw new Error('error text');
    };
    if (this.alarmCollection.some((element) => element.id === id)) {
      console.error('Такой будильник уже существует!');
    } else {
      this.alarmCollection.push({time, callback, id});
    };
  }

  removeClock(id) {
    const length = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(element => element.id !== id);
    console.log('удален звонок c id ', id);
    return this.alarmCollection.length !== length;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  checkClock(element) {
    console.log('checkClock ', element);
    console.log('element.id ', element.id);
    if (element.time === this.getCurrentFormattedTime()) {
      element.callback();
      this.removeClock(element.id);
    };
  }

  checkClocks() {
    this.alarmCollection.forEach(element => {this.checkClock(element)});
  }

  start() {
    if (!this.timerId) {
      this.timerId = setInterval(() => this.checkClocks(), 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
    this.alarmCollection.forEach(alarm => {
      console.log(`id: ${alarm.id}, time: ${alarm.time}`);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

const a = new AlarmClock();
a.addClock(a.getCurrentFormattedTime(), () => console.log('Дзинь!'), 1);
a.addClock(a.getCurrentFormattedTime(), () => console.log('Дзинь!'), 1);
a.removeClock(1);
a.addClock(a.getCurrentFormattedTime(), () => console.log('Дзинь-дзинь!'), 2);
a.addClock('20:00', () => console.log('Дзинь-дзинь-дзинь!'), 3);
a.printAlarms();
a.start();
