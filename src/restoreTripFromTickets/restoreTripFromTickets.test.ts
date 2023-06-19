import { Ticket } from "../types";
import restoreTripFromTickets from "./restoreTripFromTickets";

describe("restoreTripFromTickets", () => {
  const aCyclicTickets: Ticket[] = [
    { source: "cityA", destination: "cityB" },
    { source: "cityB", destination: "cityC" },
    { source: "cityC", destination: "cityD" },
  ];

  const cyclicTickets: Ticket[] = [
    { source: "cityA", destination: "cityB" },
    { source: "cityB", destination: "cityA" },
  ];

  const noTickets: Ticket[] = [];

  it("should return the restored trip as a string", () => {
    const restoredTrip = restoreTripFromTickets(aCyclicTickets);

    expect(restoredTrip).toBe("CityA, CityB, CityC, CityD");
  });

  it("should return null when starting city cannot be determined", () => {
    const restoredTrip = restoreTripFromTickets(cyclicTickets);

    expect(restoredTrip).toBeNull();
  });

  it("should return null when no tickets are provided", () => {
    const restoredTrip = restoreTripFromTickets(noTickets);

    expect(restoredTrip).toBeNull();
  });
});
