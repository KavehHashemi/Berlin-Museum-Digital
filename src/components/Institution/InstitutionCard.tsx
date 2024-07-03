import { Badge, Card, Group, Text } from "@mantine/core";
import { CityNames, CompactInstitutionType } from "../../Types";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CityContext } from "../../context";

type props = {
  institution: CompactInstitutionType;
};

const InstitutionCard = ({ institution }: props) => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const currentCity = useContext(CityContext);
  const city = CityNames[currentCity as keyof typeof CityNames];

  useEffect(() => {
    try {
      const a = `https://${city}.museum-digital.de/${institution.institution_image}`;
      if (a) setImgUrl(a);
    } catch (error) {
      console.log(error);
    }
  }, [institution]);

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
            //src={`https://${city}.museum-digital.de/data/${city}/${institution.institution_image}`}
            src={imgUrl}
            height={128}
            loading="lazy"
            alt={institution.institution_name}
          ></img>
        ) : (
          <img
            src={`https://${city}.museum-digital.de/db_images_gestaltung/mdlogo-128px.png`}
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
