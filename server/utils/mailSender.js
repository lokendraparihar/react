const nodemailer = require("nodemailer");
require("dotenv").config();
const mailSender = async(email,title,body)=>{
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: "lokendraparihar748@gmail.com",
              pass: "vlprmxadrcdpwtwg",
            },
          });

        let info = await transporter.sendMail({
            from:'lokendra parihar',
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
        })
        console.log(info);
        return info;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = mailSender;