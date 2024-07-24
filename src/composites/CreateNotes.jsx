import {
  Grid,
  GridItem,
  SimpleGrid,
  Card,
  Stack,
  Input,
  Textarea,
  Button,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import { useState } from "react";
const CreateNotes = () => {
  const initialValue = {
    id: 0,
    title: "",
    description: "",
  };
  const [value, setValue] = useState(initialValue);
  const [notes, setNotes] = useState([]);
  const handleChange = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(value);
  };

  const addNotes = (e) => {
    e.preventDefault();
    setNotes((prev) => [...prev, value]);
  };
  return (
    <Grid
      h="100%"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={4}
      boxShadow={"0px 5px 10px 0px #70f54f;"}
      bg="#2c2c2c"
    >
      <GridItem p={4} color="white">
        <Stack spacing={3}>
          <Input
            placeholder="medium size"
            size="md"
            name="title"
            onChange={(e) => handleChange(e)}
          />
          <Textarea
            placeholder="Here is a sample placeholder"
            size="sm"
            resize={"vertical"}
            name="description"
            onChange={(e) => handleChange(e)}
          />
          <Button variant="solid" bg="#70f54f" onClick={(e) => addNotes(e)}>
            {" "}
            Add Notes
          </Button>
        </Stack>
      </GridItem>

      {notes.length > 0 &&
        notes.map((note) => (
          <GridItem colSpan={1} p={4}>
            <Card
              boxShadow={"1px 3px 3px 0px #70f54f;"}
              bg="#a19c9c"
              color="white"
              p={4}
            >
              <CardHeader>{note.title}</CardHeader>
              <CardBody>{note.description}</CardBody>
            </Card>
          </GridItem>
        ))}
    </Grid>
  );
};

export default CreateNotes;
