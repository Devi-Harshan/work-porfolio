import { Button, Stack } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);

  const increaseProgress = useCallback(() => {
    setStart(true);
    for (let i = progress; i < 100; i++) {
      setTimeout(() => {
        setProgress(progress + 10);
      }, 1000);
    }
  }, [progress]);
  const clear = () => {
    setProgress(0);
    setStart(false);
  };

  useEffect(() => {
    if (start) increaseProgress();
  }, [start, increaseProgress]);
  return (
    <Stack spacing="4" py={"10rem"} backgroundColor="#2c2c2c" h={"100vh"}>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          padding: "5rem",
          gap: "1rem",
          width: "75%",
        }}
      >
        <div
          style={{
            height: "5vh",
            width: "100%",
            backgroundColor: "grey",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "5vh",
              width: progress ? progress + "%" : "0%",
              backgroundColor: "green",
              borderRadius: "20px",
              position: "absolute",
            }}
          >
            <div
              style={{
                height: "100%",
                color: "white",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {`${progress}%`}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Button bg="#70f54f" onClick={increaseProgress}>
            Start
          </Button>
          <Button bg="#70f54f" onClick={clear}>
            Clear
          </Button>
        </div>
      </div>
    </Stack>
  );
};
export default ProgressBar;
