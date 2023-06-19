import { ERROR } from "./enums/errors";
import { mockTickets } from "./mocks";
import restoreTripFromTickets from "./restoreTripFromTickets/restoreTripFromTickets";

console.table(mockTickets);

const trip = restoreTripFromTickets(mockTickets);

if (trip) {
  console.log("Restored Trip: => ", trip);
}
