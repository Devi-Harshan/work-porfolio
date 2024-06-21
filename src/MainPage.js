import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import "./App.css";
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div gap={4} className={"App main"}>
      <Button onClick={() => navigate("/1")}> Currency Converter</Button>
      <Button onClick={() => navigate("/2")}> Format Phone Number</Button>
      <Button onClick={() => navigate("/3")}> Lazy Load Data and Modal </Button>
      <Button onClick={() => navigate("/4")}> Counter </Button>
      <Button onClick={() => navigate("/5")}> DependentDropDown </Button>
      <Button onClick={() => navigate("/6")}>
        {" "}
        Parent Child Communication{" "}
      </Button>
    </div>
  );
};

export default MainPage;
