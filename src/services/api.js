import axios from 'axios';

/**
 * API class
 * @class EventsApi
 */
class EventsApi {
  /**
   * @description Gets all events list
   * @method
   * @returns {array} Events list
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

   /**
   * @description Gets specific events 
   * @method
   * @param {integer} eventId
   * @returns {object} Event
   */
  static getEventDetail(eventId) {
    // const apiUrl = `${process.env.EVENTS_APP_API_BASE_URL}${process.env.EVENTS_APP_API_VERSION}`;
    const apiUrl = `https://eventsflw.herokuapp.com/v1/events/${eventId}`
    return axios.get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

   /**
   * @description Gets specific event ticket types 
   * @method
   * @param {integer} eventId
   * @returns {array} Event ticket types
   */
  static getEventTicketTypes(eventId) {
    // const apiUrl = `${process.env.EVENTS_APP_API_BASE_URL}${process.env.EVENTS_APP_API_VERSION}`;
    const apiUrl = `https://eventsflw.herokuapp.com/v1/ticket-types/events/${eventId}`
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
