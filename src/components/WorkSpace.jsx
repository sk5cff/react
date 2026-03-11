import React from "react";
import search from "../assets/search.png"
import plus from "../assets/plus.png"

const WorkSpace = () => {
    return (
        <div className='work-space'>
            <div className='header'>
                <div>
                    <img src={search} width="35" height="35" alt="" />
                    <p>Поиск</p>
                </div>
                <img src={plus} width="35" height="35" alt="" />
                
            </div>
        </div>
    )
}

export default WorkSpace