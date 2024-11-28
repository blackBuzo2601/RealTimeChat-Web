"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";
import { useState, useEffect, use } from "react";
import ConversationsList from "@/components/ConversationsList";
import ChatView from "@/components/ChatView";
import Menu from "@/components/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation"; //este hook nos permitirá navegar hacia otra ruta
//de forma programada.

export default function Home() {
  const router = useRouter();

  const handleGetCodeButton = (e: React.FormEvent<HTMLButtonElement>) => {
    //MouseEvent lo
    //usamos cuando el evento proviene de form.
    e.preventDefault();
    router.push("/chat"); //hacemos que redirija hacia la ruta "/chat"
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
          Inicia sesión ingresando con tu número de teléfono
        </p>
        <form className={styles.phoneForm}>
          <p className={styles.formLabel}>Teléfono:</p>
          <input type="number" className={styles.numberInput} />

          <button
            onClick={handleGetCodeButton}
            className={styles.getCodeButton}
          >
            Obtener código de verificación
          </button>
        </form>
      </div>
    </div> //CONCLUYE father
  );
}
