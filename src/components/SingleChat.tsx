import React from "react";
import styles from "../styles/components styles/SingleChat.module.css";
import Image from "next/image";

interface SingleChatProps {
  onHandleChatView: () => void;
}

const SingleChat: React.FC<SingleChatProps> = ({ onHandleChatView }) => {
  return (
    <div onClick={onHandleChatView} className={styles.fatherDiv}>
      <Image
        alt="imageprofile"
        src={"/blackgoku.jpg"}
        width={736}
        height={736}
        className={styles.chatAvatarImage}
      ></Image>
      <section className={styles.chatMessageColumn}>
        <section className={styles.chatMessageRow}>
          <p className={styles.chatName}>Nombre del chat</p>

          <p className={styles.lastMessageHour}>12:10</p>
        </section>
        <p className={styles.chatMessageContent}>Hola perrillo</p>
      </section>
    </div>
  );
};

export default SingleChat;
