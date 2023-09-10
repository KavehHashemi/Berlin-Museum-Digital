import { Card } from "@mantine/core";
import { CompactInstitutionType } from "../../Types";
import { useNavigate } from "react-router-dom";

type props = {
  institution: CompactInstitutionType;
};
const InstitutionCard = ({ institution }: props) => {
  const navigate = useNavigate();
  const handleClick = (id: number, name: string) => {
    navigate(`institutions/${id}/${name}`);
  };
  return (
    <Card
      id={institution.institution_id.toString()}
      key={institution.institution_id}
      onClick={() => {
        handleClick(institution.institution_id, institution.institution_name);
      }}
    >
      {institution.institution_name} - {institution.institution_place}
    </Card>
  );
};

export default InstitutionCard;
