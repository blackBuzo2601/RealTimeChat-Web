import React from "react";
import styles from "../styles/components styles/SingleChat.module.css";
import Image from "next/image";

interface mensajesProps {
  IDMensaje: string;
  Usuario: string;
  idUsuario: number;
  contenido: string;
  hora: string;
  fecha: string;
}

interface miembrosProps {
  Nombre: string;
  IDMiembro: number;
}

interface SingleChatProps {
  ChatID: number;

  miembros: miembrosProps[];
  mensajes: mensajesProps[];
  onHandleChatView: () => void;
}

const SingleChat: React.FC<SingleChatProps> = ({
  ChatID,
  miembros,
  mensajes,
  onHandleChatView,
}) => {
  let grupo = false;
  let nombreChatIndividual = "";
  const idUsuarioRegistrado = 100;

  if (miembros.length > 2) {
    grupo = true;
  } else {
    for (let i = 0; i < miembros.length; i++) {
      if (miembros[i].IDMiembro !== idUsuarioRegistrado) {
        nombreChatIndividual = miembros[i].Nombre;
        break;
      }
    }
  }

  return (
    <div onClick={onHandleChatView} className={styles.fatherDiv}>
      <Image
        alt="imageprofile"
        src={"/blackgoku.jpg"}
        width={736}
        height={736}
        className={styles.chatAvatarImage}
      ></Image>
      <section className={styles.chatMessageColumn}>
        <section className={styles.chatMessageRow}>
          {grupo ? ( //evaluamos que sea un grupo
            <p className={styles.chatName}>Grupo de {miembros[0].Nombre}</p>
          ) : (
            <p className={styles.chatName}>{nombreChatIndividual}</p>
          )}

          <p className={styles.lastMessageHour}>
            {mensajes[mensajes.length - 1].hora}
          </p>
        </section>
        <p className={styles.chatMessageContent}>
          {mensajes[mensajes.length - 1].contenido}
        </p>
      </section>
    </div>
  );
};

export default SingleChat;
