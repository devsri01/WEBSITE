import React from 'react'
import Subnav_css from './Subnav.module.css'
import { NavLink } from 'react-router-dom'
// import Design from './verticals/design/Design'
// import { matchPath } from "react-router";
export const Subnav = () => {
    // if(path === "/contacts/all"){
    //     document.getElementById(Subnav_css.contacts_nav).classList.toggle(Subnav_css.active)
    // }
    // const match = matchPath("/contacts/all",{
    //     console.log("Yes")
    // })
    let active =(e)=>{
        document.getElementById("Woman_Empowerment").ariaSelected = false;
        document.getElementById("Design").ariaSelected = false;
        document.getElementById("Web_Development").ariaSelected = false;
        document.getElementById("Editorial").ariaSelected = false;
        document.getElementById("Photography_and_Videography").ariaSelected = false;
        e.target.ariaSelected = true;
    }

    return (
        <>
            <div id={Subnav_css.contacts_nav}>
                <ul id={Subnav_css.subnav}>
                    <NavLink className={Subnav_css.subnav_link} to="/verticals/woman_empowerment/Woman_Empowerment"><li onClick={active} id="Woman_Empowerment" aria-selected={true} className={Subnav_css.subnav_item}>Woman Empowerment</li></NavLink>
                    <NavLink className={Subnav_css.subnav_link} to="/verticals/design/Design"><li onClick={active} id="Design" aria-selected={false} className={Subnav_css.subnav_item}>Design</li></NavLink>
                    <NavLink className={Subnav_css.subnav_link} to="/verticals/web_development/Web_Development"><li onClick={active} id="Web_Development" aria-selected={false} className={Subnav_css.subnav_item}>Web Development</li></NavLink>
                    <NavLink className={Subnav_css.subnav_link} to="/verticals/editorial/Editorial"><li onClick={active} id="Editorial" aria-selected={false} className={Subnav_css.subnav_item}>Editorial</li></NavLink>
                    <NavLink className={Subnav_css.subnav_link} to="/verticals/photography_and_videography/Photography_and_Videography"><li onClick={active} id="Photography_and_Videography" aria-selected={false} className={Subnav_css.subnav_item}>Photography and Videography</li></NavLink>
                </ul>
            </div>
        </>
    )
}