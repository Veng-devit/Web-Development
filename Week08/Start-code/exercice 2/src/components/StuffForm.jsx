import { useState } from "react";

export default function StuffForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input
        type="search"
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Stuff price</p>
      <input
        type="search"
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="button" onClick={() => onSubmit(name, Number(price))}>
        Add Stuff
      </button>
    </form>
  );
}