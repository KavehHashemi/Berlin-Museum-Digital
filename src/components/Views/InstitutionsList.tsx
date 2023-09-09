import { CompactInstitutionType } from "../../Types";
import InstitutionCard from "./InstitutionCard";
import { SimpleGrid } from "@mantine/core/";

type props = {
  isLoading: boolean;
  institutions: CompactInstitutionType[];
};

const InstitutionsList = ({ institutions, isLoading }: props) => {
  return (
    <SimpleGrid
      spacing="md"
      breakpoints={[
        { minWidth: "sm", cols: 2 },
        { minWidth: "md", cols: 3 },
        { minWidth: "lg", cols: 4 },
      ]}
    >
      {isLoading ? (
        <div>loading institutions</div>
      ) : (
        institutions.sort().map((inst, i) => {
          return <InstitutionCard institution={inst} key={i}></InstitutionCard>;
        })
      )}
    </SimpleGrid>
  );
};

export default InstitutionsList;
