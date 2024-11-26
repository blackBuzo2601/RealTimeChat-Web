"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";
import { useState, useEffect } from "react";
import ConversationsList from "@/components/ConversationsList";
import ChatView from "@/components/ChatView";
import Menu from "@/components/Menu";

export default function Home() {
  const [isInfoChatVisible, setIsInfoChatVisible] = useState(false);
  const [isChatViewVisible, setIsChatViewVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const [jsonData, setJsonData] = useState<{ key: string; info: any }[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const dataJSON = require("@/data/chat.json");
      setJsonData(
        Object.keys(dataJSON).map((key) => ({ key: key, info: dataJSON[key] }))
      );
    };
    fetchData();
  }, []);

  const handleInfoChatVisible = () => {
    setIsInfoChatVisible(!isInfoChatVisible);
  };

  const handleChatViewVisible = () => {
    setIsChatViewVisible(true);
  };

  const handleMenuVisible = () => {
    setIsMenuVisible(true);
  };

  const handleHideMenuVisible = () => {
    setIsMenuVisible(false);
  };

  const handleShowOptionsVisible = () => {
    setIsOptionsVisible(true);
  };
  const handleHideOptionsVisible = () => {
    setIsOptionsVisible(false);
  };

  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      <section
        onClick={() => {
          if (isOptionsVisible) {
            handleHideOptionsVisible();
          }
        }}
        className={styles.conversationslist}
      >
        <ConversationsList
          onHandleChatView={handleChatViewVisible} //ConversationsList renderiza los SingleChats
          onHandleMenuVisible={handleMenuVisible}
        ></ConversationsList>
        <Menu
          onhandleHideMenuVisible={handleHideMenuVisible}
          isMenuVisible={isMenuVisible}
          onhandleShowOptionsVisible={handleShowOptionsVisible}
        ></Menu>
      </section>

      {/*///////////////////////////////////////////////////////////*/}
      <section onClick={handleHideMenuVisible} className={styles.chatContainer}>
        <ChatView
          onHandleHideMenuVisible={handleHideMenuVisible}
          jsonData={jsonData}
          isChatViewVisible={isChatViewVisible}
          onhandleInfoChatVisible={handleInfoChatVisible}
        ></ChatView>
      </section>
      {/*///////////////////////////////////////////////////////////////*/}
      {isInfoChatVisible && (
        <section className={styles.infochat}>
          <InfoChat
            onHandleHideMenuVisible={handleHideMenuVisible}
            onhandleInfoChatVisible={handleInfoChatVisible}
          ></InfoChat>
        </section>
      )}
      {isOptionsVisible && (
        <section
          className={styles.MenuOptionsContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <article className={styles.MenuOptionsDivOne}>
            <div className={styles.MenuOptionsDivOneRow}>
              <Image
                alt="iconoOpciones"
                src={"/options.png"}
                width={800}
                height={800}
                className={styles.MenuOptionsIcon}
              ></Image>
              <p>Opciones</p>
            </div>
            <div className={styles.MenuOptionsDivOneUserInfo}>
              <Image
                alt="fotoDePerfilEnOpciones"
                src={"/goku.jpg"}
                width={800}
                height={800}
                className={styles.MenuOptionsIcon}
              ></Image>
              <div className={styles.MenuOptionsDivOneUserInfoColumn}>
                <p className={styles.MenuOptionsDivOneUserInfoFullName}>
                  Elian Buzo
                </p>
                <p className={styles.MenuOptionsDivOneUserPhonenumber}>
                  +52 6462570931
                </p>
                <p className={styles.MenuOptionsDivOneUserNickname}>
                  @buzopro2002
                </p>
              </div>
            </div>
          </article>
          <article className={styles.MenuOptionsDivTwo}>
            <div className={styles.MenuOptionsSingleOptionContainer}>
              <p>Modificar nombre: </p>
              <input
                type="text"
                value="Elian"
                className={styles.MenuOptionSingleOptionInput}
              />
            </div>
            <div className={styles.MenuOptionsSingleOptionContainer}>
              <p>Modificar apellido: </p>
              <input
                type="text"
                value="Buzo"
                className={styles.MenuOptionSingleOptionInput}
              />
            </div>
            <div className={styles.MenuOptionsSingleOptionContainer}>
              <p>Modificar nombre de usuario: </p>
              <input
                type="text"
                value="buzopro2002"
                className={styles.MenuOptionSingleOptionInput}
              />
            </div>
            <div className={styles.MenuOptionsSingleOptionContainer}>
              <p>Cambiar foto de perfil: </p>
              <input
                type="button"
                value="Adjuntar archivo"
                className={styles.MenuOptionUploadPhotoInput}
              />
            </div>

            <input
              type="button"
              value="Guardar cambios"
              className={styles.MenuOptionUploadPhotoInputDeleteAccount}
            />

            <input
              type="button"
              value="Eliminar Cuenta"
              className={styles.MenuOptionUploadPhotoInputDeleteAccount}
            />

            <div className={styles.MenuOptionsCloseContainer}>
              <p
                onClick={handleHideOptionsVisible}
                className={styles.MenuOptionClose}
              >
                Cerrar
              </p>
            </div>
          </article>
        </section>
      )}
    </div> //CONCLUYE father
  );
}
