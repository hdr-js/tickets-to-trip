import { ERROR } from "../../../enums/errors";
import { City } from "../../../types";

/**
 * Return the start city from the all the tickets from where a path can be traversed.
 *
 * Used by restoreTripFromTickets
 *
 * @param  {Map<City, City>} cityMap    Map of all the tickets with source and destination as key, value pairs.
 *
 * @return {City | null}         startCity => The start city or undefined if all the tickets are cyclic.
 */

const getStartOfTheTrip = (cityMap: Map<City, City>): City | null => {
  try {
    const destinationCities = new Set(cityMap.values());

    for (const potentialSourceCity of cityMap.keys()) {
      if (!destinationCities.has(potentialSourceCity)) {
        return potentialSourceCity;
      }
    }

    return null;
  } catch (error) {
    console.error(`ERROR:  => ${ERROR.FAILED_START}, ${ERROR.UNKNOWN_ERROR}`);

    throw error;
  }
};

export default getStartOfTheTrip;
