import { Card, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
const PhoneNumberInput = () => {
  const [value, setValue] = useState("");

  const formatNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const code = phoneNumber.slice(0, 3);
    const middle = phoneNumber.slice(3, 6);
    const last = phoneNumber.slice(6, 10);
    return `(${code})${middle}-${last}`;
  };
  const handleChange = (e) => {
    const formattedNumber = formatNumber(e.target.value);
    setValue(formattedNumber);
  };
  return (
    <Stack spacing="4" p={"10rem"} backgroundColor="#2c2c2c" h={"100vh"}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Input value={value} onChange={handleChange}></Input>
      </Card>
    </Stack>
  );
};

export default PhoneNumberInput;
