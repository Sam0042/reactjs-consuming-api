import { useState } from "react";

const GameAngka = () => {
  const [angka, setAngka] = useState(0);

  return (
    <div>
      <h1>GAME ANGKA</h1>
      <h2>Angka: {angka}</h2>
      <button
        onClick={() => {
          setAngka(angka + 1);
        }}
      >
        klik biar nambah
      </button>
    </div>
  );
};

export default GameAngka;
