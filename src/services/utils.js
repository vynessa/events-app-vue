import moment from 'moment';

export const parseTime = (time) => {
  return moment(time).format("Do MMMM YYYY"); 
}

export const parseDateTime = (time) => {
  return moment(time).format('LLLL')
}
