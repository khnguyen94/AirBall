import axios from "axios";

export default{
  addCalendarEvent: function(event){
    axios.post("/api/calendar", event);
  }
}