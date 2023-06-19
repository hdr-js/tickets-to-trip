import {
  demoTicketsACyclic,
  demoTicketsCyclic,
  demoTicketsEmpty,
} from "./mocks";
import restoreTripFromTickets from "./restoreTripFromTickets/restoreTripFromTickets";

// Demo with Acyclic Tickets
console.log("=======================================");
console.log("\nDemo 1: (Acyclic)\n");
console.log("Tickets: ");
console.table(demoTicketsACyclic);

const aCyclicTrip = restoreTripFromTickets(demoTicketsACyclic);
console.log("\nRestored Trip: => ", aCyclicTrip, "\n");
console.log("=======================================");

// Demo with Cyclic Tickets
console.log("\nDemo 2: (Cyclic)\n");
console.log("Tickets: ");
console.table(demoTicketsCyclic);

const cyclicTrip = restoreTripFromTickets(demoTicketsCyclic);
console.log("\nRestored Trip: => ", cyclicTrip, "\n");
console.log("=======================================");

// Demo with No Tickets
console.log("\nDemo 3: (Empty)\n");
console.log("Tickets: ");
console.table(demoTicketsEmpty);

const trip = restoreTripFromTickets(demoTicketsEmpty);
console.log("\nRestored Trip: => ", trip, "\n");
console.log("=======================================");
