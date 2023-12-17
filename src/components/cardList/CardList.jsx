import React from "react";
import styles from "./cardList.module.css"
import Pagination from "../pagination/Pagination";
import Post from "../post/Post";


const getData = async (page) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
        cache: "no-store",
    });

    if(!res.ok) {
        throw new Error("Failed")
    }

    return res.json();
};


const CardList = async({page}) => {

    const data = await getData(page);
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Recent Posts</h3>
            <div className={styles.posts}>
                {data?.map((item) => (
                    <Post item={item} key={item._id}/>
                ))}
            </div>
            <Pagination/>
        </div>
    )
}

export default CardList