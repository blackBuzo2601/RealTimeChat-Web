import React from "react";
import styles from "../styles/components styles/OutgoingMessage.module.css";

interface OutgoingMessageProps {
  outGoingText: string;
}

const OutgoingMessage: React.FC<OutgoingMessageProps> = ({ outGoingText }) => {
  return (
    <div className={styles.father}>
      <p className={styles.outGoingText}>{outGoingText}</p>
      <p className={styles.outGoingHour}>19:12</p>
    </div>
  );
};

export default OutgoingMessage;
