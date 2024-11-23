import React from "react";
import styles from "../styles/components styles/IncomingMessage.module.css";

interface IncomingMessageProps {
  incomingText: string;
}

const IncomingMessage: React.FC<IncomingMessageProps> = ({ incomingText }) => {
  return (
    <div className={styles.father}>
      <p className={styles.incomingText}>{incomingText}</p>
      <p className={styles.incomingHour}>19:12</p>
    </div>
  );
};

export default IncomingMessage;
