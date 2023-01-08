const userModel = require("../model/userModel");
const {
  isValidName,
  isValidEmail,
  isValidPhone,
} = require("../validation/validator");

const createUser = async function (req, res) {
  try {
    const data = req.body;
    if (Object.keys(data).length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide Some Data" });
    }
    const { name, emailId, phoneNo } = data;
    if (!name) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide Name" });
    }
    if (!isValidName(name)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide Valid Name" });
    }
    if (!emailId) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide E-mail ID" });
    }
    if (!isValidEmail(emailId)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provie Valid E-mail Id" });
    }
    if (!phoneNo) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide Phone Number" });
    }
    if (!isValidPhone(phoneNo)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Provide Valid Phone Number" });
    }
    const saveData = await userModel.create(data);
    return res
      .status(201)
      .send({ status: true, msg: "Registration Successful", DATA: saveData });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports.createUser = createUser;
