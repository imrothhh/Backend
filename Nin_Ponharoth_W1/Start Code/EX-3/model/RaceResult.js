import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
  /**
   * @type {string} participant identifier
   */
  participantId;

  /**
   * @type {string} type of sport (e.g., running, swimming)
   */
  sportType;

  /**
   * @type {Duration} duration of the race
   */
  duration;
  static results = [];
  /**
   * Creates a new RaceResult
   * @param {string} participantId - the participant id
   * @param {string} sportType - the sport type
   * @param {Duration} duration - the race duration
   */
  constructor(participantID, sportType, duration) {
    this.participantID = participantID;
    this.sportType = sportType;
    this.duration = duration;

     // add this result into the list
    RaceResult.results.push(this);
  }
}