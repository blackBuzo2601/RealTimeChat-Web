import React from "react";
import Image from "next/image";
import styles from "../styles/components styles/Menu.module.css";

interface MenuProps {
  isMenuVisible: boolean;
}

const Menu: React.FC<MenuProps> = ({ isMenuVisible }) => {
  return (
    <>
      {isMenuVisible && (
        <div className={styles.father}>
          <section className={styles.nameAndPicture}>
            <Image
              alt="fotoperfil"
              src={"/goku.jpg"}
              width={960}
              height={960}
              className={styles.profilePicture}
            ></Image>
            <p className={styles.profileName}>Guillermo Chavez</p>
          </section>
          <section className={styles.menuOptions}>
            <div className={styles.optionContainer}>
              <Image
                alt="iconogrupo"
                src={"/newgroup.png"}
                width={800}
                height={800}
                className={styles.optionContainerImg}
              ></Image>
              <p>Nuevo Grupo</p>
            </div>
            <div className={styles.optionContainer}>
              <Image
                alt="iconocontactos"
                src={"/contacts.png"}
                width={800}
                height={800}
                className={styles.optionContainerImg}
              ></Image>
              <p>Contactos</p>
            </div>
            <div className={styles.optionContainer}>
              <Image
                alt="iconogrupo"
                src={"/savedmessages.png"}
                width={800}
                height={800}
                className={styles.optionContainerImg}
              ></Image>
              <p>Mensajes guardados</p>
            </div>
            <div className={styles.optionContainer}>
              <Image
                alt="iconoOpciones"
                src={"/options.png"}
                width={800}
                height={800}
                className={styles.optionContainerImg}
              ></Image>
              <p>Opciones</p>
            </div>
          </section>
          <section className={styles.logoutContainer}>
            <Image
              alt="iconoLogout"
              src={"/logout.png"}
              width={800}
              height={800}
              className={styles.optionContainerImg}
            ></Image>
            <p>Cerrar sesión</p>
          </section>
        </div>
      )}
    </>
  );
};

export default Menu;
