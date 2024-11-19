import React from "react";
import styles from "./ConversationsList.module.css";
import Image from "next/image";
import SingleChat from "./SingleChat";
const ConversationsList = () => {
  return (
    <div className={styles.father}>
      <section className={styles.chatBar}>
        <Image
          alt="imageprofile"
          src={"/menu.png"}
          width={960}
          height={960}
          className={styles.conversationMenuIcon}
          onClick={() => console.log("Se está presionando un elemento")}
        ></Image>
        <input
          type="text"
          placeholder="Buscar..."
          className={styles.conversationsSearchInput}
          onChange={() => console.log("hola texto cambiando: ")}
        />
      </section>
      <section className={styles.allChatsList}></section>
    </div>
  );
};

export default ConversationsList;
