"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";
import { useState, useEffect } from "react";
import ConversationsList from "@/components/ConversationsList";
import ChatView from "@/components/ChatView";

export default function Home() {
  const [isInfoChatVisible, setIsInfoChatVisible] = useState(false);
  const [isChatViewVisible, setIsChatViewVisible] = useState(false);
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

  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      <section className={styles.conversationslist}>
        <ConversationsList
          onHandleChatView={handleChatViewVisible}
          jsonData={jsonData}
        ></ConversationsList>
      </section>
      <section className={styles.chatContainer}>
        <ChatView
          isChatViewVisible={isChatViewVisible}
          onhandleInfoChatVisible={handleInfoChatVisible}
        ></ChatView>
      </section>
      {isInfoChatVisible && (
        <section className={styles.infochat}>
          <InfoChat onhandleInfoChatVisible={handleInfoChatVisible}></InfoChat>
        </section>
      )}
    </div> //CONCLUYE father
  );
}
