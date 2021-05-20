  const express = require('express');
  const cors = require('cors');  
  const bodyParser = require('body-parser');
  const nodemailer = require('nodemailer');
  
  
  const app = express();
  app.use(cors())
  app.options('*', cors())
  var mysql = require('mysql');

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
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

  connection.end();
  