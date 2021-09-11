import React from 'react'
import './Design.css'
import image_1 from '../../../images/image_1.png'

const Design = () => {
    return (
        <div className="design_head">
            <h1>Design Cell</h1>
            <div className="design_text">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque vitae libero et nibh tincidunt elementum vitae eget dui</p><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                    <div>
                    The Allied Works of NSS IIT Roorkee is a crucial part of the organization. This collaboration primarily came in effect to manage the Public Relations of the group.
                    </div>
                </div>
                <img className="image_ally" src={image_1}/>
            </div> 
        </div>
    )
}

export default Design
