import { API } from "../../assets/api/api";
import {
  CharacterType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { Header } from "../../components/Header/Header";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

export const getStaticProps = async () => {
  const episodes = await API.rickAndMorty.getEpisodes();
  return {
    props: {
      episodes,
    },
  };
};

type PropsType = {
  episodes: ResponseType<CharacterType>;
};

const Episodes = (props: PropsType) => {
  const { episodes } = props;
  const episodesList = episodes.results.map((e) => (
    <div key={e.id}>{e.name}</div>
  ));
  return (
    <PageWrapper>
      <Header />
      {episodesList}
    </PageWrapper>
  );
};

export default Episodes;
