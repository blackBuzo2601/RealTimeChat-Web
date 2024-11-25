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

  const handleShowMultimedia = () => {
    setIsMultimediaVisible(true);
  };

  const handleHideMultimedia = () => {
    setIsMultimediaVisible(false);
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
        <article className={styles.multimediasubcontainer}>
          <Image
            alt="iconoNotifications"
            src={"/files.png"}
            width={40}
            height={40}
          ></Image>
          <p className={styles.multimediasubcontainertext}>4 archivos</p>
        </article>
        <article className={styles.multimediasubcontainer}>
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
            src={"/block.png"}
            width={40}
            height={35}
          ></Image>
          <p className={styles.multimediasubcontainertext}>Bloquear usuario</p>
        </article>
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
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
            </div>
            <div className={styles.photosRow}>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
            </div>
            <div className={styles.photosRow}>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
            </div>
            <div className={styles.photosRow}>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
            </div>
            <div className={styles.photosRow}>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
            </div>
            <div className={styles.photosRow}>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
            </div>
            <div className={styles.photosRow}>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
              <Image
                onClick={handleHideMultimedia}
                alt="iconoReturn"
                src={"/burguer.jpg"}
                width={600}
                height={600}
                className={styles.singleMultimediaPhoto}
              ></Image>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default InfoChat;
