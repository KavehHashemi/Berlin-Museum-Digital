import React from "react";
import { CompactInstitutionType } from "../../Types";
import { useNavigate } from "react-router-dom";
type props = {
  institution: CompactInstitutionType;
};
const InstitutionCard = ({ institution }: props) => {
  const navigate = useNavigate();
  const handleClick = async (id: number, name: string) => {
    navigate(`institutions/${id}/${name}`);
  };
  return (
    <div
      style={{ backgroundColor: "#000055" }}
      id={institution.institution_id.toString()}
      key={institution.institution_id}
      onClick={() => {
        handleClick(institution.institution_id, institution.institution_name);
      }}
    >
      {institution.institution_name} - {institution.institution_place}
    </div>
  );
};

export default InstitutionCard;
