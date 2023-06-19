import { ERROR } from "../enums/errors";
import { City, Ticket } from "../types";
import getStartOfTheTrip from "./helpers/getStartOfTheTrip/getStartofTheTrip";

/**
 * Calculates and restores the trip from all the tickets prvided.
 *
 * @param  {Ticket []} tickets        List of tickets where a ticket has both source and destination cities.
 *
 * @return {string | null}       trip => A comma separated list of cities that follows the trip according to the tickets.
 */

const restoreTripFromTickets = (tickets: Ticket[]): string | null => {
  try {
    if (!tickets.length) {
      console.log(`ERROR:  => ${ERROR.NO_TICKETS}`);
      return null;
    }

    const allTickets = new Map<City, City>();

    for (const { source, destination } of tickets) {
      allTickets.set(source, destination);
    }

    const start: string | null = getStartOfTheTrip(allTickets);

    if (!start) {
      console.log(`ERROR:  => ${ERROR.FAILED_START}, ${ERROR.TICKETS_CYCLIC}`);

      return null;
    }

    const trip: City[] = [start];

    // undefined is only acceptable if it coming from Map.get(), see line 37.
    let current: City | null | undefined = start;

    while (current) {
      current = allTickets.get(current);
      if (current) {
        trip.push(current);
      }
    }

    return trip.join(", ");
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export default restoreTripFromTickets;
