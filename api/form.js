const express = require("express")
const router = express.Router();
const nodemailer = require("nodemailer");
const Model = require("../Models/models");
const LeadModel = require("../Models/Leadmodel")

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

        //     `<div style="height: 300px; border: 2px solid black">
        //     <h3 style="text-align: center; background-color: pink; padding: 4px">
        //       * New Enquiry Received *
        //     </h3>
        //     <div style="margin: 2px; font-weight: 600">
        //       <p>Name:${req.body.name}</p>
        //       <p>Contact:${req.body.contact}</p>
        //       <p>Email:${req.body.email}</p>
        //       <p>Message:${req.body.content}</p>
        //     </div>
        //   </div>`
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
             <p>Contact: <span style="font-weight:500">${req.body.contact}</span></p>
             <p>Email: <span style="font-weight:500">${req.body.email}</span></p>
             <p>Relation With Child: <span style="font-weight:500">${req.body.relation1}</span></p>
             <p>Child Age: <span style="font-weight:500">${req.body.child_age}</span></p>
             <p>Child's Relation: <span style="font-weight:500">${req.body.relation2}</span></p>
             <p>Shopping Method: <span style="font-weight:500">${req.body.shopMethod}</span></p>
             </div>
             </div>`,
            subject: `Received New From ${req.body.email}`,
        });

        //create new entry and save to mongodb
        let useData = new Model(req.body)
        useData.save().then((doc) => {
            res.json({ status: 200, message: "Mail sent succesfully..." })
        }).catch((err) => {

        })
    }

    main().catch((err) => {
        res.json({ status: 400, message: "some error occured please try again letter.." })
    });
})

router.post("/leaddata", (req, res) => {

    const myLead = new LeadModel(req.body)
    myLead.save().then((val) => {
        res.status(200).send("Ok")
    }).catch((err) => {
        res.status(400).send("Error Occured")
    })
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