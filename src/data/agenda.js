const talks = require("./talks");

function talkBy(name) {
  const talk = talks.find((item) => {
    return item.speaker.name === name;
  });

  if (talk) {
    return talk;
  }

  return name;
}

const opnening = [
  {
    start: "08:00",
    end: "09:30",
    duration: "01:30",
    type: "",
    details: "Registration",
  },
  {
    start: "09:30",
    end: "10:00",
    duration: "00:30",
    type: "talk",
    details: talkBy("Avital Tzubeli"),
  },
];

const trackOne = [
  {
    start: "10:00",
    end: "10:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Eleftheria Batsou"),
  },
  {
    start: "10:30",
    end: "11:00",
    duration: "00:30",
    type: "",
    details: "Sponsor Slot",
  },
  {
    start: "11:00",
    end: "11:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Evgeny Kot"),
  },
  {
    start: "11:30",
    end: "12:00",
    duration: "00:30",
    type: "",
    details: "Sponsor Slot",
  },
  {
    start: "12:00",
    end: "12:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Amit Sheen"),
  },
  {
    start: "13:45",
    end: "14:15",
    duration: "00:30",
    type: "",
    details: "Sponsor Slot",
  },
  {
    start: "14:15",
    end: "14:45",
    duration: "00:30",
    type: "talk",
    details: talkBy("Rakhi Sharma"),
  },
  {
    start: "14:45",
    end: "15:15",
    duration: "00:30",
    type: "",
    details: "Sponsor Slot",
  },
  {
    start: "15:15",
    end: "16:45",
    duration: "00:30",
    type: "",
    details: "Lightning Session",
  },
];
const trackTwo = [
  {
    start: "10:00",
    end: "10:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Elad Shechter"),
  },
  {
    start: "10:30",
    end: "11:00",
    duration: "00:30",
    type: "",
    details: "Sponsor Slot",
  },
  {
    start: "11:00",
    end: "11:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Jemima Abu"),
  },
  {
    start: "11:30",
    end: "12:00",
    duration: "00:30",
    type: "",
    details: "Sponsor Slot",
  },
  {
    start: "12:00",
    end: "12:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Gil Fink"),
  },
  {
    start: "13:45",
    end: "14:15",
    duration: "00:30",
    type: "",
    details: "Sponsor Slot",
  },
  {
    start: "14:15",
    end: "14:45",
    duration: "00:30",
    type: "talk",
    details: talkBy("Evyatar Alush"),
  },
  {
    start: "14:45",
    end: "15:15",
    duration: "00:30",
    type: "",
    details: "Sponsor Slot",
  },
  {
    start: "15:15",
    end: "15:45",
    duration: "00:30",
    type: "talk",
    details: talkBy("Yonatan Kra"),
  },
  {
    start: "15:45",
    end: "16:15",
    duration: "00:30",
    type: "talk",
    details: talkBy("Tomasz Stachewicz"),
  },
  {
    start: "16:15", //14:30
    end: "16:45", //15:00
    duration: "00:30",
    type: "",
    details: "Lightning Session",
  },
];
const dinner = [
  {
    start: "12:30",
    end: "13:45",
    duration: "01:15",
    type: "",
    details: "Lunch",
  },
];

const closing = [
  {
    start: "17:00",
    end: "17:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Tejas Kumar"),
  },
];

module.exports = { opnening, trackOne, trackTwo, dinner, closing };
