const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
    const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Grade: ${req.body.grade}</li>
            <li>Contact Preference: ${req.body.contactPreference}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
        name: "mail.branchley.com",
        host: "box2064.bluehost.com",
        port: 465,
        secure: true,
        auth: {
            user: "admin@branchley.com",
            pass: "@Guelph2019"
        }
    })

    let mailOptions = {
        from: 'admin@branchley.com',
        to: 'amoksyak@uoguelph.ca, reswar@uoguelph.ca',
        replyTo: 'test@testaccount.com',
        subject: "Test Message!",
        text: req.body.message,
        html: htmlEmail
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (err) {
            return console.log(err)
        }

        console.log('Message sent; %s', info.message)
        console.log('Message url: %s', nodemailer.getTestMessageUrl(info))
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})