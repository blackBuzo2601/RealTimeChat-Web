import React from "react";
import styles from "../styles/components styles/ChatView.module.css";
import Image from "next/image";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";

interface ChatViewProps {
  chat: any;
  onhandleInfoChatVisible: () => void;
  onHandleHideMenuVisible: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({
  onhandleInfoChatVisible,

  chat,
  onHandleHideMenuVisible,
}) => {
  return (
    <>
      {chat && (
        <div onClick={onHandleHideMenuVisible} className={styles.father}>
          <article className={styles.chatuserconnection}>
            <div className={styles.chatuserconnectiondivone}>
              <Image
                alt="imageprofile"
                src={"/goku.jpg"}
                width={960}
                height={960}
                className={styles.chatuserconnectionimg}
              ></Image>
              <div className={styles.chatUsernameNameStateColumn}>
                <p className={styles.chatUsernameText}>
                  {chat.miembros.length > 2
                    ? `Grupo de ${chat.miembros[0].Nombre.split(" ")[0]}`
                    : chat.miembros
                        .find((m: any) => m.IDMiembro !== 100)
                        ?.Nombre.split(" ")[0]}
                </p>
                <p className={styles.chatStateText}>
                  Última conexión:{" "}
                  {chat.miembros[0].ultimaConexion || "Desconocida"}
                </p>
              </div>
            </div>
            <div className={styles.chatuserconnectiondivtwo}>
              <Image
                alt="imageprofile"
                src={"/search.png"}
                width={800}
                height={800}
                className={styles.chatUserSearchIcon}
              ></Image>
              <Image
                alt="imageprofile"
                src={"/more.png"}
                width={800}
                height={800}
                className={styles.chatUserMoreIcon}
                onClick={onhandleInfoChatVisible}
              ></Image>
            </div>
          </article>

          <article className={styles.chatAllMessages}>
            <IncomingMessage incomingText="Hola que tal?"></IncomingMessage>
            <OutgoingMessage outGoingText="Que onda morro"></OutgoingMessage>
            <IncomingMessage incomingText="Quiers jugar?"></IncomingMessage>
            <OutgoingMessage outGoingText="Tengo tarea we"></OutgoingMessage>
            <IncomingMessage incomingText="un warzone"></IncomingMessage>
            <IncomingMessage incomingText="un warzone"></IncomingMessage>
            <IncomingMessage incomingText="un warzone"></IncomingMessage>
            <IncomingMessage incomingText="un warzone"></IncomingMessage>
            <IncomingMessage incomingText="un warzone"></IncomingMessage>
            <IncomingMessage incomingText="un warzone"></IncomingMessage>
            <IncomingMessage incomingText="un warzone"></IncomingMessage>
          </article>
          <article className={styles.sendMessageContainer}>
            <Image
              alt="icon"
              src={"/attachchat.png"}
              width={800}
              height={800}
              className={styles.chatAttachIcon}
            ></Image>
            <input
              className={styles.chatMessageInput}
              type="text"
              placeholder="Escribe un mensaje..."
            />
            <div className={styles.emojiAndMicrophoneContainer}>
              <Image
                alt="icon"
                src={"/emojichat.png"}
                width={800}
                height={800}
                className={styles.chatAttachIcon}
              ></Image>
              <Image
                alt="icon"
                src={"/microphonechat.png"}
                width={800}
                height={800}
                className={styles.chatAttachIcon}
              ></Image>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default ChatView;
