import React from "react";
import profile from "../assets/profile.png"
import cloud from "../assets/cloud.png"
import folder from "../assets/folder.png"
import not_sorted from "../assets/not_sorted.png"
import plus from "../assets/plus.png"

const Sidebar = () => {
    return (
        
        <div className='sidebar'>
            <div>
                <img src={profile} width="30" height="30" alt="" />
                <img src={plus} width="30" height="30" alt="" />
            </div>
            <div>
                <img src={cloud} width="30" height="30" alt="" />
                Все закладки
            </div>
            <div>
                <img src={not_sorted} width="30" height="30" alt="" />
                Несортированные
            </div>
            <p>Коллекции</p>
            <div>
                <img src={folder} width="30" height="30" alt="" />
                fff
            </div>
                <div className='add'> 
                    <p>Бесконечные возможности для организации ваших закладок</p>
                    <p>Перейти на PRO</p>
                </div>
        </div>
        

    )
}

export default Sidebar