import { useContext, useEffect, useState } from "react";
import { DetailedObjectType, EntityType, FetchParamsType } from "../Types";
import { fetchEntity } from "../utils";
import { PathDispatchContext } from "../context";
import { Card } from "@mantine/core";

const Object = () => {
  const dispatch = useContext(PathDispatchContext);
  const [object, setObject] = useState<DetailedObjectType | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const id = window.location.pathname.split("/")[2];
  // const name = window.location.pathname.split("/")[3];

  const params: FetchParamsType = {
    city: "berlin",
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
  }, []);

  useEffect(() => {
    if (object) {
      if (dispatch)
        dispatch({
          type: "setObj",
          obj: { id: object.object_id, name: object.object_name },
        });
      setImgUrl(
        "https://berlin.museum-digital.de/data/berlin/" +
          object.object_images[0].folder +
          "/" +
          object?.object_images[0].preview
      );
    }
  }, [object]);

  const handleClick = () => {
    if (object) {
      const url =
        "https://berlin.museum-digital.de/data/berlin/" +
        object.object_images[0].folder +
        "/" +
        object?.object_images[0].filename_loc;
      window.open(url, "_blank")?.focus();
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <Card onClick={handleClick}>
          <img src={imgUrl} alt={object?.object_name} width={200}></img>
          <div>{object?.object_name}</div>
          <div>{object?.object_description}</div>
        </Card>
      )}
    </div>
  );
};

export default Object;
