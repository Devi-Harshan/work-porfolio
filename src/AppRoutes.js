import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import CardData from "./composites/Card/card";
import ConvertCurrency from "./composites/ConvertCurrency";
import Counter from "./composites/Counter";
import DependentDropDown from "./composites/DependentDropDown";
import { LetterTiles } from "./composites/LetterTiles";
import PhoneNumberInput from "./composites/PhoneNumberInput";
import ProgressBar from "./composites/ProgressBar";
import SwapContent from "./composites/SwapContent";
import Weather from "./composites/Weather/WeatherApp";
import { Application } from "./composites/phoneBook";
import { theme } from "./theme";

const AppRoutes = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route index element={<MainPage />} />
          <Route path="/1" element={<ConvertCurrency />} />
          <Route path="/2" element={<PhoneNumberInput />} />
          <Route path="/3" element={<CardData />} />
          <Route path="/4" element={<Counter />} />
          <Route path="/5" element={<DependentDropDown />} />
          <Route path="/6" element={<Application />} />
          <Route path="/7" element={<LetterTiles />} />
          <Route path="/8" element={<ProgressBar />} />
          <Route path="/9" element={<SwapContent />} />
          <Route path="/10" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default AppRoutes;
