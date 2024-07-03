/* eslint-disable no-debugger */
import { useContext, useEffect, useState } from "react";
import { CompactInstitutionType, EntityType, FetchParamsType } from "../Types";
import { fetchEntity } from "../utils";
import InstitutionsList from "../components/Institution/InstitutionsList";
import { CityContext, PathDispatchContext } from "../context";
import { Flex } from "@mantine/core";
import Search from "../components/Search";

const City = () => {
  const [institutions, setInstitutions] = useState<CompactInstitutionType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useContext(PathDispatchContext);
  const currentCity = useContext(CityContext);
  const params: FetchParamsType = {
    city: currentCity,
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
  }, [currentCity]);

  return (
    <Flex direction="column">
      <Search></Search>
      <InstitutionsList
        institutions={institutions}
        isLoading={isLoading}
      ></InstitutionsList>
    </Flex>
  );
};

export default City;
