const express = require('express')
const router = express.Router()
// reqest param
// 
// /menu/YYYY/MM/DD
router.get('/menu/:year/:month/:date', (req, res, next) => {
  //varidate
  var isOK = true;
  var year = req.params.year;
  var month = req.params.month;
  var date = req.params.date;

  // param
  var param = {
    "2019": [{
        id: 0,
        date: "07/27",
        star: [1, 2, 3],
        breakfast: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"],
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
        lunch: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
        dinner: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"],
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
      },
      {
        id: 1,
        date: "07/28",
        star: [4, 5, 1],
        breakfast: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"],
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
        lunch: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
        dinner: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"],
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
      },
      {
        id: 2,
        date: "07/29",
        star: [3, 1, 5],
        breakfast: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"],
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
        lunch: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
        dinner: [
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"],
          ["ご飯", "味噌汁", "ポテトサラダ", "サイコロ高野", "牛乳"]
        ],
      },
    ],
  };

  if (!(year.match(/^[0-9]+/)) || year.length != 4) {
    isOK = false;
  } else {
    param = param[year];
  }
  if (!(month.match(/^[0-9]+/)) || month.length != 2) {
    isOK = false;
  } else if (!(date.match(/^[0-9]+/)) || date.length != 2) {
    isOK = false;
  } else {
    param = param.filter((params) => {
      return (params.date === month + '/' + date);
    })
  }
  if (isOK == false) {
    param = null;
  }

  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param)
})

module.exports = router
