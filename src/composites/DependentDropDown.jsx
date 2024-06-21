import {
  Stack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DependentDropDown = () => {
  const navigate = useNavigate();

  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];

  const [selectCity, setSelectCity] = useState(countries[0].cities);
  const selectedField = (e) => {
    const x = countries.filter((val) => val.name.includes(e));
    setSelectCity(x[0].cities);
    console.log(e, x);
  };
  return (
    <Stack spacing="4" p={"10rem"}>
      <Card align={"center"} variant={"filled"}>
        <CardHeader>
          <Heading size="md">Dependent Drop Down</Heading>
        </CardHeader>
        <CardBody gap={2}>
          <select onChange={(e) => selectedField(e.target.value)}>
            {countries.map((val, i) => {
              return (
                <option key={i} value={val.name}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </CardBody>
        <CardBody>
          {selectCity.length > 0 && (
            <select>
              {selectCity.map((e, i) => {
                return (
                  <option key={i} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          )}
        </CardBody>
      </Card>
      <Button className="w-50" onClick={() => navigate("/")}>
        Back
      </Button>
    </Stack>
  );
};

export default DependentDropDown;
