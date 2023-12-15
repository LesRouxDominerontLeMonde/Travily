import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image 
                        src="/logo.png" 
                        alt="travily blog"
                        width={50}
                        height={50}
                    />
                    <h3 className={styles.logoText}>Travily</h3>
                </div>
                <p className={styles.desc}> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    Impedit, velit voluptates aspernatur beatae laboriosam dolorem 
                    voluptatibus a incidunt iste enim quasi officiis iusto, vero totam suscipit, 
                    necessitatibus praesentium hic amet.
                </p>
                <div className={styles.icons}>
                <Image src="/facebook.png" alt="" width={18} height={18}/>
                <Image src="/instagram.png" alt="" width={18} height={18}/>
                <Image src="/tiktok.png" alt="" width={18} height={18}/>
                <Image src="/youtube.png" alt="" width={18} height={18}/>
                </div>
            </div>
            <div className={styles.links}>
            <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Styles</Link>
                    <Link href="/">Fashon</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer 