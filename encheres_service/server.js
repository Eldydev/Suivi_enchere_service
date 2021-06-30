const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const request = require('request');


const app = express();
app.use(cors())
app.options('*', cors())
var mysql = require('mysql');
const { json } = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost', //localhost:3306
  user: 'SuiviHS', //SuiviHS
  password: 'sDc4t*33', //sDc4t*33
  database: 'ContactES2'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const route = express.Router();
const port = process.env.PORT || 8080;

app.use('/v1', route);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  requireTLS: true,
  auth: {
    user: 'contact.encheres.services@gmail.com',
    pass: '1702.Eldie',
  },
  secure: false, // upgrades later with STARTTLS -- change this based on the PORT
});



route.post('/text-mail', (req, res) => {
  const { to, subject, text } = req.body;
  console.log('body: ', req.body);
  const mailist = to //+ ",contact@encheres-services.fr"
  const mailData = {
    from: 'youremail@gmail.com',
    to: mailist,
    subject: subject,
    text: text,
    html: text,
  };

  console.log(mailData)

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});


//test
app.use('/suivilaposte', (req, res) => {
  console.log('raq : ', req.query)
  var code = req.query
  console.log('code :', code.code)

  const options = {
    url: 'https://api.laposte.fr/suivi/v2/idships/' + code.code,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'X-Okapi-Key': 'nKCPaSn2xQgd1AAM0n27XSKSekDnxtcoTTj9/UTIffzRtWuiufGDkZqiyGks09zD'
    }
  };

  request(options, function (err, response, body) {
    var body = JSON.parse(body)
    res.send({
      body: body
    });
  });
});

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

connection.connect();

connection.query('select * from mytable', function (err, rows, fields) {
  if (err) throw err;
  app.use('/contact', (req, res) => {
    res.send({
      rows: rows
    });
  });
  console.log(rows)
});

connection.query('select * from MDV', function (err, rows, fields) {
  if (err) throw err;
  app.use('/mdvlist', (req, res) => {
    res.send({
      rows: rows
    });
  });
  console.log(rows)
});

route.post('/get-number', (req, res) => {
  const { id } = req.body;
  console.log('body: ', req.body);

  var sql = "SELECT Numsuivi FROM mytable WHERE id = '" + id + "'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result)
    res.send({
      rows: result
    });
  });
});


route.post('/update-number', (req, res) => {
  const { num, id } = req.body;
  console.log('body: ', req.body);

  var sql = "UPDATE mytable SET Numsuivi = '" + num + "' WHERE id = '" + id + "'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

route.post('/update-status', (req, res) => {
  const { status, id, date } = req.body;
  console.log('body: ', req.body);

  var sql = "UPDATE mytable SET avancement_cmd = '" + status + "',Last_Activity_Date = '" + date + "'  WHERE id = '" + id + "'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

route.get('/get-contact', (req, res) => {
  var sql = "select * from mytable ORDER BY Last_Activity_Date DESC";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result)
    res.send({
      rows: result
    });
  });
});

route.post('/update-mdv', (req, res) => {
  const { mdv, id } = req.body;
  console.log('body: ', req.body);

  var sql = "UPDATE mytable SET id_MDV = '" + mdv + "' WHERE id = '" + id + "'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});

route.post('/get-mdv', (req, res) => {
  const { id } = req.body;
  console.log('body: ', req.body);

  var sql = "SELECT id_MDV FROM mytable WHERE id = '" + id + "'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result)
    res.send({
      rows: result
    });
  });
});

route.post('/create-contact', (req, res) => {
  const { nom, prénom, email, tel, société, rue, ville, cp, pays, rueadl, villeadl, cpadl, paysadl, date } = req.body;
  console.log('body: ', req.body);

  var sql = "INSERT INTO `mytable`" +
    "(`First_Name`, `Last_Name`, `Email`," +
    " `Phone`, `Address_Street`, `Address_City`," +
    " `Address_State`, `Address_Zip`, `Address_Country`," +
    " `Company`, `Labels`,`Created_At`," +
    " `Subscription_Status`, `Last_Activity`, `Last_Activity_Date`," +
    " `Source`, `PAYS_LIVRAISON`, `VILLE_LIVRAISON`, " +
    "`Code_postal_LIVRAISON`, `Adresse_de_livraison`, `Date`, " +
    "`avancement_cmd`, `Numsuivi`, `id_MDV`)" +
    " VALUES ('" + prénom + "','" + nom + "','" + email + "','" + tel +
    "','" + rue + "','" + ville + "','','" + cp + "','" + pays +
    "','','','" + date + "','','','" + date +
    "','" + paysadl + "','" + villeadl + "','" + cpadl + "','" + rueadl + "','',NULL,'','','')"

  var sql2 = "INSERT INTO `mytableSave`" +
    "(`First_Name`, `Last_Name`, `Email`," +
    " `Phone`, `Address_Street`, `Address_City`," +
    " `Address_State`, `Address_Zip`, `Address_Country`," +
    " `Company`, `Labels`,`Created_At`," +
    " `Subscription_Status`, `Last_Activity`, `Last_Activity_Date`," +
    " `Source`, `PAYS_LIVRAISON`, `VILLE_LIVRAISON`, " +
    "`Code_postal_LIVRAISON`, `Adresse_de_livraison`, `Date`, " +
    "`avancement_cmd`, `Numsuivi`, `id_MDV`)" +
    " VALUES ('" + prénom + "','" + nom + "','" + email + "','" + tel +
    "','" + rue + "','" + ville + "','','" + cp + "','" + pays +
    "','','','" + date + "','','','" + date +
    "','" + paysadl + "','" + villeadl + "','" + cpadl + "','" + rueadl + "','',NULL,'','','')"
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) created");
    res.send({
      result: 'succes'
    });
  });

  connection.query(sql2, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) created");
  });
});

route.post('/update-contact', (req, res) => {
  const { nom, prénom, email, tel, société, rue, ville, cp, pays, rueadl, villeadl, cpadl, paysadl, date, id } = req.body;
  console.log('body: ', req.body);

  var sql = "UPDATE `mytable` SET" +
    "`First_Name` = '" + prénom + "', `Last_Name` = '" + nom + "', `Email` = '" + email + "'," +
    "`Phone` = '" + tel + "', `Company` = '" + société + "'," +
    "`Address_Street` = '" + rue + "', `Address_City` = '" + ville + "', `Address_Zip` = '" + cp + "'," +
    "`Address_Country` = '" + pays + "', `Adresse_de_livraison` = '" + rueadl + "', `VILLE_LIVRAISON` = '" + villeadl + "'," +
    "`Code_postal_LIVRAISON` = '" + cpadl + "', `PAYS_LIVRAISON` = '" + paysadl + "', `Last_Activity_Date` = '" + date +
    "' WHERE id = '" + id + "'";

  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.send({
      result: 'succes'
    });
  });
});