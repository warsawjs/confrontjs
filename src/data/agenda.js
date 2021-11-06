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

module.exports = [
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
    type: "talk",
    details: talkBy("Elad Shechter"),
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
    type: "talk",
    details: talkBy("Amit Sheen"),
  },
  {
    start: "12:00",
    end: "12:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Jemima Abu"),
  },
  {
    start: "12:30",
    end: "13:00",
    duration: "00:30",
    type: "talk",
    details: talkBy("Gil Fink"),
  },
  {
    start: "13:00",
    end: "13:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Rakhi Sharma"),
  },
  {
    start: "13:30",
    end: "14:00",
    duration: "00:30",
    type: "talk",
    details: talkBy("Evyatar Alush"),
  },
  {
    start: "14:30",
    end: "15:00",
    duration: "00:30",
    type: "talk",
    details: talkBy("Yonatan Kra"),
  },
  {
    start: "15:00",
    end: "15:30",
    duration: "00:30",
    type: "talk",
    details: talkBy("Tejas Kumar"),
  },
];
