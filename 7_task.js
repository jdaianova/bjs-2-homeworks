class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (isNaN(id)) {
      throw new Error('error text');
    };
    for (let i in this.alarmCollection) {
      if (this.alarmCollection[i][2] === id) {
        return console.error('Такой будильник уже существует!');
      };
    };
    this.alarmCollection.push([time, callback, id]);
  }

  removeClock(id) {
    let startLenght = clock.alarmCollection.length;
    for (let i in this.alarmCollection) {
      if (this.alarmCollection[i][2] === id) {
        this.alarmCollection.splice(i, 1);
      };
    };
    if (startLenght - clock.alarmCollection.length === 1) {
      return true;
    }else{
      return false;
    };
  }

  getCurrentFormattedTime(plus = 0) {
    /*
    let currentTime = new Date();
    return currentTime.getHours()+':'+(currentTime.getMinutes()+plus);
    */
    let currentTime = new Date();
    return currentTime.getHours()+':'+currentTime.getMinutes();
  }

  /*
  start() {

    function checkClock(alarm, context) {
      if (alarm.time === context.getCurrentFormattedTime()) {
        alarm.callback();
      };
    }

    function checkClocks(context) {
      context.alarmCollection.forEach(alarm => {
        checkClock(alarm, context)
      });
    }

    if (!this.timerId) {
      this.timerId = setInterval(() => checkClocks(this), 1000);
    }
  }
*/


  start() {
    function checkClock(arr) {
      if (arr[0] === clock.getCurrentFormattedTime()) {
        console.log(arr[1]);
      };
    }
    function checkClocks() {
      for (let i in this.alarmCollection) {
        checkClock(this.alarmCollection[i]);
      };
    }
    if (this.timerId === null) {
      this.timerId = 0;
    };
    setInterval(checkClocks(), 1000);
  }

  stop() {
    if (!isNaN(this.timerId)) {
      clearInterval();
      this.timerId = null;
    };
  }

  printAlarms() {
    this.alarmCollection.splice(0, this.alarmCollection.lenth);
  }


  clearAlarms() {
    console.log('start clearAlarms');
    let n = this.alarmCollection.length;
    this.alarmCollection.splice(0, n);
  }
}
