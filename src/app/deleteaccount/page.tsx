"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();

  const handleDeleteAccountDefinitely = () => {
    router.push("/");
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
