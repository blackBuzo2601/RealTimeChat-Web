"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  const handleDeleteAccountDefinitely = () => {
    const confirmacionRespuesta = confirm(
      "¿Confirmas que quieres eliminar tu cuenta? Perderás toda la información de tus converesaciones."
    );
    if (confirmacionRespuesta) {
      router.push("/");
    } else {
    }
  };
  return (
    <div className={styles.father}>
      <p className={styles.text}>
        ¡Lamentamos que tengas <br /> que despedirte!
      </p>
      <p className={styles.subtext}>
        Aquí siempre tendrás un nido al que regresar. <br />
        Te deseamos lo mejor en tus próximos pasos
      </p>
      <div className={styles.simpleRow}>
        <input
          type="button"
          value="ELIMINAR CUENTA"
          className={styles.deleteButton}
          onClick={handleDeleteAccountDefinitely}
        />
      </div>
    </div>
  );
};

export default page;
