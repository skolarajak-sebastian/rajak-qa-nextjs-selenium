import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Рајак QA курс тест NextJS</h1>
        <form method="POST" action="/api/login">
          <div>
            <label htmlFor="username"> Корисничко име: </label>
            <input type="text" required name="username" />
          </div>
          <div>
            <label htmlFor="password">Лозинка: </label>
            <input type="pasword" required name="password" />
          </div>
          <input type="submit" value="УЛОГУЈ СЕ" />
        </form>
      </main>

      <footer className={styles.footer}>Футер</footer>
    </div>
  );
}
