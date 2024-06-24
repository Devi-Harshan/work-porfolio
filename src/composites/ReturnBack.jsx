import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";
const ReturnBack = () => {
  const navigate = useNavigate();
  return (
    <Button className="w-50" marginLeft={"5rem"} onClick={() => navigate("/")}>
      Back
    </Button>
  );
};

export default ReturnBack;
