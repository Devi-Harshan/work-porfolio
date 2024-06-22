import { useState } from "react";

import { Text, List, Checkbox, Stack, Button } from "@chakra-ui/react";
const SwapContent = () => {
  const [list1, setList1] = useState([
    {
      id: "List1",
      checked: false,
    },
    {
      id: "List2",
      checked: false,
    },
    {
      id: "List3",
      checked: false,
    },
    {
      id: "List4",
      checked: false,
    },
  ]);
  const [list2, setList2] = useState([
    {
      id: "Value1",
    },
    {
      id: "Value2",
    },
    {
      id: "Value3",
    },
    {
      id: "Value4",
    },
  ]);

  const handleChange = (index) => {
    const updatedList1 = [...list1];
    updatedList1[index].checked = !updatedList1[index].checked;

    setList1(updatedList1);
    console.log(updatedList1);
  };
  const handleSwap = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];
    updatedList1.forEach((e, index) => {
      if (e.checked) {
        let temp = updatedList1[index].id;
        updatedList1[index].id = updatedList2[index].id;
        updatedList2[index].id = temp;
      }
    });

    setList1(updatedList1);
    setList2(updatedList2);
  };
  return (
    <Stack spacing="4" p={"10rem"}>
      <Text spacing={4}>Lets swap the list items checked</Text>

      <div style={{ display: "flex", flexDirection: "row", gap: "5rem" }}>
        <List>
          {list1.map((item, index) => (
            <li key={index}>
              <Checkbox
                isChecked={item.checked}
                onChange={() => handleChange(index)}
              ></Checkbox>
              <span>{item.id}</span>
            </li>
          ))}
        </List>

        <List>
          {list2.map((item, index) => (
            <li key={index}>
              <span>{item.id}</span>
            </li>
          ))}
        </List>
      </div>

      <Button onClick={handleSwap}>Swap the checked list items </Button>
    </Stack>
  );
};

export default SwapContent;
