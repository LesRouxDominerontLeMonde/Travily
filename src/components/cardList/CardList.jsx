import React from "react";
import styles from "./cardList.module.css"
import Pagination from "../pagination/Pagination";
import Post from "../post/Post";

const CardList = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Recent Posts</h3>
            <div className={styles.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <Pagination/>
        </div>
    )
}

export default CardList