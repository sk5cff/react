import React from "react";
import profile from "../assets/profile.png"
import cloud from "../assets/cloud.png"
import folder from "../assets/folder.png"
import not_sorted from "../assets/not_sorted.png"
import plus from "../assets/plus.png"

const Sidebar = () => {
    return (
        
        <div className='sidebar'>
            <img src={profile} width="35" height="35" alt="" />
            <img src={plus} width="35" height="35" alt="" />
            <img src={cloud} width="35" height="35" alt="" />
                <p>Все закладки</p>
            <img src={not_sorted} width="35" height="35" alt="" />
                <p>Несортированные</p>
            <p>Коллекции</p>
            <img src={folder} width="35" height="35" alt="" />
                <p>fff</p>

                <div className='add'> 
                    <p>Бесконечные возможности для организации ваших закладок</p>
                    <p>Перейти на PRO</p>
                </div>
        </div>
        

    )
}

export default Sidebar