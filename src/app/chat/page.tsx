"use client";
import Image from "next/image";
import styles from "./chat.module.css";
import InfoChat from "@/components/InfoChat";
import { useState, useEffect } from "react";
import ChatView from "@/components/ChatView";
import Menu from "@/components/Menu";
import SingleChat from "@/components/SingleChat";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Parámetros de la URL
  const phoneFromUrl = searchParams.get("phone") || "";
  const nameFromUrl = searchParams.get("name") || "";
  const surnameFromUrl = searchParams.get("surname") || "";
  const usernameFromUrl = searchParams.get("username") || "";

  // Estados iniciales
  const [activeChat, setActiveChat] = useState<any>(null);
  const [initialPhone, setInitialPhone] = useState(phoneFromUrl);
  const [initialNombre, setInitialNombre] = useState(nameFromUrl);
  const [initialApellido, setInitialApellido] = useState(surnameFromUrl);
  const [initialNickname, setInitialNickname] = useState(usernameFromUrl);
  const [initialProfileImage, setInitialProfileImage] = useState("/goku.jpg");

  // Estados temporales para edición
  const [tempNombre, setTempNombre] = useState(initialNombre);
  const [tempApellido, setTempApellido] = useState(initialApellido);
  const [tempNickname, setTempNickname] = useState(initialNickname);
  const [tempProfileImage, setTempProfileImage] = useState(initialProfileImage);

  // Otros estados relacionados con el chat
  const [isInfoChatVisible, setIsInfoChatVisible] = useState(false);
  const [isChatViewVisible, setIsChatViewVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isContactsVisible, setIsContactsVisible] = useState(false);
  const [isWriteContactVisible, setIsWriteContactVisible] = useState(false);
  const [isAddContactVisible, setIsAddContactVisible] = useState(false);
  const [selectedChat, setSelectedChat] = useState<any>(null);

  // Carga inicial desde el JSON local
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

  // Efecto para actualizar estados iniciales desde la URL
  useEffect(() => {
    setInitialPhone(phoneFromUrl || initialPhone);
    setInitialNombre(nameFromUrl || initialNombre);
    setInitialApellido(surnameFromUrl || initialApellido);
    setInitialNickname(usernameFromUrl || initialNickname);
  }, [phoneFromUrl, nameFromUrl, surnameFromUrl, usernameFromUrl]);

  // Efecto para sincronizar datos del JSON
  useEffect(() => {
    if (jsonData.length > 0) {
      const datosUsuario = jsonData[2]?.info || {};
      setInitialProfileImage(datosUsuario.profileImage || "/goku.jpg");
    }
  }, [jsonData]);

  // Actualiza los estados temporales cuando se abre la configuración
  useEffect(() => {
    if (isOptionsVisible) {
      setTempNombre(initialNombre);
      setTempApellido(initialApellido);
      setTempNickname(initialNickname);
      setTempProfileImage(initialProfileImage);
    }
  }, [
    isOptionsVisible,
    initialNombre,
    initialApellido,
    initialNickname,
    initialProfileImage,
  ]);

  // Handlers de visibilidad
  const handleInfoChatVisible = () => setIsInfoChatVisible((prev) => !prev);
  const handleChatViewVisible = () => setIsChatViewVisible(true);
  const handleMenuVisible = () => setIsMenuVisible(true);
  const handleHideMenuVisible = () => setIsMenuVisible(false);
  const handleShowOptionsVisible = () => setIsOptionsVisible(true);
  const handleHideOptionsVisible = () => setIsOptionsVisible(false);
  const handleShowContactsVisible = () => setIsContactsVisible(true);
  const handleHideContactsVisible = () => setIsContactsVisible(false);

  // Handlers para contactos y escritura
  const handleShowContactVisible = () => {
    if (!isAddContactVisible) setIsAddContactVisible(true);
  };
  const handleHideContactVisible = () => setIsAddContactVisible(false);

  const handleShowWriteContact = () => {
    if (!isWriteContactVisible) setIsWriteContactVisible(true);
  };

  const handleHideWriteContact = () => {
    console.log("Ejecutando handleWriteContact");
    setIsWriteContactVisible(false);
  };

  // Handlers para edición de configuración
  const handleCerrarOpciones = () => {
    setTempNombre(initialNombre);
    setTempApellido(initialApellido);
    setTempNickname(initialNickname);
    setTempProfileImage(initialProfileImage);
    handleHideOptionsVisible();
  };

  const handleGuardarCambios = () => {
    setInitialNombre(tempNombre);
    setInitialApellido(tempApellido);
    setInitialNickname(tempNickname);
    setInitialProfileImage(tempProfileImage);
    //handleHideOptionsVisible();
  };

  // Manejo de cambio de imagen
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (allowedTypes.includes(file.type)) {
        const imageUrl = URL.createObjectURL(file);
        setTempProfileImage(imageUrl);
      } else {
        alert(
          "Por favor selecciona un archivo de imagen válido (jpg, jpeg, png)."
        );
      }
    }
  };

  // Lista de amigos desde el JSON
  const listaAmigos = jsonData[0]?.info || [];
  const informacionPersonal = jsonData[2]?.info || {
    nombre: "",
    apellido: "",
    telefono: "",
    nickname: "",
    idUsuario: "",
  };
  const handleSelectChat = (chat: any) => {
    setActiveChat(chat);
  };

  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      {/*Inicia section izquierdo*/}
      <section
        className={styles.conversationslist}
        onClick={() => {
          handleCerrarOpciones();
          if (isContactsVisible) {
            handleHideContactsVisible();
          }
        }}
      >
        <article className={styles.chatBar}>
          <Image
            alt="menuicono"
            src={"/menu.png"}
            width={960}
            height={960}
            className={styles.conversationMenuIcon}
            onClick={handleMenuVisible}
          ></Image>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.conversationsSearchInput}
          />
        </article>

        <article className={styles.allChatsList}>
          {jsonData[1]?.info.map((chat: any) => {
            const firstMessage = chat.mensajes[0];
            const lastMessage =
              chat.mensajes.length > 0
                ? chat.mensajes[chat.mensajes.length - 1]
                : null; // Obtenemos el último mensaje si existe

            // Determinar el nombre a mostrar
            let chatName = "";
            if (chat.miembros.length === 2) {
              const otherMember = chat.miembros.find(
                (member: any) => member.IDMiembro !== 100
              );
              chatName = otherMember?.Nombre || "Usuario desconocido";
            } else {
              chatName = `Grupo de ${firstMessage?.Usuario || "desconocido"}`;
            }

            // Aseguramos el retorno del componente SingleChat
            return (
              <SingleChat
                key={chat.ChatID} // Usamos ChatID como clave única
                name={chatName}
                lastMessage={lastMessage?.contenido || "No hay mensajes"}
                lastMessageTime={lastMessage?.hora || ""}
                onHandleChatView={() => {
                  handleSelectChat(chat);
                  handleChatViewVisible();
                }} // Callback para manejar la vista del chat
              />
            );
          })}
        </article>

        <Menu
          personalVisibleImage={initialProfileImage}
          personalVisibleNombre={initialNombre}
          personalVisibleApellido={initialApellido}
          onhandleHideMenuVisible={handleHideMenuVisible}
          isMenuVisible={isMenuVisible}
          onhandleShowOptionsVisible={handleShowOptionsVisible}
          onHandleShowContactsVisible={handleShowContactsVisible}
        ></Menu>
        {/*concluye section izquierdo*/}
      </section>

      {/*///////////////////////////////////////////////////////////*/}
      <section onClick={handleCerrarOpciones} className={styles.chatContainer}>
        {activeChat && (
          <ChatView
            chat={activeChat}
            onHandleHideMenuVisible={handleHideMenuVisible}
            onhandleInfoChatVisible={handleInfoChatVisible}
          />
        )}
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
      {/*aqui empiezan los condicionales para secciones aparte del index*/}
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
                src={initialProfileImage}
                width={736}
                height={736}
                className={styles.MenuOptionsIcon}
              ></Image>
              <div className={styles.MenuOptionsDivOneUserInfoColumn}>
                <p className={styles.MenuOptionsDivOneUserInfoFullName}>
                  {initialNombre} {initialApellido}
                </p>
                <p className={styles.MenuOptionsDivOneUserPhonenumber}>
                  {initialPhone}
                </p>
                <p className={styles.MenuOptionsDivOneUserNickname}>
                  @{initialNickname}
                </p>
              </div>
            </div>
          </article>
          <article className={styles.MenuOptionsDivTwo}>
            <div className={styles.MenuOptionsSingleOptionContainer}>
              <p>Modificar nombre: </p>
              <input
                type="text"
                value={tempNombre}
                onChange={(e) => setTempNombre(e.target.value)}
                className={styles.MenuOptionSingleOptionInput}
              />
            </div>
            <div className={styles.MenuOptionsSingleOptionContainer}>
              <p>Modificar apellido: </p>
              <input
                type="text"
                value={tempApellido}
                onChange={(e) => setTempApellido(e.target.value)}
                className={styles.MenuOptionSingleOptionInput}
              />
            </div>
            <div className={styles.MenuOptionsSingleOptionContainer}>
              <p>Modificar nombre de usuario: </p>
              <input
                type="text"
                value={tempNickname}
                onChange={(e) => setTempNickname(e.target.value)}
                className={styles.MenuOptionSingleOptionInput}
              />
            </div>
            <div className={styles.MenuOptionsSingleOptionContainer}>
              <p>Cambiar foto de perfil: </p>
              <input
                id="fileinput"
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                onChange={handleImageChange}
                className={styles.hiddenInput}
              />
              <label htmlFor="fileinput" className={styles.AddFileOptionInput}>
                <p className={styles.AddFileOptionText}>Adjuntar Archivo</p>
              </label>
            </div>

            <input
              type="button"
              value="Guardar cambios"
              onClick={handleGuardarCambios}
              className={styles.MenuOptionUploadPhotoInputDeleteAccount}
            />

            <input
              type="button"
              value="Eliminar Cuenta"
              className={styles.MenuOptionUploadPhotoInputDeleteAccount}
            />

            <div className={styles.MenuOptionsCloseContainer}>
              <p
                onClick={handleCerrarOpciones}
                className={styles.MenuOptionClose}
              >
                Cerrar
              </p>
            </div>
          </article>
        </section>
      )}
      {isContactsVisible && (
        <section className={styles.contactsListContainer}>
          <p className={styles.menuContactsHeader}>Tus contactos</p>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.menuContactsSearchInput}
          />
          <article className={styles.allContactsList}>
            {listaAmigos.map((objetoAmigo: any) => {
              return (
                <div
                  key={objetoAmigo.idUsuario}
                  className={styles.singleContactContainer}
                >
                  <Image
                    alt="fotoContacto"
                    src={"/blackgoku.jpg"}
                    width={800}
                    height={800}
                    className={styles.singleContactAvatar}
                  ></Image>
                  <div className={styles.singleContactColumn}>
                    <p className={styles.singleContactFullname}>
                      {objetoAmigo.nombre} {objetoAmigo.apellido}
                    </p>
                    <p className={styles.singleContactLastSeen}>
                      {objetoAmigo.ultimaConexion === null
                        ? objetoAmigo.estadoConexion
                        : `Última conexión: ${objetoAmigo.ultimaConexion}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </article>
          <article className={styles.contactsAddCloseRow}>
            <p
              onClick={() => {
                console.log("presionando agregar");
                handleHideContactsVisible();
                handleShowWriteContact();
              }}
            >
              Agregar contacto
            </p>
            <p
              onClick={() => {
                console.log("presionando cerrar");
                handleHideContactsVisible();
              }}
            >
              Cerrar
            </p>
          </article>
        </section>
      )}
      {isWriteContactVisible && (
        <section className={styles.NewContactContainer}>
          <article className={styles.NewContactHeader}>
            <Image
              alt="iconoCrearContaccto"
              src={"/addcontactscreen.png"}
              width={800}
              height={800}
              className={styles.NewContactIcon}
            ></Image>
            <p>Agregar contacto</p>
          </article>

          <p className={styles.NewContactsInputLabel}>Nombre</p>
          <input type="text" className={styles.NewContainerInput} />
          <p className={styles.NewContactsInputLabel}>Apellido</p>
          <input type="text" className={styles.NewContainerInput} />
          <p className={styles.NewContactsInputLabel}>Nombre de usuario</p>
          <input type="text" className={styles.NewContainerInput} />

          <div className={styles.NewContactAddContainer}>
            <p
              onClick={() => {
                console.log("se esta pulsando cancelar de agregar contactoi");
                handleHideWriteContact();
              }}
            >
              Cancelar
            </p>
            <p
              onClick={() => {
                handleHideWriteContact();
              }}
            >
              Crear contacto
            </p>
          </div>
        </section>
      )}
    </div> //CONCLUYE father
  );
}
