import React from "react";
import search from "../assets/search.png"
import plus from "../assets/plus.png"
import time from "../assets/time.png"
import list from "../assets/list.png"
import install from "../assets/install.png"
import share from "../assets/share.png"
import cloud from "../assets/cloud.png"
import Button from "../lib/components/button";
import styles from "./WorkSpace.modules.css"

const WorkSpace = () => {
    return (
        <div className={styles.workSpace}>
            <div className={styles.header}>
                    <div className={styles.headerTop}>
                        <div>
                            <Button title={"Поиск"} imgUrl={search}/>
                        </div>
                        <div>
                            <Button title={"Добавить"} imgUrl={plus}/>
                        </div>
                    </div>
                    <div className={styles.headerButtom}>
                        <div>
                            <Button title={"Все закладки"} imgUrl={cloud}/>
                        </div>
                        <div>
                            <Button title={"По дате"} imgUrl={time} type="small"/>
                        </div>
                        <div>
                            <Button title={"Списком"} imgUrl={list} type="small"/>
                        </div>
                        
                    </div>
            </div>
            <div className={styles.display}>
                <b>Нет закладок</b>
                <p>Добавьте ссылку или перетащите файл.</p>
                <div>
                    <Button title={"Установить расширение для браузера"} imgUrl={install} type="small"/>
                </div>
                <div>
                    <Button title={"Импортировать закладку"} imgUrl={share} type="small"/>
                </div>
                
            </div>
        </div>
    )
}

export default WorkSpace