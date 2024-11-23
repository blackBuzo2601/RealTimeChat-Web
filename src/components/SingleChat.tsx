import React from "react";
import styles from "../styles/components styles/SingleChat.module.css";
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
      ></Image>
      <section className={styles.chatMessageColumn}>
        <section className={styles.chatMessageRow}>
          <p className={styles.chatName}>Diego</p>

          <p className={styles.lastMessageHour}>14:10</p>
        </section>
        <p className={styles.chatMessageContent}>Que onda perrillo</p>
      </section>
    </div>
  );
};

export default SingleChat;
