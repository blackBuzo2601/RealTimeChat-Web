import React from "react";
import styles from "../styles/components styles/SingleChat.module.css";
import Image from "next/image";

interface SingleChatProps {
  chat: any;
  onHandleChatView: () => void;
}

const SingleChat: React.FC<SingleChatProps> = ({ onHandleChatView, chat }) => {
  const isGroup = chat.miembros.length > 2;
  const chatName = isGroup
    ? `Grupo de ${chat.miembros[0].Nombre.split(" ")[0]}`
    : chat.miembros.find((m: any) => m.IDMiembro !== 100)?.Nombre.split(" ")[0];
  const lastMessage = chat.mensajes[chat.mensajes.length - 1];
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
          <p className={styles.chatName}>{chatName}</p>

          <p className={styles.lastMessageHour}>{lastMessage?.hora}</p>
        </section>
        <p className={styles.chatMessageContent}>{lastMessage?.contenido}</p>
      </section>
    </div>
  );
};

export default SingleChat;
