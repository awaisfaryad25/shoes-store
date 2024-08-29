import { useState } from "react";

import "./App.css";
import ShoesCard from "./Components/ShoesCard/ShoesCard";
import ManModal from "./Components/ManModal/ManModal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="manShoes">
          <ShoesCard />
        <div className="modal">
          <ManModal />
        </div>
      </section>
      <section></section>
    </>
  );
}

export default App;
