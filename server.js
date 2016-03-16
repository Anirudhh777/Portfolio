var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './client')));
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://me.anirudhh@gmail.com:LkJhGfDsAxYZZy43526@smtp.gmail.com');
app.post('/mail', function(req, res) {
	console.log(req.body);
	var body = "From: " + req.body.email + '<br><br>' + " Text: " + req.body.message;
	var subject = "Subject: " + req.body.subject + " From: " + req.body.email; 
  	var mailOptions = {
    to: 'me.anirudhh@gmail.com', // list of receivers
    subject: subject, // Subject line
    text: body, // plaintext body
    html: body // html body
	};
	transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
        res.redirect('/');
    }
    console.log('Message sent: ' + info.response);
    res.redirect('/');
	});
})
app.listen(8000, function() {
  console.log('cool stuff on: 8000 check if right server');
});