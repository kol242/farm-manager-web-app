import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsGlobe } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import '../Common/Style/footer.scss'

const Footer = () => {
  return (
    <div className="footer">
        <p>Visit my other profiles</p>
        <div className="link">
        <a href="https://github.com/kol242">
            <BsGithub id='logo'/>  
        </a>
        <a href="https://portfolio-website-seven-fawn.vercel.app/">
            <BsGlobe id='logo'/> 
        </a>
        <a href="https://www.linkedin.com/in/valentino-kolinger-96236a19a/">
            <BsLinkedin id='logo'/>  
        </a> 
        </div>
    <p>Developed and designed by <span className="bolded">Kolinger®</span> - 2022</p>
    </div>
  )
}

export default Footer