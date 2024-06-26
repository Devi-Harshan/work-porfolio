import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ReturnBack = () => {
  const navigate = useNavigate();
  return (
    <Button className="w-50" marginLeft={"5rem"} onClick={() => navigate("/")}>
      Back
    </Button>
  );
};

export default ReturnBack;
