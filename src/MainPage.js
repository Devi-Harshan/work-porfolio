import { useNavigate } from "react-router-dom";
import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import "./App.css";
const MainPage = () => {
  const navigate = useNavigate();

  const obj = [
    {
      id: 1,
      name: "Current Converter",
    },
    {
      id: 2,
      name: "Format Number",
    },
    {
      id: 3,
      name: "Lazy Load Data",
    },
    {
      id: 4,
      name: "Counter",
    },
    {
      id: 5,
      name: "DropDown",
    },
    {
      id: 6,
      name: "Parent Child",
    },
    {
      id: 7,
      name: "Letter Tiles",
    },
    {
      id: 8,
      name: "ProgressBar",
    },
    {
      id: 9,
      name: "Swap List",
    },
  ];
  return (
    <SimpleGrid minChildWidth="120px" spacing="40px" padding={4}>
      {obj.map((item) => {
        return (
          <Box
            as="button"
            borderRadius="md"
            bg="tomato"
            color="white"
            px={0}
            height="80px"
          >
            <Button
              variant={"outlined"}
              size="sm"
              onClick={() => navigate(`/${item.id}`)}
            >
              {item.name}{" "}
            </Button>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default MainPage;
