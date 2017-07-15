import axios from 'axios';
import nodmailer from 'nodemailer';
import keys from '../../config/oauth';
import { Email, Item, Span, A, renderEmail } from 'react-html-email';

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: keys.email,
      clientId: keys.clientId,
      clientSecret: keys.clientSecret,
      refreshToken: keys.refreshToken,
      accessToken: keys.accessToken,
      expires: keys.expires
  }
});

const helpers = {

  // nodemailer
  emailResults: (userData) {
    let message = {
        from: keys.email,
        to: 'receiver@sender.com',
        subject: 'Message title',
        text: 'Plaintext version of the message',
        html: '<p>HTML version of the message</p>'
    };
  }

}

export default helpers;
