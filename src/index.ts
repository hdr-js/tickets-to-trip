import { demoTickets } from "./mocks";
import restoreTripFromTickets from "./restoreTripFromTickets/restoreTripFromTickets";

console.log("Tickets: ");
console.table(demoTickets);

const trip = restoreTripFromTickets(demoTickets);

console.log("Restored Trip: => ", trip);
