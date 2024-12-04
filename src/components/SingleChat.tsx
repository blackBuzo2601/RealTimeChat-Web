import React from "react";
import styles from "../styles/components styles/SingleChat.module.css";
import Image from "next/image";

interface SingleChatProps {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  onHandleChatView: () => void;
  isGroup: boolean;
  avatarSrc: string;
}

const SingleChat: React.FC<SingleChatProps> = ({
  onHandleChatView,
  lastMessage,
  lastMessageTime,
  name,
  avatarSrc,
  isGroup,
}) => {
  return (
    <div onClick={onHandleChatView} className={styles.fatherDiv}>
      <Image
        alt="imageprofile"
        src={avatarSrc}
        width={736}
        height={736}
        className={styles.chatAvatarImage}
      ></Image>
      <section className={styles.chatMessageColumn}>
        <section className={styles.chatMessageRow}>
          <p className={styles.chatName}>{name}</p>

          <p className={styles.lastMessageHour}>{lastMessageTime}</p>
        </section>
        <p className={styles.chatMessageContent}>{lastMessage}</p>
      </section>
    </div>
  );
};

export default SingleChat;
