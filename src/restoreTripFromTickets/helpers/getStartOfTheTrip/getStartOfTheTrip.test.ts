import {
  testTicketsMapACyclic,
  testTicketsMapCyclic,
  testTicketsMapEmpty,
} from "../../../mocks";

import getStartOfTheTrip from "./getStartofTheTrip";

describe("getStartOfTheTrip", () => {
  it("should return the starting city when it exists", () => {
    expect(getStartOfTheTrip(testTicketsMapACyclic)).toEqual("cityD");
  });

  it("should return null if all tickets are cyclic", () => {
    expect(getStartOfTheTrip(testTicketsMapCyclic)).toBeNull();
  });

  it("should return null if there are no tickets", () => {
    expect(getStartOfTheTrip(testTicketsMapEmpty)).toBeNull();
  });
});
