import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Hey, travel lovers</b> Discover your futur favorite website. :D 
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src="/p1.jpeg" alt="" fill/>
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                    <p className={styles.postDesc}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Totam doloribus fugiat nemo odit soluta veniam corporis 
                        possimus. Consectetur sunt natus dolor! Dolore fugit, 
                        nihil ducimus dolores repellendus commodi aliquam corrupti.
                    </p>
                    <button className={styles.postButton}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured;