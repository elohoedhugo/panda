import emailjs from '@emailjs/browser'

export const sendEmail = (form) => {
  

  emailjs.sendForm('service_rsfpk6s', 'template_r11761g', form.current, {
    publicKey: 'vQHBn9kMcJGMFHBPz',
  })
  .then(
    () => {
        console.log('SUCCESS');
    },
    (error) => {
        console.log('FAILED...', error.text)
    }
  )
}