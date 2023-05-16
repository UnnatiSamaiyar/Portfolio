import './FormStyles.css'

import React from 'react'

const ContactData = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Enter your message here"></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default ContactData