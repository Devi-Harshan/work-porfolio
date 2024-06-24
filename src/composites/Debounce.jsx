import { Card, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
const GetDebounce = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Input value={debouncedValue} onChange={handleChange}></Input>
      </Card>
    </div>
  );
};

export default GetDebounce;
