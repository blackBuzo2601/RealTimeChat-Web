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

  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      <section className={styles.conversationslist}>
        <ConversationsList
          onHandleChatView={handleChatViewVisible} //ConversationsList renderiza los SingleChats
          onHandleMenuVisible={handleMenuVisible}
        ></ConversationsList>
        <Menu isMenuVisible={isMenuVisible}></Menu>
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
    </div> //CONCLUYE father
  );
}
