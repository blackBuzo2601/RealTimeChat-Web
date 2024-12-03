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
  chat,
  onhandleInfoChatVisible,
  onHandleHideMenuVisible,
}) => {
  return (
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
              {chat.miembros.length === 2
                ? chat.miembros.find((m: any) => m.IDMiembro !== 100)?.Nombre
                : `Grupo de ${chat.miembros[0]?.Nombre || "desconocido"}`}
            </p>
            <p className={styles.chatStateText}>
              {" "}
              Última conexión:{" "}
              {chat.miembros.length === 2
                ? chat.miembros.find((m: any) => m.IDMiembro !== 100)
                    ?.estadoConexion || "Desconocida"
                : "Desconocida"}
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
        {chat.mensajes.map((mensaje: any) =>
          mensaje.idUsuario === 100 ? (
            <OutgoingMessage
              key={mensaje.IDMensaje}
              outGoingText={mensaje.contenido}
              hour={mensaje.hora}
            />
          ) : (
            <IncomingMessage
              key={mensaje.IDMensaje}
              senderName={mensaje.Usuario}
              incomingText={mensaje.contenido}
              hour={mensaje.hora}
            />
          )
        )}
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
  );
};

export default ChatView;
