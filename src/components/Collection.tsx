import { useContext, useEffect, useState } from "react";
import {
  CityNames,
  CompactObjectType,
  EntityType,
  FetchParamsType,
  PicType,
} from "../Types";
import { fetchEntity } from "../utils";
import { Card, SimpleGrid } from "@mantine/core";
import { CityContext, PathDispatchContext } from "../context";
import { useNavigate } from "react-router-dom";

const Object = () => {
  const dispatch = useContext(PathDispatchContext);
  const currentCity = useContext(CityContext);
  const city = CityNames[currentCity as keyof typeof CityNames];
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [collection, setCollection] = useState<CompactObjectType[] | null>(
    null
  );
  const [pics, setPics] = useState<PicType[]>([]);
  const navigate = useNavigate();
  const id = window.location.pathname.split("/")[2];
  const name = window.location.pathname.split("/")[3];

  const params: FetchParamsType = {
    city: currentCity,
    type: EntityType.objects,
    queryParam: `?s=collection:${id}&gbreitenat=100&navlang=de`,
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchEntity<CompactObjectType[]>(params);
        setCollection(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      setIsLoading(true);
    };
  }, [currentCity]);

  useEffect(() => {
    if (collection) {
      if (dispatch) {
        dispatch({
          type: "setColl",
          coll: {
            id: +id,
            name: decodeURI(name),
          },
        });
      }
      const temp: PicType[] = [];
      for (const obj in collection) {
        temp.push({
          id: collection[obj].objekt_id,
          name: collection[obj].objekt_name,
          url: collection[obj].image,
        });
      }

      setPics(temp);
    }
  }, [collection]);

  // const handleClick = (url: string) => {
  //   const a = url.split("200w_");
  //   const b = a[0] + a[1];
  //   console.log(b);

  //   window.open(`https://berlin.museum-digital.de/${b}`, "_blank")?.focus();
  // };

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
        <div>loading object</div>
      ) : (
        <>
          {pics.map((p, i) => {
            return (
              <Card variant="institution" key={i}>
                <div>{p.name}</div>
                <img
                  src={`https://${city}.museum-digital.de/${p.url}`}
                  alt={p.name}
                  width={200}
                  onClick={() => handleClick(p.id, p.name)}
                  // onClick={() => handleClick(p.url)}
                ></img>
              </Card>
            );
          })}
        </>
      )}
    </SimpleGrid>
  );
};

export default Object;
