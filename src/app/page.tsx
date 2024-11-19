import Image from "next/image";
import styles from "./page.module.css";
import InfoChat from "@/components/InfoChat";

export default function Home() {
  return (
    <div className={styles.father}>
      <section className={styles.conversationslist}></section>

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
          <div></div>
        </article>
      </section>

      <section className={styles.infochat}>
        <InfoChat />
      </section>
    </div>
  );
}
