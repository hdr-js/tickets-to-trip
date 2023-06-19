import { City, Ticket } from "../../../types";
import getStartOfTheTrip from "./getStartofTheTrip";

describe("getStartOfTheTrip", () => {
  const aCyclicTicketMap: Map<City, City> = new Map([
    ["cityD", "cityB"],
    ["cityB", "cityC"],
    ["cityC", "cityA"],
  ]);

  const cyclicTicketMap: Map<City, City> = new Map([
    ["cityA", "cityB"],
    ["cityB", "cityC"],
    ["cityC", "cityA"],
  ]);

  const emptyMap: Map<City, City> = new Map([]);

  it("should return the starting city when it exists", () => {
    expect(getStartOfTheTrip(aCyclicTicketMap)).toEqual("cityD");
  });

  it("should return null if all tickets are cyclic", () => {
    expect(getStartOfTheTrip(cyclicTicketMap)).toBeNull();
  });

  it("should return null if there are no tickets", () => {
    expect(getStartOfTheTrip(emptyMap)).toBeNull();
  });
});
