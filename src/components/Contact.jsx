import React from 'react'
import './style/Contact.css'

const Contact = () => {
  const contactList = [
  { type: "Email", value: "yourname@example.com" },
  { type: "Phone", value: "010-1234-5678" },
  { type: "GitHub", value: "github.com/yourname" }
];
  return (
    <section>
        <div className='t-wrap'>
            <h2>Contact title</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia sint, earum</p>
        </div>
    </section>
  )
}

export default Contact