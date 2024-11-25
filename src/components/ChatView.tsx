import React from "react";
import styles from "../styles/components styles/ChatView.module.css";
import Image from "next/image";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";

interface ChatViewProps {
  onhandleInfoChatVisible: () => void;
  isChatViewVisible: boolean;
  jsonData: { key: string; info: any }[];
  onHandleHideMenuVisible: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({
  onhandleInfoChatVisible,
  isChatViewVisible,
  jsonData,
  onHandleHideMenuVisible,
}) => {
  const listaChats =
    jsonData.find((item) => item.key === "ListaChats")?.info || [];
  return (
    <>
      {isChatViewVisible && (
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
                <p className={styles.chatUsernameText}>Elian Buzo</p>
                <p className={styles.chatStateText}>
                  Última conexión: Ayer 20:19
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
            <OutgoingMessage outGoingText="Hola como estás ? Bien bien bien bien bien bien bien bien asdnfnasdofasdbfjoabdsjfbasdofbaodsfnajsdfajsdbsafnkjdnf"></OutgoingMessage>
            <IncomingMessage incomingText="Hola bien y tu"></IncomingMessage>
            <OutgoingMessage outGoingText="Bien gracias"></OutgoingMessage>
            <IncomingMessage incomingText="Es todo pa"></IncomingMessage>
            <OutgoingMessage outGoingText="quiers jugar warzone?"></OutgoingMessage>
            <IncomingMessage incomingText="Ahuevo me parece un plan perfecto"></IncomingMessage>
            <OutgoingMessage outGoingText="Duos o escuadras?"></OutgoingMessage>
            <IncomingMessage incomingText="Escuadras pa agarrar cura tirando hate por el chat de proximidad"></IncomingMessage>
            <OutgoingMessage outGoingText="jajaja ahuevo"></OutgoingMessage>
            <IncomingMessage incomingText="siii"></IncomingMessage>
            <OutgoingMessage outGoingText="dame 5 minutos entonces"></OutgoingMessage>
            <IncomingMessage incomingText="arre"></IncomingMessage>
            <IncomingMessage incomingText="Yo ya estoy conectadi"></IncomingMessage>
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
