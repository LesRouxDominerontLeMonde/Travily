import React from "react";
import styles from "./categoryList.module.css"
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
    });

    if(!res.ok) {
        throw new Error("Failed")
    }

    return res.json();
};

const CategoryList = async () => {

    const data = await getData();
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Popular Categories</h4>
            <div className={styles.categories}>
                {data?.map((item) => (
                    <Link 
                        className={`${styles.category} ${styles[item.slug]}`} 
                        href={"/blog?cat=style"}
                        key={item._id}
                    >
                        {item.img && (
                            <Image 
                                className={styles.image}
                                src={"/style.png"} 
                                alt="" 
                                width={32} 
                                height={32}
                            />
                        )}
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryList