import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ConvertCurrency from "./composites/ConvertCurrency";
import PhoneNumberInput from "./composites/PhoneNumberInput";
import CardData from "./composites/Card/card";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./theme";
import Counter from "./composites/Counter";
import DependentDropDown from "./composites/DependentDropDown";

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
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default AppRoutes;
