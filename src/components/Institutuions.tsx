import { useContext, useEffect, useState } from "react";
import { CompactInstitutionType, EntityType, FetchParamsType } from "../Types";
import { fetchEntity } from "../utils";
import InstitutionsList from "./Views/InstitutionsList";
import { PathDispatchContext } from "../context";

const Institutuions = () => {
  const [institutions, setInstitutions] = useState<CompactInstitutionType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useContext(PathDispatchContext);
  const params: FetchParamsType = {
    city: "berlin",
    type: EntityType.institutions,
  };

  useEffect(() => {
    (async () => {
      const res = await fetchEntity<CompactInstitutionType[]>(params);
      setInstitutions(res);
      setIsLoading(false);
      if (dispatch) dispatch({ type: "clearAll" });
    })();
    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <InstitutionsList
      institutions={institutions}
      isLoading={isLoading}
    ></InstitutionsList>
  );
};

export default Institutuions;
