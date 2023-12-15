import React from "react";
import styles from "./post.module.css"
import Image from "next/image";
import Link from "next/link";

const Post = () => {
    return (
        <div className={styles.container}>
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
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h4 className={styles.title}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus eius iusto alias dicta.
                    </h4>
                </Link>

                <p className={styles.textDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam nisi optio eius cupiditate dolorem facilis amet blanditiis odit eum saepe libero impedit quibusdam deleniti unde, in dolorum nesciunt distinctio?
                </p>
                <Link className={styles.more} href="/">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Post;