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
const page = () => {
  const router = useRouter();

  const handleGetCodeButton = (e: React.FormEvent<HTMLFormElement>) => {
    //MouseEvent lo
    //usamos cuando el evento proviene de form.
    e.preventDefault();
    router.push("/registerok"); //hacemos que redirija hacia la ruta "/chat"
  };
  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      <div className={styles.formContainer}>
        <p className={styles.primaryText}>
          Para crear tu cuenta, llena los siguientes campos:
        </p>
        <form onSubmit={handleGetCodeButton} className={styles.phoneForm}>
          <p className={styles.formLabel}>Nombre:</p>
          <input required type="text" className={styles.numberInput} />
          <p className={styles.formLabel}>Apellido:</p>
          <input required type="text" className={styles.numberInput} />
          <p className={styles.formLabel}>Nombre de usuario:</p>
          <input required type="text" className={styles.numberInput} />
          <button type="submit" className={styles.getCodeButton}>
            Continuar
          </button>
        </form>
      </div>
    </div> //CONCLUYE father
  );
};

export default page;
