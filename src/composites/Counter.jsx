import {
  Stack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Stack spacing="4" p={"10rem"}>
      <Card
        align={"center"}
        boxShadow={"0px 5px 10px 0px #70f54f;"}
        bg="#2c2c2c"
        color="white"
      >
        <CardHeader>
          <Heading size="md">
            {" "}
            {"Counter "}
            {counter}
          </Heading>
        </CardHeader>
        <CardBody>
          <ButtonGroup spacing={4}>
            <Button
              bg="#70f54f"
              onClick={() => setCounter(counter + 1)}
              gap="1rem"
            >
              {"Increment"}
            </Button>
            <Button bg="#70f54f" onClick={() => setCounter(counter - 1)}>
              {"Decrement"}
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default Counter;
