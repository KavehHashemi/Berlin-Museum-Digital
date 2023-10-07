/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useContext, useState } from "react";
import {
  CityNames,
  CollectionType,
  DetailedInstitutionType,
  EntityType,
  FetchParamsType,
} from "../Types";
import { useNavigate } from "react-router-dom";
import { fetchEntity } from "../utils";
import { Badge, Card, Flex, Group, SimpleGrid, Text } from "@mantine/core";
import { CityContext, PathDispatchContext } from "../context";

const Institution = () => {
  const navigate = useNavigate();
  const dispatch = useContext(PathDispatchContext);
  const [institution, setInstitution] =
    useState<DetailedInstitutionType | null>(null);
  const [collections, setCollections] = useState<CollectionType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const id = window.location.pathname.split("/")[2];
  const currentCity = useContext(CityContext);
  const city = CityNames[currentCity as keyof typeof CityNames];
  const params: FetchParamsType = {
    city: currentCity,
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
  }, [currentCity]);

  useEffect(() => {
    if (institution) {
      if (dispatch)
        dispatch({
          type: "setInst",
          inst: {
            id: institution.institution_id,
            name: institution.institution_name,
          },
        });
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
        <Flex direction={"column"} style={{ width: "100%" }}>
          <Flex justify={"center"} py={"1rem"}>
            {institution?.institution_name}
          </Flex>
          <SimpleGrid
            spacing="md"
            breakpoints={[
              { minWidth: "sm", cols: 1 },
              { minWidth: "md", cols: 2 },
            ]}
          >
            {collections?.sort().map((c) => (
              <Card
                variant="collection"
                onClick={() => {
                  c.collection_number_of_objects !== 0 &&
                    handleClick(c.collection_id, c.collection_name);
                }}
                key={c.collection_id}
              >
                <SimpleGrid variant="between">
                  <div>{c.collection_name}</div>
                  <Badge
                    color={
                      c.collection_number_of_objects !== 0 ? "cyan" : "red"
                    }
                  >
                    {c.collection_number_of_objects} objects
                  </Badge>
                </SimpleGrid>
                <Flex gap="1rem">
                  {c.collection_image ? (
                    <img
                      src={`https://${city}.museum-digital.de/data/${city}/${c.collection_image}`}
                      style={{ maxHeight: 300 }}
                    ></img>
                  ) : (
                    <img
                      src={`https://${city}.museum-digital.de/db_images_gestaltung/mdlogo-128px.png`}
                    ></img>
                  )}

                  <div>{c.collection_description}</div>
                </Flex>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      )}
    </Flex>
  );
};

export default Institution;
