import React from "react";
import styles from "./SingleChat.module.css";
import Image from "next/image";
const SingleChat = () => {
  return (
    <div className={styles.fatherDiv}>
      <Image
        alt="imageprofile"
        src={"/blackgoku.jpg"}
        width={736}
        height={736}
        className={styles.chatAvatarImage}
        onClick={() => console.log("Se está presionando un elemento")}
      ></Image>
      <section className={styles.chatMessageColumn}>
        <section className={styles.chatMessageRow}>
          <p className={styles.chatName}>Rodrigo</p>
          <p className={styles.lastMessageHour}>18:46</p>
        </section>
        <p className={styles.chatMessageContent}>Echale ganas pa</p>
      </section>
    </div>
  );
};

export default SingleChat;
