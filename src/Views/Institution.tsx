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
import CollectionsList from "../components/Collection/CollectionsList";

const Institution = () => {
  // const navigate = useNavigate();
  const dispatch = useContext(PathDispatchContext);
  const [institution, setInstitution] =
    useState<DetailedInstitutionType | null>(null);
  //const [collections, setCollections] = useState<CollectionType[] | null>(null);
  const [collections, setCollections] = useState<CollectionType[]>([]);
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
        console.log(institution.collections[c]);
        temp.push(institution.collections[c]);
      }
      setCollections(temp);
    }
  }, [institution]);

  return (
    <Flex p={"0.5rem"}>
      {isLoading ? (
        <>loading institution</>
      ) : (
        <>
          <Flex direction={"column"} style={{ width: "100%" }}>
            <Flex justify={"center"} py={"1rem"}>
              {institution?.institution_name}
            </Flex>
            <CollectionsList
              collections={collections}
              city={city}
            ></CollectionsList>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Institution;
