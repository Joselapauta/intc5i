import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: "true",
    auth: {
        user: '',//correo electronico
        pass: ''//contra generada por google al momento de crear la aplicacion
    }
});
