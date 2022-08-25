// components
import { useState } from "react";
import { Header, Modal } from "../../components";

export const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <Modal useModal={[modalIsOpen, setModalIsOpen]}>Modal</Modal>
      <button onClick={() => setModalIsOpen(true)}>OpenModal</button>
    </div>
  );
};
