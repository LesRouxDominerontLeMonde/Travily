import React from "react";
import styles from "./post.module.css"
import Image from "next/image";
import Link from "next/link";

const Post = ({key, item}) => {

    //Date format change
    const createdAt = new Date(item.createdAt);
    const formattedDate = `${createdAt.getHours()}:${(createdAt.getMinutes() < 10 ? '0' : '') + createdAt.getMinutes()} ${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;


    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image 
                    className={styles.image}
                    src="/p1.jpeg" 
                    alt="" 
                    fill
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{formattedDate} - </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href="/">
                    <h1>
                        {item.title}
                    </h1>
                </Link>

                <p className={styles.textDesc}>
                    {item.desc.length > 100 ? `${item.desc.slice(0, 100)}...` : item.desc}
                </p>
                <Link className={styles.more} href="/">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Post;