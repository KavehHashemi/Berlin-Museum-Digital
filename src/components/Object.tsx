import { useEffect, useState } from "react";
import { request } from "../utils";
import { CompactObjectType } from "../Types";

type PicType = { url: string; name: string };

const Object = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [object, setObject] = useState<CompactObjectType[] | null>(null);
  const [pics, setPics] = useState<PicType[]>([]);
  const id = window.location.pathname.split("/")[3];

  useEffect(() => {
    (async () => {
      try {
        const res = await request<CompactObjectType[]>(
          `https://berlin.museum-digital.de/json/objects?s=collection:${id}&gbreitenat=50&navlang=de`
        );
        // console.log(res);
        setObject(res);
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
    if (object) {
      console.log(object);
      const temp: PicType[] = [];
      if (temp.length === 0)
        for (const obj in object) {
          temp.push({ url: object[obj].image, name: object[obj].objekt_name });
        }
      setPics(temp);
    }
  }, [object]);

  return (
    <div>
      {isLoading ? (
        <div>loading object</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {pics.map((p, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ width: "200px" }}>{p.name}</div>
                <img
                  src={`https://berlin.museum-digital.de/${p.url}`}
                  alt={p.name}
                  width={200}
                ></img>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Object;
