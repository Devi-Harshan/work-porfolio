import { Card, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDebounce} from "../hooks/useDebounce"
const GetDebounce = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Input value={value} onChange={handleChange}></Input>
      </Card>
      <Button onClick={() => navigate("/")}>Back</Button>
    </div>
  );
};

export default GetDebounce;
