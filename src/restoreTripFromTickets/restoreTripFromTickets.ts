import { City, Ticket } from "../types";
import getStartOfTheTrip from "./helpers/getStartOfTheTrip/getStartofTheTrip";

/**
 * Calculates and restores the trip from all the tickets prvided.
 *
 * @param  {Ticket []} tickets        List of tickets where a ticket has both source and destination cities.
 *
 * @return {string | undefined}       trip => A comma separated list of cities that follows the trip according to the tickets.
 */

const restoreTripFromTickets = (tickets: Ticket[]): string => {
  const allTickets = new Map<City, City>();

  for (const { source, destination } of tickets) {
    allTickets.set(source, destination);
  }

  let current: string | undefined = getStartOfTheTrip(allTickets);
  const trip: (City | undefined)[] = [current];

  while (current) {
    current = allTickets.get(current);
    trip.push(current);
  }

  return trip.join(",");
};

export default restoreTripFromTickets;
