"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";
import { useState, useEffect } from "react";
import ChatView from "@/components/ChatView";
import Menu from "@/components/Menu";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"; //este hook nos permitirá navegar hacia otra ruta
//de forma programada.

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
  const name = searchParams.get("name");
  const surname = searchParams.get("surname");
  const username = searchParams.get("username");
  const handleGetCodeButton = (e: React.FormEvent<HTMLButtonElement>) => {
    //MouseEvent lo
    //usamos cuando el evento proviene de form.
    e.preventDefault();
    router.push(
      //finalmente pasamos los datos a /chat
      `/chat?phone=${phone}&name=${name}&surname=${surname}&username=${username}`
    ); //hacemos que redirija hacia la ruta "/chat"
  };
  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      <div className={styles.formContainer}>
        <p className={styles.primaryText}>¡Registro exitoso!</p>
        <p className={styles.formLabel}>Ahora puedes iniciar sesión:</p>
        <button onClick={handleGetCodeButton} className={styles.getCodeButton}>
          Ir al inicio de sesión
        </button>
      </div>
    </div> //CONCLUYE father
  );
};

export default page;
