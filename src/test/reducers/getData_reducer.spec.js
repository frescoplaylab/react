import getData from "../../reducers/getData_reducer.js";

describe("sent reducers", () => {
  let initialState = {};

  initialState.data = [{}];

  it("returns proper initial state", () => {
    expect(getData(undefined, {})).toEqual({});
  });

  it("REQUEST_DEVICE_DATA", () => {
    expect(
      getData(initialState, {
        type: "REQUEST_DATA"
      })
    ).toEqual({ data: [{}] });
  });

  it("RECEIVE_DATA", () => {
    var payload = {
      Task: "Pay EB Bill",
      done: false
    };

    expect(
      getData(initialState, {
        type: "RECEIVE_DATA",
        payload: payload
      })
    ).toEqual({
      data: { Task: "Pay EB Bill", done: false }
    });
  });
});