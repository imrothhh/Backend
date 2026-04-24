/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

//  TODO - You need to export your class to use it

class Duration {
  /**
   * Total duration in seconds.
   * @type {number}
   * @private
   */
  _totalSeconds;

  /**
   * Creates a new Duration object.
   * @param {number} [seconds=0] - The number of seconds.
   */
  constructor(seconds = 0) {
    this.seconds = seconds;
  }

  /**
   * Creates a new Duration from a number of minutes and seconds.
   * @param {number} [minutes=0] - The number of minutes.
   * @param {number} [seconds=0] - The number of seconds.
   * @returns {Duration} A new Duration instance.
   */
  static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
    let newDuration;
    seconds = minutes * 60;
    newDuration = seconds;
    return newDuration;
  }

  /**
   * Returns a new Duration by adding another duration.
   * @param {Duration} other - Another duration to add.
   * @returns {Duration} A new Duration representing the sum.
   */
  plus = (other) => {
    result = this.seconds + other.seconds;
    return newDuration(result);
  };

  // YOUR COMMENT
  minus = (other) => {
    result = this.seconds - other.seconds;
    return newDuration(result);
  };

  /**
   * Converts the duration into a human-readable string, e.g., "2m 30s".
   * @returns {string} The formatted duration string.
   */
  toString = () => {
    if (this.seconds < 60) {
      return `${this.seconds}s`;
    } else {
      let minutes = Math.floor(this.seconds / 60);
      let seconds = this.seconds % 60;
      return `${minutes}mn ${seconds}s`;
    }
  };
}

export default Duration;
