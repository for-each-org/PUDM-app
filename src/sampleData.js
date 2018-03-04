/***** EVERYTHING HERE IS TEMPORARY. WILL BE REMOVED WHEN ENDPOINTS ARE LIVE *****/
import moment from "moment";

/* Object that maps group ids to their color as a string */
export const groupMapping = {
  [0] : "Blue",
  [1] : "Yellow",
  [2] : "Red",
  [3] : "Orange",
  [4] : "Green",
  [5] : "Pink",
  [6] : "Purple",
};

const fixedTime = moment().format();
export const notificationData = [
  {
      id: 1,
      time: fixedTime,
      content: "Team to Lobby Area",
      group: 2
  },
  {
      id: 2,
      time: fixedTime,
      content: "Team to Court 5",
      group: 5
  },
  {
      id: 3,
      time: fixedTime,
      content: "Opening Ceremony",
      group: 0
  },
  {
      id: 4,
      time: fixedTime,
      content: "Team Meeting",
      group: 1
  },
  {
      id: 5,
      time: fixedTime,
      content: "Team Sign-In",
      group: 4
  },
  {
      id: 6,
      time: fixedTime,
      content: "Team to Court 1",
      group: 3
  },
  {
      id: 7,
      time: fixedTime,
      content: "Team Dinner",
      group: 4
  },
  {
      id: 8,
      time: fixedTime,
      content: "Team Evacuate Building 2",
      group: 6
  },
];

export const userData = [
  {
     name: "Clayton Marshall",
     email: "anemail@email.com",
     bag: false,
     checkIn: true,
  },
  {
     name: "John Wick",
     email: "wicky@gmail.com",
     bag: true,
     checkIn: true,
  },
  {
     name: "John Mulaney",
     email: "jm@gmail.com",
     bag: true,
     checkIn: false,
  },
  {
     name: "Drew Atkinson",
     email: "drewbiedoobydoo@purdue.edu",
     bag: true,
     checkIn: true,
  },
  {
     name: "Michael Scott",
     email: "mjscott@dundermifflin.com",
     bag: false,
     checkIn: false,
  },
  {
     name: "Norm Hull",
     email: "justanormhullguy@yagoo.com",
     bag: false,
     checkIn: true,
  },
];
