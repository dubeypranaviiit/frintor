const { Resend } = require('resend');
const config = require('./index.js');

const transporter = new Resend(config.EMAIL_SECRET);

module.exports = {
    transporter
};