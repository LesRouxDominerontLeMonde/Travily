import React from "react";
import styles from "./menu.module.css"
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h5 className={styles.subtitle}>{"what's hot"}</h5>
            <h3 className={styles.title}>Most Popular</h3>
            <MenuPosts withImage={false} />
        </div>
    )
}

export default Menu