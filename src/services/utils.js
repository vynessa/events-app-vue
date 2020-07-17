import axios from 'axios';

/**
 * API class
 * @class EventsApi
 */
class EventsApi {
  /**
   * @description Gets all events list
   * @method
   * @param {integer} page
   * @param {integer} page
   * @returns {object} Events list
   */
  static getEvents() {
    // const apiUrl = `${process.env.EVENTS_APP_API_BASE_URL}${process.env.EVENTS_APP_API_VERSION}`;
    const apiUrl = `https://eventsflw.herokuapp.com/v1/events`
    return axios.get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }
  
}

export default EventsApi;
