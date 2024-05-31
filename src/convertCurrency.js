import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Image,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const ConvertCurrency = () => {
  const options = [
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "EUR",
    "GBP",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JPY",
    "KRW",
    "MXN",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "RUB",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "USD",
    "ZAR",
  ];
  const [value, setValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState();
  const defaultOption = options[0];
  const [fromValue, setFromValue] = useState(defaultOption);
  const [toValue, setToValue] = useState(defaultOption);

  const convert = () => {
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_GahzAFYxB8SpvvpoGyDWjrOJWDAigmGihllP6mey&currencies=${toValue}&base_currency=${fromValue}`
    )
      .then(function (serverPromise) {
        serverPromise
          .json()
          .then(function (j) {
            console.log(j.data[toValue]);
            setConvertedValue(value * j.data[toValue]);
          })
          .catch(function (e) {
            console.log(e);
          });
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "400px" }}
        src="./currency.png"
        alt="Currency"
      />

      <Stack>
        <CardBody gap={1}>
          <Heading size="md">Currency Converter</Heading>

          <Grid templateColumns="repeat(5, 1fr)" gap={4} py={4}>
            <GridItem colSpan={2} h="10">
              <NumberInput
                inputMode="numeric"
                border={1}
                borderColor={"#ccc"}
                onChange={(valueString) => setValue(valueString)}
                value={value}
                max={50}
              >
                <NumberInputField />
              </NumberInput>
            </GridItem>
            <GridItem colSpan={1} h="10">
              {" "}
              <Dropdown
                style={{ borderRadius: "0.375rem" }}
                options={options}
                value={defaultOption}
                onChange={(value) => setFromValue(value.value)}
                placeholder="Select an option"
              />
            </GridItem>

            <GridItem
              colSpan={1}
              h="10"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>To</Text>
            </GridItem>
            <GridItem colSpan={1} h="10">
              <Dropdown
                options={options}
                value={defaultOption}
                onChange={(value) => setToValue(value.value)}
                placeholder="Select an option"
              />
            </GridItem>
          </Grid>
          <Text>
            {convertedValue === undefined
              ? `Converted value ${value}  ${fromValue} =  ? ${toValue} `
              : `Converted value ${value}  ${fromValue} =${convertedValue} ${toValue} `}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue" onClick={convert}>
            Convert
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ConvertCurrency;
