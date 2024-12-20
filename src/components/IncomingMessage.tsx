import React from "react";
import styles from "../styles/components styles/IncomingMessage.module.css";
import Image from "next/image";

interface IncomingMessageProps {
  incomingText: string | null;
  multimedia: string | null;
  senderName: string;
  hour: string;
}

const IncomingMessage: React.FC<IncomingMessageProps> = ({
  incomingText,
  multimedia,
  senderName,
  hour,
}) => {
  return (
    <div className={styles.otherFather}>
      <Image
        alt="imageprofile"
        src={"/goku.jpg"}
        width={800}
        height={800}
        className={styles.incomingMessageAvatar}
      ></Image>
      <div className={styles.father}>
        <p className={styles.incomingMessageName}>{senderName}</p>
        {multimedia ? (
          <Image
            alt="imagenRecibida"
            src={`/${multimedia}`} // Asegúrate de que la ruta sea válida
            width={200}
            height={200}
            className={styles.incomingImage}
          />
        ) : (
          <p className={styles.incomingText}>{incomingText}</p>
        )}
        <p className={styles.incomingHour}>{hour}</p>
      </div>
    </div>
  );
};

export default IncomingMessage;
