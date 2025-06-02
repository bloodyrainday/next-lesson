import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { API } from "../../assets/api/api";
import {
  LocationType,
  ResponseType,
} from "../../assets/api/rick-and-morty-api";
import { Header } from "../../components/Header/Header";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Card } from "../../components/Card/Card";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["locations"], getLocations);

  //const locations = await API.rickAndMorty.getLocations();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

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
    <Card key={l.id} name={l.name} />
  ));
  return (
    <PageWrapper>
      <Header />
      {locationsList}
    </PageWrapper>
  );
};

export default Locations;
