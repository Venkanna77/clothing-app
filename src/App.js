import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignTn from "./routes/signin/sign-in.component";

const Shop = () => {
  return <div>In Shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signIn" element={<SignTn />} />
      </Route>
    </Routes>
  );
};

export default App;
