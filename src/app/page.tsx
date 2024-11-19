import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";

export default function Home() {
  return (
    <div className={styles.father}>
      <section className={styles.conversationslist}></section>

      <section className={styles.chatfather}>
        <div className={styles.chatuserconnection}>
          <Image
            alt="imageprofile"
            src={"/goku.jpg"}
            width={960}
            height={960}
            className={styles.chatuserconnectionimg}
          ></Image>
          <p>Texto pa</p>
        </div>
      </section>

      <section className={styles.infochat}>
        <InfoChat />
      </section>
    </div>
  );
}
