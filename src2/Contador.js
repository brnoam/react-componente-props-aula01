import React, { useState } from "react";

export default function Contador() {
  const [num, setNum] = useState(0);
  const [nome, setNome] = useState("clau");

  return (
    <div>
      <p> Contador {num}</p>
      <button onClick={() => setNum(num + 5)}>Mais 5</button>
      <br /> <br />
      <button onClick={() => setNum(num - 3)}>Menos 3</button>
      <br /> <br />
    
    </div>
  );
}