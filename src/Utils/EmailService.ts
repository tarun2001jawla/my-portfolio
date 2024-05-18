/* eslint-disable @typescript-eslint/no-explicit-any */
import  { init, send } from 'emailjs-com';

// Initialize EmailJS with your User ID
init('2RFZeop-dvSg9GIhL');

export const sendEmail = (templateParams: any) => {
  return send('service_2d895y9', 'template_jzn4hcn', templateParams)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};