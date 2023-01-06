import styles from "./layout.module.css";
import Head from "next/head";
import Image from "next/image";
const Layout = ({ children, home }) => {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Layout next</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <header>
            {home ? (
              <div className={styles.profile}>
                <Image
                  src="/images/profile.jpg"
                  width={144}
                  height={144}
                  alt="Your Name"
                />
              </div>
            ) : (
              <div className={styles.profile}>
                <Image
                  src="/images/profile.jpg"
                  width={144}
                  height={144}
                  alt="Your Name"
                />
                <h1>not home</h1>
              </div>
            )}
          </header>
        </div>
      </div>
      <div>{children}</div>
      <footer>
        <p>개인 블로그입니다</p>
      </footer>
    </div>
  );
};

export default Layout;
