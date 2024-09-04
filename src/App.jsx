import { useState } from "react";
import "./App.css";
import ShoesCard from "./Components/ShoesCard/ShoesCard";
import ManModal from "./Components/ManModal/ManModal";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="manShoes">
          <ShoesCard openModal={openModal}/>
        <div className="modal">
          <ManModal isOpen={isModalOpen} closeModal={closeModal} className=""/>
        </div>
      </section>
      <section></section>
    </>
  );
}

export default App;
