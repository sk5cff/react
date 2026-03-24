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
                    <div className='headerTop'>
                        <div>
                            <img src={search} width="30" height="30" alt="" />
                            Поиск
                        </div>
                        <div>
                            <img src={plus} width="30" height="30" alt="" />
                            Добавить
                        </div>
                    </div>
                    <div className='headerBottom'>
                        <div>
                            <img src={cloud} width="30" height="30" alt="" />
                            Все закладки
                        </div>
                        <div>
                            <img src={time} width="23" height="23" alt="" />
                            По дате
                        </div>
                        <div>
                            <img src={list} width="23" height="23" alt="" />
                            Списком
                        </div>
                        
                    </div>
            </div>
            <div className="display">
                <p>Нет закладок</p>
                <p>Добавьте ссылку или перетащите файл.</p>
                <button1>
                    <img src={install} width="20" height="20" alt="" />
                    Установить расширение для браузера
                </button1>
                <button2>
                    <img src={share} width="20" height="20" alt="" />
                    Импортировать закладку
                </button2>
                
            </div>
        </div>
    )
}

export default WorkSpace