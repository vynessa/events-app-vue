import moment from 'moment';

export const parseTime = (time) => {
  return moment(time).format("Do MMMM YYYY"); 
}
