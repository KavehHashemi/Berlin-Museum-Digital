import { Badge, Card, Flex, SimpleGrid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { CityNames, CollectionType, DetailedCollectionType } from "../../Types";

type Props = {
  collection: CollectionType;
  city: string;
};

const CollectionCard = ({ collection, city }: Props) => {
  const navigate = useNavigate();
  const handleClick = (id: number, name: string) => {
    navigate(`/collections/${id}/${name}`);
  };
  let a = city.toString();
  if (city == CityNames.Hamburg) a = "de-hamburg";
  return (
    <Card
      variant="collection"
      onClick={() => {
        collection.collection_number_of_objects !== 0 &&
          handleClick(collection.collection_id, collection.collection_name);
      }}
      key={collection.collection_id}
    >
      <SimpleGrid variant="between">
        <div>{collection.collection_name}</div>
        <Badge
          color={collection.collection_number_of_objects !== 0 ? "cyan" : "red"}
        >
          {collection.collection_number_of_objects} objects
        </Badge>
      </SimpleGrid>
      <Flex gap="1rem">
        {collection.collection_image ? (
          <img
            src={`https://${city}.museum-digital.de/data/${a}/${collection.collection_image}`}
            style={{ maxHeight: 300 }}
          ></img>
        ) : (
          <img
            src={`https://${city}.museum-digital.de/db_images_gestaltung/mdlogo-128px.png`}
          ></img>
        )}

        <div>{collection.collection_description}</div>
      </Flex>
    </Card>
  );
};

export default CollectionCard;
