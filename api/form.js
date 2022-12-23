const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer");
const Model = require("../Models/models")

router.post("/", (req, res) => {

    "use strict";
    async function main() {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "muchmarklbh@gmail.com",
                pass: "dzlmziluuzxgrhyl",
            },
        });

        `<div style="height: 300px; border: 2px solid black">
        <h3 style="text-align: center; background-color: pink; padding: 4px">
          * New Enquiry Received *
        </h3>
        <div style="margin: 2px; font-weight: 600">
          <p>Name:${req.body.name}</p>
          <p>Contact:${req.body.contact}</p>
          <p>Email:${req.body.email}</p>
          <p>Message:${req.body.content}</p>
        </div>
      </div>`
        let info = await transporter.sendMail({
            to: "jackandjillskolhapur@gmail.com,socialworkcontent@gmail.com",

            html: `<div style="height: 300px; border: 2px solid black">
            <div style="display: flex; justify-content: space-between">
                <img src="http://jackandjill.online/assets/img/logo/jacknjill_logo.png" alt="" height="60px"/>
            </div>
             <h3 style="text-align: center; background-color: pink; padding: 4px">
             * New Enquiry Received *
             </h3>
             <div style="margin: 2px; font-weight: 600">
             <p>Name:<span style="font-weight:500">${req.body.name}</span></p>
             <p>Contact:<span style="font-weight:500">${req.body.contact}</span></p>
             <p>Email:<span style="font-weight:500">${req.body.email}</span></p>
             <p>Message:<span style="font-weight:500">${req.body.content}</span></p>
             </div>
                <img src="http://jackandjill.online/jackandjill-offer/assets/img/christmas_offer.jpg"/>
             </div>`,
            subject: `Received New From ${req.body.name}`,
        });

        //create new entry and save to mongodb
        let useData = new Model(req.body)
        useData.save().then((doc) => {
            res.json({ status: 200, message: "mail sent succesfully..." })
        }).catch((err) => {

        })
    }

    main().catch((err) => {
        res.json({ status: 400, message: "some error occured please try again letter.." })
    });
})

// router.post('/postForm', (req, res) => {
// let Entry = new Model2(req.body);
//     Entry.save().then((val) => {

//         res.status(200).send("entry addded")
//     }).catch((err) => {
//         res.status(400).send(err)
//     })


// })

module.exports = router;