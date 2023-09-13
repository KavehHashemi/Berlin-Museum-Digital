import { Badge, Card, Group, Text } from "@mantine/core";
import { CompactInstitutionType } from "../../Types";
import { useNavigate } from "react-router-dom";

type props = {
  institution: CompactInstitutionType;
};

const InstitutionCard = ({ institution }: props) => {
  const navigate = useNavigate();
  const handleClick = (id?: number, name?: string) => {
    navigate(`institutions/${id}/${name}`);
  };
  return (
    <Card
      variant="institution"
      id={institution.institution_id?.toString()}
      key={institution.institution_id}
      onClick={() => {
        handleClick(institution.institution_id, institution.institution_name);
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {institution.institution_image ? (
          <img
            src={`https://berlin.museum-digital.de/data/berlin/${institution.institution_image}`}
            height={128}
            alt={institution.institution_name}
          ></img>
        ) : (
          <img
            src={
              "https://berlin.museum-digital.de/db_images_gestaltung/mdlogo-128px.png"
            }
          ></img>
        )}
      </div>
      <Text my={8}>{institution.institution_name}</Text>
      <Group>
        <Badge color="blue">
          {institution.institution_collections} Collections
        </Badge>
        <Badge color="cyan">{institution.institution_objects} Objects</Badge>
      </Group>
    </Card>
  );
};

export default InstitutionCard;
