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
  const chatName =
    chat.miembros.length === 2
      ? chat.miembros.find((m: any) => m.IDMiembro !== 100)?.Nombre
      : `Grupo de ${chat.miembros[0]?.Nombre || "desconocido"}`;

  // Determinamos el estado de conexión si es un chat de uno a uno
  let connectionStatus = "";
  if (chat.miembros.length === 2) {
    const otherMember = chat.miembros.find((m: any) => m.IDMiembro !== 100);
    if (otherMember) {
      connectionStatus =
        otherMember.ultimaConexion === null
          ? "En Línea"
          : `Última conexión: ${otherMember.ultimaConexion}`;
    }
  }
  return (
    <div onClick={onHandleHideMenuVisible} className={styles.father}>
      <article className={styles.chatuserconnection}>
        <div className={styles.chatuserconnectiondivone}>
          <Image
            alt="imageprofile"
            src={"/goku.jpg"} //aqui va la imagen del usuario seleccionado
            width={960}
            height={960}
            className={styles.chatuserconnectionimg}
          ></Image>
          <div className={styles.chatUsernameNameStateColumn}>
            <p className={styles.chatUsernameText}>{chatName}</p>
            <p className={styles.chatStateText}>
              {chat.miembros.length === 2 ? connectionStatus : ""}
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
              multimedia={mensaje.multimedia}
              key={mensaje.IDMensaje}
              outGoingText={mensaje.contenido}
              hour={mensaje.hora}
            />
          ) : (
            <IncomingMessage
              multimedia={mensaje.multimedia}
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
