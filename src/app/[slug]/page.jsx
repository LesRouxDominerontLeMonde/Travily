import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css"
import Image from "next/image";
import Comments from "@/components/comments/comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image
                                className={styles.avatar}
                                src="/p1.jpeg"
                                alt=""
                                fill
                            />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>User Name Linkable</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>    
                    </div>                
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        className={styles.image}
                        src="/p1.jpeg"
                        alt=""
                        fill 
                    />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed saepe rerum numquam iusto iure enim vel nostrum libero deleniti voluptate sit ut suscipit voluptas quas culpa, perferendis optio vitae!</p>
                        <h2>Lorem ipsum dolor sit am</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed saepe rerum numquam iusto iure enim vel nostrum libero deleniti voluptate sit ut suscipit voluptas quas culpa, perferendis optio vitae!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed saepe rerum numquam iusto iure enim vel nostrum libero deleniti voluptate sit ut suscipit voluptas quas culpa, perferendis optio vitae!</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    );
};

export default SinglePage;