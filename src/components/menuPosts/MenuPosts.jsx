import React from "react";
import styles from "./menuPosts.module.css"
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link className={styles.item} href="/">
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/p1.jpeg" 
                            alt=""
                            fill
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h4 className={styles.postTitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h4>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link className={styles.item} href="/">
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/p1.jpeg" 
                            alt=""
                            fill
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.culture}`}>
                        Culture
                    </span>
                    <h4 className={styles.postTitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h4>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link className={styles.item} href="/">
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/p1.jpeg" 
                            alt=""
                            fill
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>
                        Food
                    </span>
                    <h4 className={styles.postTitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h4>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link className={styles.item} href="/">
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="/p1.jpeg" 
                            alt=""
                            fill
                        />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.fashion}`}>
                        Fashion
                    </span>
                    <h4 className={styles.postTitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h4>
                    <div className={styles.detail}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}> - 10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts