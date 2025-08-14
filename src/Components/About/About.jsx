import React from 'react'
import AboutStyle from './About.module.css'
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p className={`${AboutStyle.color} ${AboutStyle.font}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit aut beatae doloribus ad nemo cupiditate cum neque vero doloremque?</p>
    </div>
  )
}
