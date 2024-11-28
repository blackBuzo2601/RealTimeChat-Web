"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";
import React, { useState, useEffect, use } from "react";
import ConversationsList from "@/components/ConversationsList";
import ChatView from "@/components/ChatView";
import Menu from "@/components/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation"; //este hook nos permitirá navegar hacia otra ruta
//de forma programada.

const page = () => {
  const router = useRouter();

  const handleGetCodeButton = (e: React.FormEvent<HTMLFormElement>) => {
    //MouseEvent lo
    //usamos cuando el evento proviene de form.
    e.preventDefault();
    router.push("/createaccount"); //hacemos que redirija hacia la ruta "/chat"
  };
  const handleSendAgainCode = () => {
    //MouseEvent lo
    //usamos cuando el evento proviene de form.

    router.push("/verification");
  };

  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      <div className={styles.formContainer}>
        <Image
          alt="logodelchat"
          src={"/iteconnectlogo.jpg"}
          width={1024}
          height={1024}
          className={styles.iteConnectLogo}
        ></Image>
        <p className={styles.primaryText}>
          Por favor, ingresa el código que recibiste:
        </p>
        <form onSubmit={handleGetCodeButton} className={styles.phoneForm}>
          <input required type="number" className={styles.numberInput} />

          <button type="submit" className={styles.getCodeButton}>
            Entrar
          </button>
          <p className={styles.formLabel}>¿No recibiste el código?</p>
          <p
            onClick={handleSendAgainCode}
            className={styles.formLabelSendAgain}
          >
            Reenviar código
          </p>
        </form>
      </div>
    </div> //CONCLUYE father
  );
};

export default page;
