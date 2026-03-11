import React from "react";
import profile from "../assets/profile.png"
import cloud from "../assets/cloud.png"
import folder from "../assets/folder.png"
import not_sorted from "../assets/not_sorted.png"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <img src={profile} width="35" height="35" alt="" />
            <img src={cloud} width="35" height="35" alt="" />
            <div>
                <img src={not_sorted} width="35" height="35" alt="" />
                <p>Коллекции</p>
            </div>
            <img src={folder} width="35" height="35" alt="" />
        </div>
    )
}

export default Sidebar