import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTechs } from "../../store/modules/techs/actions";

export default function ReduxTechList() {
  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);

  const [newTech, setNewTech] = useState("");

  function handleAddTech() {
    dispatch(addTechs(newTech));
    setNewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />

      <button onClick={handleAddTech} type="submit">
        Adicionar
      </button>
    </form>
  );
}
