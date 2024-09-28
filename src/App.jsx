import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { Button, Container, Section, Modal } from "./components";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Section>
      <Container title={"Java script 2.0 course"}>
        <Button btnName={"Java script"} toggleModal={toggleModal} />
        {isModalOpen && <Modal toggleModal={toggleModal} />}
      </Container>
    </Section>
  );
};

export default App;
