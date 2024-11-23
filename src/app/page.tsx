"use client";
import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";
import { useState, useEffect } from "react";
import ConversationsList from "@/components/ConversationsList";
import ChatView from "@/components/ChatView";

export default function Home() {
  const [isInfoChatVisible, setIsInfoChatVisible] = useState(false);

  const handleInfoChatVisible = () => {
    setIsInfoChatVisible(!isInfoChatVisible);
  };

  return (
    //Father es el componente padre de todo el index
    <div className={styles.father}>
      <section className={styles.conversationslist}>
        <ConversationsList></ConversationsList>
      </section>
      <section className={styles.chatContainer}>
        <ChatView onhandleInfoChatVisible={handleInfoChatVisible}></ChatView>
      </section>
      {isInfoChatVisible && (
        <section className={styles.infochat}>
          <InfoChat onhandleInfoChatVisible={handleInfoChatVisible}></InfoChat>
        </section>
      )}
    </div> //CONCLUYE father
  );
}
