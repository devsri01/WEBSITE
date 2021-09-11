import React from 'react'
import image from '../images/image.png'
import Before_css from './Before.module.css'

const Before = () => {
    return (
        <div>
           <div className={Before_css.top}>
           <div className={Before_css.text}>
                <h1 className={Before_css.Heading} >Allied Works</h1>
                The Allied Works of NSS IIT Roorkee is a crucial part of the organization. This collaboration primarily came in effect to manage the Public Relations of the group. Allied Works consists mainly of 4 distinct units which are Editorial, Web Development, Photography and Design, each of which work together to spread information to the public.
           </div>  
            <div >
                <img className={Before_css.image_ally} src={image}/>
            </div>
           </div> 
        </div>
    )
}

export default Before