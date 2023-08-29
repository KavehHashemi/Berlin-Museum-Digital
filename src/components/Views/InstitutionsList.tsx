import { CompactInstitutionType } from "../../Types";
import InstitutionCard from "./InstitutionCard";

type props = {
  isLoading: boolean;
  institutions: CompactInstitutionType[];
};

const InstitutionsList = ({ institutions, isLoading }: props) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {isLoading ? (
          <>loading institutions</>
        ) : (
          institutions.sort().map((inst, i) => {
            return (
              <InstitutionCard institution={inst} key={i}></InstitutionCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default InstitutionsList;
