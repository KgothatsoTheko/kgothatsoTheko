const message = require('../models/message.js')
const sendMail = require('../sendMail.js')

module.exports = {
    defaultRoute: async (req, res) => {
        try {
            res.send(`<h2>Welcome to KG's Backend ☮️</h2>`)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    messageRoute: async(req, res) => {
        try {
            const newMessage = new message({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                message: req.body.message
            }) 
            // send email
        const mailOptions = {
            from: {
                name: `Leads - ${req.body.firstName}`,
                address: req.body.email
            },
            to: "kgothatsotheko7@gmail.com",
            subject: "Service Enquiries",
            text: `New message from: ${req.body.firstName} ${req.body.lastName} (${req.body.email})\n\n${req.body.message}`,
            html: `<p><strong>From:</strong> ${req.body.firstName} ${req.body.lastName} (${req.body.email})</p>
                   <p><strong>Message:</strong></p>
                   <p>${req.body.message}</p>`,
        };
            await sendMail(mailOptions);
            await newMessage.save()
            return res.status(200).send('Message Sent')
        } catch (error) {
            return res.status(500).send("Internal Server Error")
        }
    }

}