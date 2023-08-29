import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../utils";
import { CompactInstitutionType } from "../Types";

const Institutuions = () => {
  const [institutions, setInstitutions] = useState<CompactInstitutionType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await request<CompactInstitutionType[]>(
        "https://berlin.museum-digital.de/json/institutions"
      );
      setInstitutions(res);
      setIsLoading(false);
    })();

    return () => {
      setIsLoading(true);
    };
  }, []);

  const handleClick = async (id: number, name: string) => {
    navigate(`institutions/${id}/${name}`);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {isLoading ? (
          <>loading institutions</>
        ) : (
          institutions.sort().map((inst) => {
            return (
              <div
                id={inst.institution_id.toString()}
                key={inst.institution_id}
                onClick={() => {
                  handleClick(inst.institution_id, inst.institution_name);
                }}
              >
                {inst.institution_name} - {inst.institution_place}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Institutuions;
