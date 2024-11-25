import React from "react";
import styles from "../styles/components styles/ConversationsList.module.css";
import Image from "next/image";
import SingleChat from "./SingleChat";

interface conversationslistProps {
  onHandleChatView: () => void;
  onHandleMenuVisible: () => void;
}

const ConversationsList: React.FC<conversationslistProps> = ({
  onHandleChatView,
  onHandleMenuVisible,
}) => {
  return (
    <div className={styles.father}>
      <section className={styles.chatBar}>
        <Image
          alt="menuicono"
          src={"/menu.png"}
          width={960}
          height={960}
          className={styles.conversationMenuIcon}
          onClick={onHandleMenuVisible}
        ></Image>
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.conversationsSearchInput}
        />
      </section>
      <section className={styles.allChatsList}>
        <SingleChat onHandleChatView={onHandleChatView}></SingleChat>
        <SingleChat onHandleChatView={onHandleChatView}></SingleChat>
        <SingleChat onHandleChatView={onHandleChatView}></SingleChat>
      </section>
    </div>
  );
};

export default ConversationsList;
