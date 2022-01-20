import Head from "next/head";

import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <Layout>
      <Head />
      <SearchInput />
    </Layout>
  );
}
