import { useQuery } from "@tanstack/react-query";
import { API } from "../../assets/api/api";
import {
  LocationType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { Header } from "../../components/Header/Header";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

// export const getStaticProps = async () => {
//   const locations = await API.rickAndMorty.getLocations();
//   return {
//     props: {
//       locations,
//     },
//   };
// };

const getLocations = () => {
  return fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/location`, {
    method: "GET",
  }).then((res) => res.json());
};

const Locations = () => {
  const { data: locations } = useQuery<ResponseType<LocationType>>(
    ["locations"],
    getLocations
  );

  if (!locations) return null;

  const locationsList = locations.results.map((l) => (
    <div key={l.id}>{l.name}</div>
  ));
  return (
    <PageWrapper>
      <Header />
      {locationsList}
    </PageWrapper>
  );
};

export default Locations;
