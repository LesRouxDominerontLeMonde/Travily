"use client"

import Image from "next/image";
import styles from "./writePage.module.css"
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";


const storage = getStorage(app);

const WritePage = () => {
    const { status} = useSession();
    const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState(""); // Description
    const [title, setTitle] = useState("");

    useEffect(() => {
        const upload = () => {
            // exemple from https://firebase.google.com/docs/storage/web/upload-files?hl=fr
            // protection in case someone add 2 time the same file , now they will have date to be diferanciated
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                // Set the download URL to the 'media' state
                    setMedia(downloadURL);
                });
            }
            );
        }

        // "if file exists (truthy), then call upload function."
        file && upload();
    },[file]);
    
    if (status === "loading"){
        return <div className={ styles.loading}>Loading...</div>
    }
    if (status === "unauthenticated"){
        router.push("/")
    }

    const slugify = (str) =>
    str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: "travel",
            }),
        });

        console.log(res)
    };

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                placeholder="Title" 
                className={styles.input} 
                onChange={e => setTitle(e.target.value)}
            />
            {/* TODO: ADD CATEGORY */}
            <input type="text" placeholder="category"/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image
                        src="/moon.png"
                        alt=""
                        width={16}
                        height={16}
                    />
                </button>
                {open && (
                    <div className={styles.add}>
                        <input 
                            type="file"
                            id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{display: "none"}}
                        />
                        <button className={styles.addButton}>
                            <label htmlFor="image">
                                <Image
                                    src="/image.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                            </label>
                        </button>
                        <button className={styles.addButton}>
                            <Image
                                src="/external.png"
                                alt=""
                                width={16}
                                height={16}
                            />
                        </button>
                        <button className={styles.addButton}>
                            <Image
                                src="/video.png"
                                alt=""
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                )}
                <ReactQuill 
                    className={styles.textArea}
                    theme="bubble" 
                    value={value} 
                    onChange={setValue} 
                    placeholder="Tell your tory..."
                />
            </div>
            <button 
                className={styles.publish}
                onClick={handleSubmit}
            >
                Publish
            </button>
        </div>
    )
}

export default WritePage;