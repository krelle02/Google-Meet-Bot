function StopWatch() {
  let duration = 0,
    startTime,
    endTime,
    isRunning;

  this.start = () => {
    if (!isRunning) {
      isRunning = true;
      startTime = new Date();
    } else {
      throw new Error("stopwatch is already running");
    }
  };
  this.stop = () => {
    if (isRunning) {
      endTime = new Date();
      let time = (endTime.getTime() - startTime.getTime()) / 1000;
      startTime = null;
      endTime = null;
      isRunning = false;
      duration = 0;
      return time;
    } else {
      throw new Error("stopwatch is not running");
    }
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
const stopWatch = new StopWatch();

module.exports = stopWatch;
