import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ec6c8e19-f3fb-4764-9a93-a6df352cc5cf");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
           alert(res.message);
        }
      };
  return (
    <div id="contact" className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=""/>
        </div>

        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currently available to taken on new projects, so feel free to send me a massage about anything that you want me to work on. </p>

                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=''/>
                        <p>portfoliowebsite@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                        <img src={location_icon} alt=''/>
                        <p>+777-526-845</p>
                    </div>

                    <div className="contact-detail">
                        <img src={call_icon} alt=''/>
                        <p>CA, United States</p>
                    </div>

                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
               <lable htmlFor=''>Your Name</lable>
               <input type='text' placeholder='Enter your name' name='name'/>
               <lable htmlFor=''>Your Email</lable>
               <input type='text' placeholder='Enter your email' name='email' />
               <lable htmlFor=''>Write your message here</lable>
               <textarea name='message' rows='8' aria-placeholder='Enter your message'/>
               <button type='submit' className='contact-submit'>Submit now</button>


            </form>
        </div>

    </div>
  )
}

export default Contact