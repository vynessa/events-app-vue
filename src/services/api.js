import axios from 'axios';
import { ApiServiceException } from '../services/utils';

const BASE_URL = `${process.env.EVENTS_APP_API_BASE_URL}${process.env.EVENTS_APP_API_VERSION}`;

/**
 * API class
 * @class EventsApi
 */
class EventsApi {
  constructor(){
    this.httpAxClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  /**
   * @description Memoizes data
   * @param {function} method 
   * @returns {function} method
   */
  memoizedData(method) {
    let cache = {};
    
    return new Promise ((resolve) =>  {
      let args = JSON.stringify(arguments);
      if(cache[args]){
        return cache[args]
      }else {
        cache[args] = method.apply(this, arguments)
      }
      // cache[args] = cache[args] || method.apply(this, arguments);
      return cache[args];
    });
  }

  /**
   * @description Gets all events list
   * @method
   * @returns {array} Events list
   */
  getEvents(queryData) {
    const { page, limit } = queryData;
    const apiUrl = `/events?page=${page}&limit=${limit}`;

    return this.httpAxClient.get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new ApiServiceException(error);
      });
  }

  /**
   * @description Gets specific events 
   * @method
   * @param {integer} eventId
   * @returns {object} Event
   */
  getEventDetail(eventId) {
    const apiUrl = `/events/${eventId}`;

    return this.httpAxClient.get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new ApiServiceException(error);
      });
  }

  /**
   * @description Gets specific event ticket types 
   * @method
   * @param {integer} eventId
   * @returns {array} Event ticket types
   */
  getEventTicketTypes(eventId) {
    const apiUrl = `/ticket-types/events/${eventId}`;

    return this.httpAxClient.get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new ApiServiceException(error);
      });
  }

  /**
   * @description Posts registration Info
   * @method
   * @param {object, integer}  
   * @returns {array} 
   */
  postRegistrationDetails(data, eventId) {
    const apiUrl = `/events/${eventId}/register`;

    return this.httpAxClient.post(apiUrl, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new ApiServiceException(error);
      });
  }

  /**
   * @description Create order
   * @method
   * @param {object}  
   * @returns {array} 
   */
  createOrder(data){
    const apiUrl = `/orders`;

    return this.httpAxClient.post(apiUrl, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new ApiServiceException(error);
      });
  }

  /**
   * @description
   * @param {integer} eventId 
   * @returns {array}
   */
  getEventDetailArgs(eventId) {
    return Promise.all([getEventDetail(eventId), getEventTicketTypes(eventId)])
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        throw new ApiServiceException(error);
      });
  }
}

export default EventsApi;
