import React from "react";
import styles from "../styles/components styles/OutgoingMessage.module.css";
import Image from "next/image";

interface OutgoingMessageProps {
  outGoingText: string | null;
  multimedia: string | null;
  hour: string;
}

const OutgoingMessage: React.FC<OutgoingMessageProps> = ({
  outGoingText,
  multimedia,
  hour,
}) => {
  return (
    <div className={styles.otherFather}>
      <div className={styles.father}>
        {multimedia ? (
          <Image
            alt="imagenEnviada"
            src={`/${multimedia}`} // Asegúrate de que la ruta sea válida
            width={200}
            height={200}
            className={styles.outgoingImage}
          />
        ) : (
          <p className={styles.outGoingText}>{outGoingText}</p>
        )}
        <p className={styles.outGoingHour}>{hour}</p>
      </div>
    </div>
  );
};

export default OutgoingMessage;
