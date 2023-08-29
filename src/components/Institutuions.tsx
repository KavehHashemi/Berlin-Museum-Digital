import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { CompactInstitutionType, EntityType, FetchParamsType } from "../Types";
import { fetchEntity } from "../utils";
import InstitutionsList from "./Views/InstitutionsList";

const Institutuions = () => {
  const [institutions, setInstitutions] = useState<CompactInstitutionType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const navigate = useNavigate();

  const params: FetchParamsType = {
    city: "berlin",
    type: EntityType.institutions,
  };

  useEffect(() => {
    (async () => {
      const res = await fetchEntity<CompactInstitutionType[]>(params);
      setInstitutions(res);
      setIsLoading(false);
    })();
    return () => {
      setIsLoading(true);
    };
  }, []);

  // const handleClick = async (id: number, name: string) => {
  //   navigate(`institutions/${id}/${name}`);
  // };

  return (
    <InstitutionsList
      institutions={institutions}
      isLoading={isLoading}
    ></InstitutionsList>
    // <div style={{ display: "flex" }}>
    //   <div style={{ display: "flex", flexDirection: "column" }}>
    //     {isLoading ? (
    //       <>loading institutions</>
    //     ) : (
    //       institutions.sort().map((inst) => {
    //         return (
    //           <div
    //             id={inst.institution_id.toString()}
    //             key={inst.institution_id}
    //             onClick={() => {
    //               handleClick(inst.institution_id, inst.institution_name);
    //             }}
    //           >
    //             {inst.institution_name} - {inst.institution_place}
    //           </div>
    //         );
    //       })
    //     )}
    //   </div>
    // </div>
  );
};

export default Institutuions;
