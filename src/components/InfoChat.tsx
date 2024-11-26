import React from "react";
import styles from "../styles/components styles/InfoChat.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

interface InfoChatProps {
  onhandleInfoChatVisible: () => void;
  onHandleHideMenuVisible: () => void;
}

const InfoChat: React.FC<InfoChatProps> = ({
  onhandleInfoChatVisible,
  onHandleHideMenuVisible,
}) => {
  const [isMultimediaVisible, setIsMultimediaVisible] = useState(false);
  const [isFilesVisible, setIsFilesVisible] = useState(false);
  const [isAudiosVisible, setIsAudiosVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); //definimos que el estado
  //puede ser tanto un string, como un nulo y asignamos nulo inucialmente como el estado.

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

  return (
    <div onClick={onHandleHideMenuVisible} className={styles.father}>
      <section className={styles.infouser}>
        <article className={styles.infouserrow}>
          <p className={styles.infouserheading}>Información de usuario</p>
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
            <p className={styles.infofullname}>Elian Buzo</p>
            <p className={styles.infoUsername}>@buzopro2002</p>
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
          <p className={styles.multimediasubcontainertext}>50 fotos</p>
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
        <article
          onClick={handleShowAudiosVisible}
          className={styles.multimediasubcontainer}
        >
          <Image
            alt="iconoNotifications"
            src={"/microphone.png"}
            width={40}
            height={40}
          ></Image>
          <p className={styles.multimediasubcontainertext}>1 mensaje de voz</p>
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
          <p className={styles.notificationstext}>5 Miembros</p>
          <Image
            alt="iconoAgregarMiembros"
            src={"/addcontactscreen.png"}
            width={40}
            height={40}
          ></Image>
        </article>
        <article className={styles.membersListContainer}>
          <div className={styles.singleMember}>
            <Image
              alt="fotoDeMiembro"
              src={"/blackgoku.jpg"}
              width={50}
              height={50}
            ></Image>
            <div className={styles.singleMemberInfo}>
              <p className={styles.singleMemberFullname}>Elian Buzo</p>
              <p className={styles.singleMemberLastSeen}>
                Ultima Conexión: Hoy 18:40
              </p>
            </div>
          </div>
          <div className={styles.singleMember}>
            <Image
              alt="fotoDeMiembro"
              src={"/blackgoku.jpg"}
              width={50}
              height={50}
            ></Image>
            <div className={styles.singleMemberInfo}>
              <p className={styles.singleMemberFullname}>Elian Buzo</p>
              <p className={styles.singleMemberLastSeen}>
                Ultima Conexión: Hoy 18:40
              </p>
            </div>
          </div>
          <div className={styles.singleMember}>
            <Image
              alt="fotoDeMiembro"
              src={"/blackgoku.jpg"}
              width={50}
              height={50}
            ></Image>
            <div className={styles.singleMemberInfo}>
              <p className={styles.singleMemberFullname}>Elian Buzo</p>
              <p className={styles.singleMemberLastSeen}>
                Ultima Conexión: Hoy 18:40
              </p>
            </div>
          </div>
          <div className={styles.singleMember}>
            <Image
              alt="fotoDeMiembro"
              src={"/blackgoku.jpg"}
              width={50}
              height={50}
            ></Image>
            <div className={styles.singleMemberInfo}>
              <p className={styles.singleMemberFullname}>Elian Buzo</p>
              <p className={styles.singleMemberLastSeen}>
                Ultima Conexión: Hoy 18:40
              </p>
            </div>
          </div>
          <div className={styles.singleMember}>
            <Image
              alt="fotoDeMiembro"
              src={"/blackgoku.jpg"}
              width={50}
              height={50}
            ></Image>
            <div className={styles.singleMemberInfo}>
              <p className={styles.singleMemberFullname}>Elian Buzo</p>
              <p className={styles.singleMemberLastSeen}>
                Ultima Conexión: Hoy 18:40
              </p>
            </div>
          </div>
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
            <div className={styles.photosRow}>
              <Image
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
                onClick={() => handleShowImage("/burguer.jpg")}
              ></Image>
              <Image
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
                onClick={() => handleShowImage("/burguer.jpg")}
              ></Image>
              <Image
                alt="iconoReturn"
                src={"/goku.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
                onClick={() => handleShowImage("/goku.jpg")}
              ></Image>
            </div>
            <div className={styles.photosRow}>
              <Image
                alt="iconoReturn"
                src={"/blackgoku.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
                onClick={() => handleShowImage("/blackgoku.jpg")}
              ></Image>
              <Image
                alt="iconoReturn"
                src={"/zelda.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
                onClick={() => handleShowImage("/zelda.jpg")}
              ></Image>
            </div>
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
