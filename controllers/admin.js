const Request = require('../models/request');
const nodemailer = require("nodemailer");
const Admin = require('../models/admin');
const database = require('../util/database');

const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

exports.getLogin = (req, res, next) => {
  res.render('admin/adminLogin');
}

exports.getUser = async(req, res, next) => {
  const userName = req.body.email;
  const password = req.body.password;

  console.log('user name'+ userName);
  console.log(password);

  const hasing = 'rootsp';
  const has = encrypt(hasing);
  console.log(has.encryptedData);
  const unhas = decrypt(has)
  console.log(unhas);
  const admi = new Admin('admin@gmail.com', has);
  admi.save();

  const [result, matadata] = await Admin.fetchAll(userName);
  
  if(result.length == 0){
    res.render('admin/adminLogin', {message: "account doesn't exist"} )
  }
  else if(! encrypt(password) === result[0].password){
    console.log(result.password);
    console.log(decrypt(result.password));
    res.render('admin/adminLogin', {message: "invalid password"} )
  }
  else{
    const request =await Request.fetchNew();
    console.log(request[0]);
    res.render('admin/request', {req: request[0]});
  }

}

exports.getRequest = async(req, res, next) => {
  const request =await Request.fetchNew();
  const sta = (request[0].status === 'import')? 'false' : 'true';
  console.log('status' + sta);
  res.render('admin/request', 
            {req: request[0],
             status: request[0].status});
}

exports.getProduct = (req, res, next) => {
  const reqId = req.params.requestId;

  Request.findById(reqId)
  .then(([row, fieldData]) => {
    res.render('admin/request_detail', {
      request: row[0]
    });
  })
  .catch(err => console.log(err));
}


function encrypt(text) {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
  // return encrypted.toString('hex');
 }


 exports.getHistoryDetail = (req, res, next) => {
  const reqId = req.params.requestId;

  Request.findById(reqId)
  .then(([row, fieldData]) => {
    res.render('admin/history-detail', {
      request: row[0]
    });
  })
  .catch(err => console.log(err));
}

exports.getProduct = (req, res, next) => {
  const reqId = req.params.requestId;

  Request.findById(reqId)
  .then(([row, fieldData]) => {
    res.render('admin/request_detail', {
      request: row[0]
    });
  })
  .catch(err => console.log(err));
}

exports.getHistory = async(req, res, next) => {
  const request =await Request.fetchAll();
  res.render('admin/history', {req: request[0]});
}
 
function decrypt(text) {
  let iv = Buffer.from(text.iv, 'hex');
  let encryptedText = Buffer.from(text.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}