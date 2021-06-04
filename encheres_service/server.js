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
    host     : 'localhost', //localhost:3306
    user     : 'root', //SuiviHS
    password : 'root', //sDc4t*33
    database : 'ContactES2'
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
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'eldydev@gmail.com',
        pass: '1702@eldy',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

route.post('/text-mail', (req, res) => {
    const {to, subject, text } = req.body;
    console.log('body: ',req.body);
    const mailData = {
        from: 'youremail@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: text,
    };

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

request(options, function(err, response, body) {
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
  
  connection.query('select * from mytable', function(err, rows, fields) {
    if (err) throw err;
    app.use('/contact', (req, res) => {
      res.send({
        rows: rows
      });
    });
    console.log(rows)
  });

  connection.query('select * from MDV', function(err, rows, fields) {
    if (err) throw err;
    app.use('/mdvlist', (req, res) => {
      res.send({
        rows: rows
      });
    });
    console.log(rows)
  });

  /*app.put('/users/:id', (request, response) => {
    const id = request.params.id;


});*/

/*route.post('/text-mail', (req, res) => {
  const {to, subject, text } = req.body;
  console.log('body: ',req.body);
  const data = {
      from: 'youremail@gmail.com',
      to: to,
      subject: subject,
      text: text,
      html: text,
  };

  connection.query('UPDATE mytable SET avancement_cmd WHERE id = ?', [request.body, id], (error, result) => {
    if (error) throw error;

    response.send('User updated successfully.');
});
  
});*/

  connection.end();
  