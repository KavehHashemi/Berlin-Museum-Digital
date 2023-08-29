import { useEffect, useState } from "react";
import { DetailedCollectionType } from "../Types";
import { request } from "../utils";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();
  const [collection, setCollection] = useState<DetailedCollectionType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    (async () => {
      const res = await request<DetailedCollectionType>(
        `https://berlin.museum-digital.de/json/collection/${id}`
      );
      setCollection(res);
      setIsLoading(false);
    })();

    return () => {
      setIsLoading(true);
    };
  }, []);

  useEffect(() => {
    if (collection) console.log(collection);
  }, [collection]);

  const handleClick = () => {
    navigate(`/objects/collection/${collection?.collection_id}`);
  };

  return (
    <>
      {isLoading ? (
        <div>loading collection</div>
      ) : (
        <div onClick={handleClick}>
          <div>{collection?.collection_name}</div>
          <div>{collection?.collection_description}</div>
          <div>{/* <img>{collection?.collection_image.}</img> */}</div>
          <div>{collection?.collection_number_of_objects}</div>
        </div>
      )}
    </>
  );
};

export default Collection;
