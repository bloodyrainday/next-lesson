import { API } from "../../assets/api/api";
import {
  CharacterType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { CharacterCard } from "../../components/Card/CharacterCard/CharacterCard";
import { Header } from "../../components/Header/Header";
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters();
  return {
    props: {
      characters,
    },
  };
};

type PropsType = {
  characters: ResponseType<CharacterType>;
};

const Characters = (props: PropsType) => {
  const { characters } = props;
  const charactersList = characters.results.map((c) => (
    <CharacterCard key={c.id} character={c} />
  ));
  return <PageWrapper>{charactersList}</PageWrapper>;
};

Characters.getLayout = getLayout;
export default Characters;
