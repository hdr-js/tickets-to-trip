import { mockTickets } from "./mocks";
import restoreTripFromTickets from "./restoreTripFromTickets/restoreTripFromTickets";

console.table(mockTickets);

const trip = restoreTripFromTickets(mockTickets);

console.log("Restored Trip: => ", trip);
