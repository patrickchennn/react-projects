export const dateFormatter = (when) => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  // console.log(when);

  return {
    day: weekday[when.getDay()],
    date:when.getDate(),
    month:month[when.getMonth()],
    year:when.getFullYear(),
    time:`${when.getHours()}:${when.getMinutes()}`,
  }
}