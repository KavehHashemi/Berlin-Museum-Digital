import { useEffect, useState } from "react";
import {
  CollectionType,
  DetailedInstitutionType,
  EntityType,
  FetchParamsType,
} from "../Types";
import { useNavigate } from "react-router-dom";
import { fetchEntity } from "../utils";
import { Card, Flex, SimpleGrid } from "@mantine/core";

const Institution = () => {
  const navigate = useNavigate();
  const [institution, setInstitution] =
    useState<DetailedInstitutionType | null>(null);
  const [collections, setCollections] = useState<CollectionType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const id = window.location.pathname.split("/")[2];

  const params: FetchParamsType = {
    city: "berlin",
    type: EntityType.institution,
    id: id,
  };

  useEffect(() => {
    (async () => {
      const res = await fetchEntity<DetailedInstitutionType>(params);
      setInstitution(res);
      setIsLoading(false);
    })();

    return () => {
      setIsLoading(true);
    };
  }, []);

  useEffect(() => {
    if (institution) {
      // console.log(institution.collections);
      const temp: CollectionType[] = [];
      for (const c in institution.collections) {
        temp.push(institution.collections[c]);
      }
      setCollections(temp);
    }
  }, [institution]);

  const handleClick = (id: number, name: string) => {
    navigate(`/collections/${id}/${name}`);
  };

  return (
    <Flex p={"0.5rem"}>
      {isLoading ? (
        <>loading institution</>
      ) : (
        <Flex direction={"column"}>
          <Flex justify={"center"} py={"1rem"}>
            {institution?.institution_name}
          </Flex>
          <SimpleGrid
            spacing="md"
            breakpoints={[
              { minWidth: "sm", cols: 2 },
              { minWidth: "md", cols: 3 },
              { minWidth: "lg", cols: 4 },
            ]}
          >
            {collections?.sort().map((c) => (
              <Card
                onClick={() => handleClick(c.collection_id, c.collection_name)}
                key={c.collection_id}
              >
                <div>
                  {c.collection_name} - {c.collection_id}
                </div>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      )}
    </Flex>
  );
};

export default Institution;
