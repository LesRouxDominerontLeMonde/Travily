import Link from "next/link"
import styles from "./comments.module.css"
import Image from "next/image"

const Comments = () => {
    
    const status = "authenticated"
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}> 
                    <textarea placeholder="Write a comment..." className={styles.input}></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image
                            className={styles.image}
                            src="/p1.jpeg"
                            alt=""
                            width={50}
                            height={50}
                        />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores ratione quo quisquam praesentium. Quos itaque autem fugit minus rerum ab? Quaerat eius sapiente consectetur laboriosam fugit, earum expedita enim.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments