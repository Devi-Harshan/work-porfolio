import { Card, CardBody, CardHeader, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";
const DependentDropDown = () => {
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
      <Card
        align={"center"}
        boxShadow={"0px 5px 10px 0px #70f54f;"}
        bg="#2c2c2c"
      >
        <CardHeader>
          <Heading size="md" color="white">
            Dependent Drop Down
          </Heading>
        </CardHeader>
        <CardBody gap={2}>
          <select onChange={(e) => selectedField(e.target.value)}>
            {countries.map((val, i) => {
              return (
                <option style={{ color: "black" }} key={i} value={val.name}>
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
    </Stack>
  );
};

export default DependentDropDown;
