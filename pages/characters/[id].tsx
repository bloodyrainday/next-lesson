import { GetStaticPaths, GetStaticProps } from "next";
import { API } from "../../assets/api/api";
import { CharacterType } from "../../assets/api/rick-and-morty-api";
import { CharacterCard } from "../../components/Card/CharacterCard/CharacterCard";
import { getLayout } from "../../components/Layout/BaseLayout/BaseLayout";

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await API.rickAndMorty.getCharacters();

  const paths = results.map((character) => ({
    params: { id: String(character.id) },
  }));

  // [{params:{id:1}}, {params:{id:2}}, {params:{id:3}}]
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {};
  const character = await API.rickAndMorty.getCharacter(id as string);

  if (!character) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      character,
    },
  };
};

type PropsType = {
  character: CharacterType;
};

const Character = (props: PropsType) => {
  const { character } = props;

  return <CharacterCard key={character.id} character={character} />;
};

Character.getLayout = getLayout;
export default Character;
