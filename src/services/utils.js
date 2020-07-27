import moment from 'moment';
import numberFormatter from 'number-formatter';

export const parseTime = (time) => {
  return moment(time).format("Do MMMM YYYY"); 
}

export const parseDateTime = (time) => {
  return moment(time).format('LLLL')
}

export const formatter = (numberData) => {
  return numberFormatter("#,###.", numberData);
}
