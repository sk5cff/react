import React from "react";
import search from "../assets/search.png"
import plus from "../assets/plus.png"
import time from "../assets/time.png"
import list from "../assets/list.png"
import install from "../assets/install.png"
import share from "../assets/share.png"
import cloud from "../assets/cloud.png"

const WorkSpace = () => {
    return (
        <div className='work-space'>
            <div className='header'>
                <div>
                    <img src={search} width="35" height="35" alt="" />
                        <p>Поиск</p>
                    <img src={plus} width="35" height="35" alt="" />
                        <p>Добавить</p>
                        <div>
                            <img src={cloud} width="35" height="35" alt="" />
                                <p>Добавить</p>
                            <img src={time} width="25" height="25" alt="" />
                                <p>По дате</p>
                            <img src={list} width="25" height="25" alt="" />
                                <p>Списком</p>
                        </div>
                </div>
            </div>
            <img src={install} width="20" height="20" alt="" />
            <p>Установить расширение для браузера</p>
            <img src={share} width="20" height="20" alt="" />
            <p>Импортировать закладку</p>
        </div>
    )
}

export default WorkSpace