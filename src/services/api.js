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
  static getEvents(queryData) {
    const { page, limit } = queryData;
    // const apiUrl = `${process.env.EVENTS_APP_API_BASE_URL}${process.env.EVENTS_APP_API_VERSION}`;
    const apiUrl = `https://eventsflw.herokuapp.com/v1/events?page=${page}&limit=${limit}`
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

  /**
   * @description Posts registration Info
   * @method
   * @param {object}  
   * @returns {array} 
   */
  static postRegistrationDetails(data) {
    // const apiUrl = `${process.env.EVENTS_APP_API_BASE_URL}${process.env.EVENTS_APP_API_VERSION}`;
    const apiUrl = `https://eventsflw.herokuapp.com/v1/events/1/register`;
    return axios.post(apiUrl, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  /**
   * @description Create order
   * @method
   * @param {object}  
   * @returns {array} 
   */
  static createOrder(data){
    const apiUrl = `https://eventsflw.herokuapp.com/v1/orders`;
    return axios.post(apiUrl, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }
}

export default EventsApi;
