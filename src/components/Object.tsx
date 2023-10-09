import { useContext, useEffect, useState } from "react";
import {
  CityNames,
  DetailedObjectType,
  EntityType,
  FetchParamsType,
} from "../Types";
import { fetchEntity } from "../utils";
import { CityContext, PathDispatchContext } from "../context";
import { Card, Flex } from "@mantine/core";

const Object = () => {
  const dispatch = useContext(PathDispatchContext);
  const [object, setObject] = useState<DetailedObjectType | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const currentCity = useContext(CityContext);
  const city = CityNames[currentCity as keyof typeof CityNames];
  const id = window.location.pathname.split("/")[2];
  // const name = window.location.pathname.split("/")[3];

  const params: FetchParamsType = {
    city: currentCity,
    type: EntityType.object,
    id: id,
  };

  useEffect(() => {
    (async () => {
      const res = await fetchEntity<DetailedObjectType>(params);
      setObject(res);
      setIsLoading(false);
    })();
    return () => {
      setIsLoading(true);
    };
  }, [currentCity]);

  useEffect(() => {
    if (object) {
      console.log(object);
      if (dispatch)
        dispatch({
          type: "setObj",
          obj: { id: object.object_id, name: object.object_name },
        });
      // setImgUrl(
      //   `https://${city}.museum-digital.de/data/${city}/` +
      //     object.object_images[0].folder +
      //     "/" +
      //     object?.object_images[0].preview
      // );
      setImgUrl(
        `https://asset.museum-digital.org/${city}/` +
          object.object_images[0].folder +
          "/" +
          object?.object_images[0].preview
      );
    }
  }, [object]);

  const handleClick = () => {
    if (object) {
      const url =
        `https://${city}.museum-digital.de/data/${city}/` +
        object.object_images[0].folder +
        "/" +
        object?.object_images[0].filename_loc;
      window.open(url, "_blank")?.focus();
    }
  };

  return (
    <Flex>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <Card variant="institution" onClick={handleClick}>
          <img src={imgUrl} alt={object?.object_name} width={200}></img>
          <div>{object?.object_name}</div>
          <div>{object?.object_description}</div>
        </Card>
      )}
    </Flex>
  );
};

export default Object;
