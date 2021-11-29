import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>pyNotes</title>
      </Head>

      <Header />

      <h1>{"Let's build my dream"}</h1>
    </div>
  );
}
