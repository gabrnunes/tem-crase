import Ad from '@components/Ad/Ad';
import Layout from '@components/Layout/Layout';
import MostSearched from '@components/MostSearched/MostSearched';
import SearchInput from '@components/Search/Search';

export default function Home() {
  return (
    <Layout title="Tem crase?">
      <SearchInput />
      <MostSearched />
    </Layout>
  );
}
