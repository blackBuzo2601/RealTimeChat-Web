import React from "react";
import styles from "../styles/components styles/ChatView.module.css";
import Image from "next/image";

interface ChatViewProps {
  onhandleInfoChatVisible: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({ onhandleInfoChatVisible }) => {
  return (
    <div className={styles.father}>
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
            <p className={styles.chatStateText}>Última conexión: Ayer 20:19</p>
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

      <article className={styles.chatAllMessages}></article>
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
