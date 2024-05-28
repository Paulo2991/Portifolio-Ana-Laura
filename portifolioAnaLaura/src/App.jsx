import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyled } from "./components/Header/header-styled";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
