const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

app.post("/mail", (req, res) => {
    // console.log(req.body.name);
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            type: "OAuth2",
            user: "fornax.elit@gmail.com",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        },
    });

    const mailOptions = {
        to: "nikssan123@gmail.com",
        from: "fornax.elit@gmail.com",
        subject: req.body.name + " wants to connect!",
        text:
            "Email: " +
            req.body.mail +
            "\nPhone: " +
            req.body.phone +
            "\nMessage: " +
            req.body.message,
    };

    //send the actual mail
    transport
        .sendMail(mailOptions)
        .then(() => {
            res.redirect("/");
        })
        .catch(err => {
            console.log(err);
        });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server listening on port 3000");
});
