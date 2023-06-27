import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># contact us</h2>
            <div className='form'>
                <form>
                    <input type='text' name='Name' placeholder='Enter Your Full Name' required></input>
                    <input type='email' name='Email' placeholder='Enter Your E-mail' ></input>
                    <input type='text' name='Subject' placeholder='Enter Your Subject' ></input>
                    <textarea name='Message' placeholder='Your Message' ></textarea>
                    <button type='submit'>send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact;