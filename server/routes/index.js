var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/application/forward', function (req, res, next) {
  const body = req.body;
  const { forward_email, applicant_details, query_answers, applicant_issues, responder_details } = body;

  let query_answers_html = query_answers.map(query_answer => (`<p><strong>${query_answer.question}</strong> ${query_answer.selected_answer}</p>`))
  query_answers_html = query_answers_html.join("");




  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "ray644302280@gmail.com", // generated ethereal user
      pass: "wmmlrepkhbtxxdfy"  // generated ethereal password
    }
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: '"Mission Australia Admin Portal" <ray644302280@gmail.com>', // sender address
    to: forward_email, // list of receivers
    subject: 'A new application for the pre-crisis woman', // Subject line
    text: 'This is the Application for the pre-crisis woman', // plain text body
    html:
      `<h3>Pre-crisis Woman Details</h3>
      <p><strong>Name: </strong>${applicant_details.name}</p>
      <p><strong>Email: </strong>${applicant_details.email}</p>
      <p><strong>Phone: </strong>${applicant_details.phone}</p>
      <p><strong>Address: </strong>${applicant_details.address_details}</p>

      <hr/>
      <h3>Application Questions&Answers</h3>
      ${query_answers_html}


      <hr/>
      <h3>Issues</h3>
      <p><strong>Issues that woman has: </strong>${applicant_issues.issue}</p>
      <p><strong>Comment: </strong>${applicant_issues.notes}</p>


      <hr/>
      <h3>Who submitted the application</h3>
      <p><strong>Name: </strong>${responder_details.name}</p>
      <p><strong>Occupation: </strong>${responder_details.occupation}</p>
      `

  }).then(() => {
    res.json({
      error: false,
      message: "Success",
    })
  }).catch(err => {
    res.json({
      error: true,
      message: "Server Error",
    })
  })

});



module.exports = router;
