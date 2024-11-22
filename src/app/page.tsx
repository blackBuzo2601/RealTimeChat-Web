"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";
import { useState, useEffect } from "react";
import ConversationsList from "@/components/ConversationsList";

export default function Home() {
  const [chatData, setChatData] = useState<{ key: String; info: any }[]>([]);

  useEffect(() => {
    console.log("useeffect prueba");
    const fetchData = () => {
      const dataJSON = require("@/data/chat.json");
      console.log("data json: " + dataJSON);
      setChatData(
        Object.keys(dataJSON).map((key) => ({ key: key, info: dataJSON[key] }))
      );
    };

    fetchData();
  }, []);

  return (
    //ESTE FATHER ES EL COMPONENTE DE TOODO PAGE.tsx
    <div className={styles.father}>
      <section className={styles.conversationslist}>
        <ConversationsList></ConversationsList>
      </section>
      <section className={styles.chatfather}>
        <article className={styles.chatuserconnection}>
          <div className={styles.chatuserconnectiondivone}>
            <Image
              alt="imageprofile"
              src={"/goku.jpg"}
              width={960}
              height={960}
              className={styles.chatuserconnectionimg}
            ></Image>
            <div className={styles.chatUsernameNameStateColumn}>
              <p className={styles.chatUsernameText}>Elian Buzo</p>
              <p className={styles.chatStateText}>
                Última conexión: Ayer 20:19
              </p>
            </div>
          </div>
          <div className={styles.chatuserconnectiondivtwo}>
            <Image
              alt="imageprofile"
              src={"/search.png"}
              width={800}
              height={800}
              className={styles.chatUserSearchIcon}
            ></Image>
            <Image
              alt="imageprofile"
              src={"/more.png"}
              width={800}
              height={800}
              className={styles.chatUserSearchIcon}
            ></Image>
          </div>
        </article>

        <article className={styles.chatAllMessages}></article>
        <article className={styles.inputContainerSend}></article>
      </section>

      <section className={styles.infochat}>
        <InfoChat></InfoChat>
      </section>
    </div> //CONCLUYE father
  );
}
