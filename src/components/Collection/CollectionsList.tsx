import { Flex, SimpleGrid } from "@mantine/core";
import { CityNames, CollectionType } from "../../Types";
import CollectionCard from "./CollectionCard";

type props = {
  collections: CollectionType[];
  city: string;
};
const CollectionsList = ({ collections, city }: props) => {
  return (
    <Flex direction={"column"} style={{ width: "100%" }}>
      <SimpleGrid
        spacing="md"
        breakpoints={[
          { minWidth: "sm", cols: 1 },
          { minWidth: "md", cols: 2 },
        ]}
      >
        {collections?.sort().map((c, i) => {
          return (
            <CollectionCard collection={c} city={city} key={i}></CollectionCard>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default CollectionsList;
