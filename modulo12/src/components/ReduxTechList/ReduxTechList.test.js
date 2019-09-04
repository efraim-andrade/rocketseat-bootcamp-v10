import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import { addTechs } from "../../store/modules/techs/actions";

import TechList from "./index";

jest.mock("react-redux");

describe("<ReduxTechList />", () => {
  it("should render tech list", () => {
    useSelector.mockImplementation(state =>
      state({
        techs: ["Node.js", "ReactJS"]
      })
    );

    const { getByTestId, getByText } = render(<TechList />);

    expect(getByTestId("tech-list")).toContainElement(getByText("ReactJS"));
    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
  });

  it("should be able to add new tech", () => {
    const { getByTestId, getByLabelText } = render(<TechList />);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(dispatch).toHaveBeenCalledWith(addTechs("Node.js"));
  });
});
