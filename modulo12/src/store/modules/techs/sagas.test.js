import { runSaga } from "redux-saga";
import { getTechs } from "./sagas";
import { getTechsSuccess } from "./actions";

describe("<Techs /> (Sagas)", () => {
  it("should be able to fetch techs", async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess("Node.js"));
  });
});
