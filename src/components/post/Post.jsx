import React from "react";
import styles from "./post.module.css"
import Image from "next/image";
import Link from "next/link";

const Post = ({key, item}) => {

    //Date format change
    const createdAt = new Date(item.createdAt);
    // not using anymore : const formattedDate = `${createdAt.getHours()}:${(createdAt.getMinutes() < 10 ? '0' : '') + createdAt.getMinutes()} ${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;


    return (
        <div className={styles.container} key={key}>
            {item.img && (
                <div className={styles.imageContainer}>
                    <Image 
                        className={styles.image}
                        src={item.img} 
                        alt="" 
                        fill
                    />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt.substring(0, 10)} -{" "}</span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1>
                        {item.title}
                    </h1>
                </Link>
                <p className={styles.textDesc}>
                    {item.desc.substring(0, 100)}...             </p>
                <Link className={styles.more} href={`/posts/${item.slug}`}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Post;