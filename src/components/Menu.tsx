import React from "react";
import Image from "next/image";
import styles from "../styles/components styles/Menu.module.css";
import { useState } from "react";

interface MenuProps {
  isMenuVisible: boolean;
  onhandleHideMenuVisible: () => void;
  onhandleShowOptionsVisible: () => void;
  onHandleShowContactsVisible: () => void;
  personalVisibleNombre: string;
  personalVisibleApellido: string;
  personalVisibleImage: string;
}

const Menu: React.FC<MenuProps> = ({
  isMenuVisible,
  onhandleHideMenuVisible,
  onhandleShowOptionsVisible,
  onHandleShowContactsVisible,
  personalVisibleNombre,
  personalVisibleApellido,
  personalVisibleImage,
}) => {
  return (
    <>
      {isMenuVisible && (
        <div className={styles.father}>
          <section className={styles.nameAndPicture}>
            <Image
              alt="fotoperfil"
              src={personalVisibleImage}
              width={960}
              height={960}
              className={styles.profilePicture}
            ></Image>
            <p className={styles.profileName}>
              {personalVisibleNombre} {personalVisibleApellido}
            </p>
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
            <div
              onClick={() => {
                onhandleHideMenuVisible();
                onHandleShowContactsVisible();
              }}
              className={styles.optionContainer}
            >
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
            <div
              onClick={(e) => {
                e.stopPropagation();
                onhandleHideMenuVisible();
                onhandleShowOptionsVisible();
              }}
              className={styles.optionContainer}
            >
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
