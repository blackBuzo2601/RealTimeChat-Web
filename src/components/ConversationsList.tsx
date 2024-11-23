import React from "react";
import styles from "../styles/components styles/ConversationsList.module.css";
import Image from "next/image";
import SingleChat from "./SingleChat";

interface conversationslistProps {
  onHandleChatView: () => void;
}

const ConversationsList: React.FC<conversationslistProps> = ({
  onHandleChatView,
}) => {
  return (
    <div onClick={onHandleChatView} className={styles.father}>
      <section className={styles.chatBar}>
        <Image
          alt="imageprofile"
          src={"/menu.png"}
          width={960}
          height={960}
          className={styles.conversationMenuIcon}
        ></Image>
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.conversationsSearchInput}
        />
      </section>
      <section className={styles.allChatsList}>
        <SingleChat></SingleChat>
      </section>
    </div>
  );
};

export default ConversationsList;
