"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";
import { useState, useEffect, use } from "react";

import ChatView from "@/components/ChatView";
import Menu from "@/components/Menu";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"; //este hook nos permitirá navegar hacia otra ruta
//de forma programada.
const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone"); //recibimos el teléfono de la URL
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetCodeButton = (e: React.FormEvent<HTMLFormElement>) => {
    //MouseEvent lo
    //usamos cuando el evento proviene de form.
    e.preventDefault();
    router.push(
      `/registerok?phone=${phone}&name=${formData.name}&surname=${formData.surname}&username=${formData.username}`
    );
  }; //pasamos todo como parametros
  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      <div className={styles.formContainer}>
        <p className={styles.primaryText}>
          Para crear tu cuenta, llena los siguientes campos:
        </p>
        <form onSubmit={handleGetCodeButton} className={styles.phoneForm}>
          <p className={styles.formLabel}>Nombre:</p>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.numberInput}
          />
          <p className={styles.formLabel}>Apellido:</p>
          <input
            required
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            className={styles.numberInput}
          />
          <p className={styles.formLabel}>Nombre de usuario:</p>
          <input
            required
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={styles.numberInput}
          />
          <button type="submit" className={styles.getCodeButton}>
            Continuar
          </button>
        </form>
      </div>
    </div> //CONCLUYE father
  );
};

export default page;
