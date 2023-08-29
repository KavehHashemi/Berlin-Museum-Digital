import { useEffect, useState } from "react";
import { CompactObjectType, EntityType, FetchParamsType } from "../Types";
import { fetchEntity } from "../utils";

type PicType = { url: string; name: string };

const Object = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [object, setObject] = useState<CompactObjectType[] | null>(null);
  const [pics, setPics] = useState<PicType[]>([]);
  const id = window.location.pathname.split("/")[3];

  const params: FetchParamsType = {
    city: "berlin",
    type: EntityType.objects,
    queryParam: `?s=collection:${id}&gbreitenat=50&navlang=de`,
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchEntity<CompactObjectType[]>(params);
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
      const temp: PicType[] = [];
      for (const obj in object) {
        temp.push({ url: object[obj].image, name: object[obj].objekt_name });
      }
      setPics(temp);
    }
  }, [object]);

  const handleClick = (url: string) => {
    const a = url.split("200w_");
    const b = a[0] + a[1];
    window.open(`https://berlin.museum-digital.de/${b}`, "_blank")?.focus();
  };

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
                  onClick={() => handleClick(p.url)}
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
