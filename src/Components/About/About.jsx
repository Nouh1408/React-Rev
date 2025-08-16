import React from 'react'
import AboutStyle from './About.module.css'
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p className={`${AboutStyle.color} ${AboutStyle.font}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit aut beatae doloribus ad nemo cupiditate cum neque vero doloremque?</p>
      <p className='bg-sky-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem laudantium voluptatum accusantium voluptas ipsa soluta modi, voluptates atque porro hic, perspiciatis, asperiores ullam nihil quisquam nulla dolores consequuntur provident alias in similique rem. Quae, ducimus? Natus fugiat iure quas perspiciatis.</p>
    </div>
  )
}
