import React from "react";
import styles from "../styles/components styles/IncomingMessage.module.css";
import Image from "next/image";

interface IncomingMessageProps {
  incomingText: string;
}

const IncomingMessage: React.FC<IncomingMessageProps> = ({ incomingText }) => {
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
        <p className={styles.incomingMessageName}>Mario</p>
        <p className={styles.incomingText}>{incomingText}</p>
        <p className={styles.incomingHour}>19:12</p>
      </div>
    </div>
  );
};

export default IncomingMessage;
