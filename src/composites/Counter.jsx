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
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  return (
    <Stack spacing="4" p={"10rem"}>
      <Card align={"center"} variant={"filled"}>
        <CardHeader>
          <Heading size="md">
            {" "}
            {"Counter "}
            {counter}
          </Heading>
        </CardHeader>
        <CardBody>
          <Button onClick={() => setCounter(counter + 1)}>{"Increment"}</Button>
          <Button onClick={() => setCounter(counter - 1)}>{"Decrement"}</Button>
        </CardBody>
      </Card>
      <Button className="w-50" onClick={() => navigate("/")}>
        Back
      </Button>
    </Stack>
  );
};

export default Counter;
