import { useEffect, useState } from "react";
import { CompactObjectType, EntityType, FetchParamsType } from "../Types";
import { fetchEntity } from "../utils";
import { Card, SimpleGrid } from "@mantine/core";

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
              <Card key={i}>
                <div>{p.name}</div>
                <img
                  src={`https://berlin.museum-digital.de/${p.url}`}
                  alt={p.name}
                  width={200}
                  onClick={() => handleClick(p.url)}
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
