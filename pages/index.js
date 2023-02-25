import Head from "next/head";
import { Navbar } from "@/Components/Navbar";
import { DistrictManager } from "@/Components/DistrictManager";
import { Users } from "@/Components/Users";

export const getStaticProps = async () => {
  const resp = await fetch("http://www.mocky.io/v2/5d73bf3d3300003733081869");

  const data = await resp.json();

  return {
    props: { users: data },
  };
};

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>GrowthOps</title>
        <meta name="description" content="Growth Ops" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />
        <DistrictManager />
        <Users users={users} />
      </main>
    </>
  );
}
