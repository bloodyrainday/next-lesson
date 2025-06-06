import { GetServerSideProps } from "next";
import { API } from "../../assets/api/api";
import { EpisodeType, ResponseType } from "../../assets/api/rick-and-morty-api";
import { Card } from "../../components/Card/Card";
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=100"
  // );
  const episodes = await API.rickAndMorty.getEpisodes();

  const isAuth = false;

  if (!episodes) {
    return {
      notFound: true,
    };
  }

  if (!isAuth) {
    return {
      redirect: {
        destination: "/test",
        permanent: false,
      },
    };
  }

  return {
    props: {
      episodes,
    },
  };
};

type PropsType = {
  episodes: ResponseType<EpisodeType>;
};

const Episodes = (props: PropsType) => {
  const { episodes } = props;
  const episodesList = episodes.results.map((e) => (
    <Card key={e.id} name={e.name} />
  ));
  return <PageWrapper>{episodesList}</PageWrapper>;
};

Episodes.getLayout = getLayout;
export default Episodes;
