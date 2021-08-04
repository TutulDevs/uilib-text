import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard | UI Lib</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <>
        <h1>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p>
          Go to <Link href='/about'>About Page</Link>
        </p>
      </>
    </div>
  );
}
