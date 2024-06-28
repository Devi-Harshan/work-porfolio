import React, { useCallback, useMemo, useState } from "react";
import { Stack } from "@chakra-ui/react";

const style = {
  letterContainer: {
    overflow: "auto",
    marginBottom: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  letter: {
    float: "left",
    padding: "20px 20px",
    boxShadow: "0px 5px 10px 0px #70f54f",
    borderRadius: "5px",
    marginRight: "5px",
    marginTop: "5px",
    cursor: "pointer",
  },
  outputString: {
    marginTop: "20px",
    textAlign: "center",
  },
};

const Tile = ({ letter, outputArray, setOutputArray, tally, setTally }) => {
  const onClick = useCallback(() => {
    if (!tally[letter]) {
      setTally({ ...tally, [letter]: 1 });
      setOutputArray([...outputArray, letter]);
    } else if (tally[letter] && tally[letter] === 2) {
      setTally({ ...tally, [letter]: 0 });
      const slicedArray = outputArray.slice(0, outputArray.length - 2);
      setOutputArray([...slicedArray, "_"]);
    } else {
      setTally({ ...tally, [letter]: tally[letter] + 1 });
      setOutputArray([...outputArray, letter]);
    }
  }, [letter, outputArray, setOutputArray, tally, setTally]);

  return (
    <button type="button" onClick={onClick} style={style.letter}>
      {letter}
    </button>
  );
};

export const LetterTiles = () => {
  const [outputArray, setOutputArray] = useState([]);
  const [tally, setTally] = useState({});
  const alphabetArray = useMemo(() => {
    const arr = [];
    for (let i = 65; i <= 90; i++) {
      const char = String.fromCharCode(i);
      arr.push(char);
    }
    return arr;
  }, []);
  return (
    <Stack h={"100%"} p={"10rem"} bg="#2c2c2c" color="white">
      <section>
        <aside style={style.letterContainer} id="letterContainer">
          {alphabetArray.map((letter, index) => (
            <Tile
              tally={tally}
              setTally={setTally}
              letter={letter}
              key={index}
              outputArray={outputArray}
              setOutputArray={setOutputArray}
            />
          ))}
        </aside>
        <div style={style.outputString} id="outputString">
          {outputArray.join("")}
        </div>
      </section>
    </Stack>
  );
};
