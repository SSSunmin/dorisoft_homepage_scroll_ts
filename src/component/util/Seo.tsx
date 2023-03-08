import Head from 'next/head';

interface Props {
  title: string;
}
const Seo: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default Seo;
