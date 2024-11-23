import React from "react";
import styles from "../styles/components styles/ConversationsList.module.css";
import Image from "next/image";
import SingleChat from "./SingleChat";

interface conversationslistProps {
  jsonData: { key: string; info: any }[];
}

const ConversationsList: React.FC<conversationslistProps> = ({ jsonData }) => {
  const listaChats =
    jsonData.find((item) => item.key === "ListaChats")?.info || [];
  return (
    <div className={styles.father}>
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
        {listaChats.map((elemento: any) => (
          <SingleChat
            key={elemento.ChatID}
            ChatID={elemento.ChatID}
            mensajes={elemento.mensajes}
            miembros={elemento.miembros}
          ></SingleChat>
        ))}
      </section>
    </div>
  );
};

export default ConversationsList;
