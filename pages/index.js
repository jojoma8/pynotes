import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>pyNotes</title>
      </Head>

      <Header />

      {/* <h1>{"Let's build my dream"}</h1> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
