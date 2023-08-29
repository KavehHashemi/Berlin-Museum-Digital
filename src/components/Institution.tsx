import { useEffect, useState } from "react";
import { request } from "../utils";
import { CollectionType, DetailedInstitutionType } from "../Types";
import { useNavigate } from "react-router-dom";

const Institution = () => {
  const navigate = useNavigate();
  const [institution, setInstitution] =
    useState<DetailedInstitutionType | null>(null);
  const [collections, setCollections] = useState<CollectionType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    (async () => {
      const res = await request<DetailedInstitutionType>(
        `https://berlin.museum-digital.de/json/institution/${id}`
      );
      setInstitution(res);
      setIsLoading(false);
    })();

    return () => {
      setIsLoading(true);
    };
  }, []);

  useEffect(() => {
    if (institution) {
      // console.log(institution.collections);
      const temp: CollectionType[] = [];
      for (const c in institution.collections) {
        temp.push(institution.collections[c]);
      }
      setCollections(temp);
    }
  }, [institution]);

  const handleClick = (id: number, name: string) => {
    navigate(`/collections/${id}/${name}`);
  };

  return (
    <div>
      {isLoading ? (
        <>loading institution</>
      ) : (
        <div>
          {institution?.institution_name}
          {collections?.sort().map((c) => (
            <div
              onClick={() => handleClick(c.collection_id, c.collection_name)}
              key={c.collection_id}
              style={{ backgroundColor: "#333388", padding: "0.5rem" }}
            >
              <div>
                {c.collection_name} - {c.collection_id}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Institution;
