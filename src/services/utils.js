import moment from 'moment';
import numberFormatter from 'number-formatter';

export const parseTime = (time) => {
  return moment(time).format("Do MMMM YYYY"); 
};

export const parseDateTime = (time) => {
  return moment(time).format('LLLL')
};

export const formatter = (numberData) => {
  return numberFormatter("#,###.", numberData);
};

export const displayToast = (notifier, notification) => {
  return notifier({
    group: 'toast',
    title: toastHeader(notification.type),
    text: notification.message,
    type: notification.type
  });
};

export const toastHeader = (notificationType) => {
  switch(notificationType){
    case "success":
      return "Success!"
    case "error":
      return "Error"
    case "warn":
      return "Warning!"
    default:
      return ""
  } 
}

export const ApiServiceException = (e, _meta) => {
  if (!e.response)
    e = {response: {status: 0, statusText: "Unknown Error", data: {message: "An Error Occurred"}}};
  this.code = e.response.status;
  this.message = e.response.data.message || e.response.statusText;
  this.meta = _meta;
}
