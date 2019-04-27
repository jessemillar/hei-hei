import clock from "clock";
import { today } from "user-activity";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const time = document.getElementById("time");
const day = document.getElementById("date");
const steps = document.getElementById("steps");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let date = evt.date;
  let hours = date.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(date.getMinutes());
  
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  
  var months = new Array(12);
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";
  
  time.text = `${hours}:${mins}`;
  day.text = weekday[date.getDay()] + `, ` + months[date.getMonth()] + ` ` + date.getDate();
  steps.text = (today.local.steps || 0) + ` steps`;
}
