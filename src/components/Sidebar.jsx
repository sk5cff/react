import React from "react";
import profile from "../assets/profile.png"
import cloud from "../assets/cloud.png"
import folder from "../assets/folder.png"
import not_sorted from "../assets/not_sorted.png"
import plus from "../assets/plus.png"
import Button from "../lib/components/button";
import styles from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        
        <div className={styles.sidebar}>
            <div className={styles.menu}>
                <div>
                <Button title={"sk5_cff"} imgUrl={profile}/>
                <img src={plus} width="30" height="30" alt="" />
            </div>
            <div>
                <Button title={"Все закладки"} imgUrl={cloud}/>
            </div>
            <div>
                <Button title={"Несортированные"} imgUrl={not_sorted}/>
            </div>
            <p>Коллекции</p>
            <div>
                <Button title={"fff"} imgUrl={folder}/>
            </div>
            </div>
            
            <div className={styles.add}> 
                <p>Бесконечные возможности для организации ваших закладок</p>
                <p>Перейти на PRO</p>
            </div>
        </div>
        

    )
}

export default Sidebar