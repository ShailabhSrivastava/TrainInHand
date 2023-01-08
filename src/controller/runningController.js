let axios = require("axios");

let runningStatus = async function (req, res) {
  try {
    let trainNumber = req.query.trainNumber;
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus",
      params: { trainNo: trainNumber },
      headers: {
        "X-RapidAPI-Key": "591e704acdmshf847d72669e0be2p138527jsn8a7a217a0133",
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      },
    };
    let result = await axios(options);
    let data = result.data;
    return res.status(200).send({ status: true, msg: data });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports.runningStatus = runningStatus;
