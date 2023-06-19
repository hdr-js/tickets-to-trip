import {
  testTicketsACyclic,
  testTicketsCyclic,
  testTicketsEmpty,
} from "../mocks";

import restoreTripFromTickets from "./restoreTripFromTickets";

describe("restoreTripFromTickets", () => {
  it("should return the restored trip as a string", () => {
    const restoredTrip = restoreTripFromTickets(testTicketsACyclic);

    expect(restoredTrip).toBe("cityA, cityB, cityC, cityD");
  });

  it("should return null when starting city cannot be determined", () => {
    const restoredTrip = restoreTripFromTickets(testTicketsCyclic);

    expect(restoredTrip).toBeNull();
  });

  it("should return null when no tickets are provided", () => {
    const restoredTrip = restoreTripFromTickets(testTicketsEmpty);

    expect(restoredTrip).toBeNull();
  });
});
