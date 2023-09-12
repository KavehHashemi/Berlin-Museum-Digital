/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useContext, useState } from "react";
import { DetailedCollectionType, EntityType, FetchParamsType } from "../Types";
import { useNavigate } from "react-router-dom";
import { fetchEntity } from "../utils";
import { PathDispatchContext } from "../context";

const Collection = () => {
  const navigate = useNavigate();
  const dispatch = useContext(PathDispatchContext);
  const [collection, setCollection] = useState<DetailedCollectionType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const id = window.location.pathname.split("/")[2];

  const params: FetchParamsType = {
    city: "berlin",
    type: EntityType.collection,
    id: id,
  };

  useEffect(() => {
    (async () => {
      const res = await fetchEntity<DetailedCollectionType>(params);
      setCollection(res);
      setIsLoading(false);
    })();

    return () => {
      setIsLoading(true);
    };
  }, []);

  useEffect(() => {
    if (collection) {
      // if (dispatch)
      //   dispatch({
      //     type: "setColl",
      //     coll: {
      //       id: collection.collection_id,
      //       name: collection.collection_name,
      //     },
      //   });
    }
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
