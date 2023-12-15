import React from "react";
import styles from "./categoryList.module.css"
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Popular Categories</h4>
            <div className={styles.categories}>
            <Link className={`${styles.category} ${styles.style}`} href={"/blog?cat=style"}>
                    <Image 
                        className={styles.image}
                        src={"/style.png"} 
                        alt="" 
                        width={32} 
                        height={32}
                    />
                    style
                </Link>
                <Link className={`${styles.category} ${styles.fashion}`} href={"/blog?cat=style"}>
                    <Image 
                        className={styles.image}
                        src={"/fashion.png"} 
                        alt="" 
                        width={32} 
                        height={32}
                    />
                    fashion
                </Link>
                <Link className={`${styles.category} ${styles.food}`} href={"/blog?cat=style"}>
                    <Image
                        className={styles.image}
                        src={"/food.png"} 
                        alt="" 
                        width={32} 
                        height={32}
                    />
                    food
                </Link>
                <Link className={`${styles.category} ${styles.travel}`} href={"/blog?cat=style"}>
                    <Image 
                        className={styles.image}
                        src={"/travel.png"} 
                        alt="" 
                        width={32} 
                        height={32}
                    />
                    travel
                </Link>
                <Link className={`${styles.category} ${styles.culture}`} href={"/blog?cat=style"}>
                    <Image 
                        className={styles.image}
                        src={"/culture.png"} 
                        alt="" 
                        width={32} 
                        height={32}
                    />
                    culture
                </Link>
                <Link className={`${styles.category} ${styles.coding}`} href={"/blog?cat=style"}>
                    <Image 
                        className={styles.image}
                        src={"/coding.png"} 
                        alt="" 
                        width={32} 
                        height={32}
                    />
                    coding
                </Link>
            </div>
        </div>
    )
}

export default CategoryList