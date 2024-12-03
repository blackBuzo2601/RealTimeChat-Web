"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation"; //este hook nos permitirá navegar hacia otra ruta
//de forma programada.
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const handleGetCodeButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/verification?phone=${phone}`); //redirijimos a la ruta verification y tambien pasamos la propiedad de teléfono como parámetro.
  };

  return (
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
        <form className={styles.phoneForm} onSubmit={handleGetCodeButton}>
          <p className={styles.formLabel}>Teléfono:</p>
          <input
            required
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.numberInput}
          />
          <button type="submit" className={styles.getCodeButton}>
            Obtener código de verificación
          </button>
        </form>
      </div>
    </div>
  );
}
