/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import {
  CityNames,
  CompactObjectType,
  EntityType,
  FetchParamsType,
  PicType,
} from "../Types";
import { fetchEntity } from "../utils";
import { CityContext, SearchDispatchContext } from "../context";
import { Card, SimpleGrid } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const navigate = useNavigate();
  const dispatch = useContext(SearchDispatchContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<
    CompactObjectType[] | null
  >(null);
  const [pics, setPics] = useState<PicType[]>([]);
  const searchParam = window.location.pathname.split("/")[2];
  const currentCity = useContext(CityContext);
  const city = CityNames[currentCity as keyof typeof CityNames];
  const params: FetchParamsType = {
    city: currentCity,
    type: EntityType.objects,
    queryParam: `?s=${searchParam}`,
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchEntity<CompactObjectType[]>(params);
        setSearchResults(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      setIsLoading(true);
    };
  }, []);

  useEffect(() => {
    if (dispatch) dispatch({ type: "setSearchParam", payload: searchParam });
    if (searchResults) {
      const temp: PicType[] = [];
      for (const res in searchResults) {
        temp.push({
          id: searchResults[res].objekt_id,
          name: searchResults[res].objekt_name,
          url: searchResults[res].image,
        });
      }
      setPics(temp);
    }
  }, [searchResults]);

  const handleClick = (id: number, name: string) => {
    navigate(`/objects/${id}/${name}`);
  };

  return (
    <SimpleGrid
      spacing="md"
      breakpoints={[
        { minWidth: "sm", cols: 2 },
        { minWidth: "md", cols: 3 },
        { minWidth: "lg", cols: 4 },
      ]}
      p={"0.5rem"}
    >
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          {pics.map((p, i) => {
            return (
              <Card key={i}>
                <div>{p.name}</div>
                <img
                  src={`https://${city}.museum-digital.de/${p.url}`}
                  alt={p.name}
                  width={200}
                  onClick={() => handleClick(p.id, p.name)}
                ></img>
              </Card>
            );
          })}
        </>
      )}
    </SimpleGrid>
  );
};

export default SearchResults;
