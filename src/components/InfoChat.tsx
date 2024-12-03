import React from "react";
import styles from "../styles/components styles/InfoChat.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

interface InfoChatProps {
  chat: any;
  onhandleInfoChatVisible: () => void;
  onHandleHideMenuVisible: () => void;
}

const InfoChat: React.FC<InfoChatProps> = ({
  chat,
  onhandleInfoChatVisible,
  onHandleHideMenuVisible,
}) => {
  const [isMultimediaVisible, setIsMultimediaVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); //definimos que el estado
  const [isFilesVisible, setIsFilesVisible] = useState(false);
  const [isAudiosVisible, setIsAudiosVisible] = useState(false);
  //puede ser tanto un string, como un nulo y asignamos nulo inucialmente como el estado.

  const multimediaCount = chat?.MensajesMultimedia?.length || 0;
  const membersCount = chat?.miembros?.length || 0;
  const members = chat?.miembros || [];

  const handleShowImage = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleShowMultimedia = () => {
    setIsMultimediaVisible(true);
  };

  const handleHideMultimedia = () => {
    setIsMultimediaVisible(false);
  };

  const handleShowFiles = () => {
    setIsFilesVisible(true);
  };

  const handleHideFiles = () => {
    setIsFilesVisible(false);
  };

  const handleShowAudiosVisible = () => {
    setIsAudiosVisible(true);
  };

  const handleHideAudiosVisible = () => {
    setIsAudiosVisible(false);
  };

  const infoFullName =
    chat.miembros.length === 2
      ? chat.miembros.find((m: any) => m.IDMiembro !== 100)?.Nombre
      : `Grupo de ${
          chat.mensajes.length > 0 ? chat.mensajes[0].Usuario : "desconocido"
        }`;

  const infoUsername =
    chat.miembros.length === 2
      ? `@${chat.miembros.find((m: any) => m.IDMiembro !== 100)?.nickname}`
      : null;
  return (
    <div onClick={onHandleHideMenuVisible} className={styles.father}>
      <section className={styles.infouser}>
        <article className={styles.infouserrow}>
          <p className={styles.infouserheading}>Información del chat</p>
          <div className={styles.close} onClick={onhandleInfoChatVisible}></div>
        </article>
        <article className={styles.infoname}>
          <Image
            className={styles.avatarimg}
            src="/goku.jpg"
            alt="Avatar"
            width={960}
            height={960}
          ></Image>
          <div className={styles.namecolumn}>
            <p className={styles.infofullname}>{infoFullName}</p>
            {infoUsername && (
              <p className={styles.infoUsername}>{infoUsername}</p>
            )}
          </div>
        </article>
      </section>

      <section className={styles.notificationscontainer}>
        <Image
          alt="iconoNotifications"
          src={"/notifications.png"}
          width={50}
          height={50}
        ></Image>
        <p className={styles.notificationstext}>Notificaciones</p>
        <div className={styles.switchContainer}>
          <div className={styles.switchContainerDivOne}></div>
          <div className={styles.switchContainerDivTwo}></div>
        </div>
      </section>
      <section className={styles.multimediainfo}>
        <article
          onClick={handleShowMultimedia}
          className={styles.multimediasubcontainer}
        >
          <Image
            alt="iconoNotifications"
            src={"/photos.png"}
            width={40}
            height={40}
          ></Image>
          <p className={styles.multimediasubcontainertext}>
            {multimediaCount} Fotos
          </p>
        </article>
        <article
          onClick={handleShowFiles}
          className={styles.multimediasubcontainer}
        >
          <Image
            alt="iconoNotifications"
            src={"/files.png"}
            width={40}
            height={40}
          ></Image>
          <p className={styles.multimediasubcontainertext}>4 archivos</p>
        </article>
      </section>
      <section className={styles.optionscontainer}>
        <article className={styles.optionssubcontainer}>
          <Image
            alt="iconoNotifications"
            src={"/trash.png"}
            width={40}
            height={35}
          ></Image>
          <p className={styles.multimediasubcontainertext}>
            Borrar conversación
          </p>
        </article>
      </section>
      {/**/}
      <section className={styles.allMembersContainer}>
        <article className={styles.allMembersContainerRow}>
          <Image
            alt="iconoMiembros"
            src={"/newgroup.png"}
            width={50}
            height={50}
          ></Image>
          <p className={styles.notificationstext}>{membersCount} Miembros</p>
          <Image
            alt="iconoAgregarMiembros"
            src={"/addcontactscreen.png"}
            width={40}
            height={40}
          ></Image>
        </article>
        <article className={styles.membersListContainer}>
          {members.map((member: any) => (
            <div key={member.IDMiembro} className={styles.singleMember}>
              <Image
                alt="fotoDeMiembro"
                src={"/goku.jpg"} // Puedes reemplazar con imágenes dinámicas
                width={50}
                height={50}
              ></Image>
              <div className={styles.singleMemberInfo}>
                <p className={styles.singleMemberFullname}>{member.Nombre}</p>
                <p className={styles.singleMemberLastSeen}>
                  {member.ultimaConexion
                    ? `Última conexión: ${member.ultimaConexion}`
                    : member.estadoConexion || ""}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>
      {isMultimediaVisible && (
        <div className={styles.multimediaPhotosContainer}>
          <section className={styles.infoTabName}>
            <Image
              onClick={handleHideMultimedia}
              alt="iconoReturn"
              src={"/return.png"}
              width={800}
              height={800}
              className={styles.returnIconContainer}
            ></Image>
            <p>Fotos</p>
          </section>
          <section className={styles.allPhotos}>
            {chat.MensajesMultimedia.reduce(
              (rows: any[], multimedia: any, index: number) => {
                if (index % 3 === 0) {
                  rows.push([]); // Cada 3 elementos, iniciamos un nuevo row
                }
                rows[rows.length - 1].push(multimedia); // Agregamos la imagen al row actual
                return rows;
              },
              []
            ).map((row: any[], rowIndex: number) => (
              <div key={rowIndex} className={styles.photosRow}>
                {row.map((multimedia: any, index: number) => (
                  <Image
                    key={index}
                    alt={`multimedia ${index + 1}`}
                    src={`/${multimedia.ruta}`}
                    width={600}
                    height={600}
                    className={styles.singleMultimediaPhoto}
                    onClick={() => handleShowImage(`/${multimedia.ruta}`)}
                  />
                ))}
              </div>
            ))}
          </section>
        </div>
      )}

      {selectedImage && (
        <div className={styles.imageViewer}>
          <div
            className={styles.imageViewerOverlay}
            onClick={handleCloseImage}
          ></div>
          <div className={styles.imageViewerContent}>
            <Image
              alt="Imagen ampliada"
              src={selectedImage}
              width={800}
              height={800}
              className={styles.imageViewerImage}
            />
          </div>
        </div>
      )}

      {isFilesVisible && (
        <div className={styles.multimediaPhotosContainer}>
          <section className={styles.infoTabName}>
            <Image
              onClick={handleHideFiles}
              alt="iconoReturn"
              src={"/return.png"}
              width={800}
              height={800}
              className={styles.returnIconContainer}
            ></Image>
            <p>Archivos</p>
          </section>
          <section className={styles.allPhotos}>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
            <div className={styles.fileContainer}>
              <p className={styles.fileContainerFileName}>ChatEjemplo.json</p>
              <p className={styles.fileContainerFileSize}>434 B</p>
              <p className={styles.fileContainerFileDate}>Nov 13 10:10</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default InfoChat;
