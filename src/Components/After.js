import React from 'react'
import image_1 from '../images/image_1.png'
import After_css from './After.module.css'

const After = () => {
    return (
        <div>
           <div className={After_css.top}>
                <h1 className={After_css.Heading} >TEAM MEMBERS</h1>
                    <div className={After_css.text}>
                        <div className={After_css.cell}>
                            <div>
                                <h2>Cell Secratary</h2>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                            </div>
                            <div>
                                <h2>Deputy <br/>Cell Secretary</h2>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                            </div>
                        </div>
                        <div >
                            <img className={After_css.image_ally} src={image_1}/>
                        </div>
                    </div>
                    <div>
                        <h2 className={After_css.Heading_1}>Executives</h2>
                    </div>
                        <div className={After_css.cell_1}>             
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                        </div>
                        <div className={After_css.cell_2}>
                                <ul className={After_css.list_1}>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                                <ul className={After_css.list_2}>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                        </div>             
            </div>
        </div>
         
    )
}

export default After