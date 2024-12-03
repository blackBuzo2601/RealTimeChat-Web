import React from "react";
import styles from "../styles/components styles/OutgoingMessage.module.css";

interface OutgoingMessageProps {
  outGoingText: string;
  hour: string;
}

const OutgoingMessage: React.FC<OutgoingMessageProps> = ({
  outGoingText,
  hour,
}) => {
  return (
    <div className={styles.otherFather}>
      <div className={styles.father}>
        <p className={styles.outGoingText}>{outGoingText}</p>
        <p className={styles.outGoingHour}>{hour}</p>
      </div>
    </div>
  );
};

export default OutgoingMessage;
