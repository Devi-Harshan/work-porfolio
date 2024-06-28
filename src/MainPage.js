import { useNavigate } from "react-router-dom";
import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import "./App.css";
const MainPage = () => {
  const navigate = useNavigate();

  const obj = [
    /*  {
      id: 10,
      name: "Weather App",
    }, */
    {
      id: 1,
      name: "Currency Converter",
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
    <SimpleGrid
      minChildWidth="240px"
      spacing="20px"
      padding={4}
      style={{
        backgroundColor: "#2c2c2c",
        height: "100vh",
        padding: "1rem",
      }}
    >
      {obj.map((item) => {
        return (
          <Box
            as="button"
            onClick={() => navigate(`/${item.id}`)}
            borderRadius="md"
            color="white"
            px={0}
            height="150px"
            boxShadow={"0px 5px 10px 0px #70f54f;"}
          >
            <Button variant={"outlined"} size="sm">
              {item.name}{" "}
            </Button>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default MainPage;
