import { API } from "../../assets/api/api";
import {
  CharacterType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";

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

const Characters = (props: PropsType) => <>Characters</>;

export default Characters;
