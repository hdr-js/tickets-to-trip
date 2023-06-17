import { City } from "../../../types";

/**
 * Return the start city from the all the tickets from where a path can be traversed.
 *
 * Used by restoreTripFromTickets
 *
 * @param  {Map<City, City>} cityMap    Map of all the tickets with source and destination as key, value pairs.
 * 
 * @return {string | undefined}         startCity => The start city or undefined if all the tickets are cyclic.
 */

const getStartOfTheTrip = (cityMap: Map<City, City>): string | undefined => {
  const destinationCities = new Set(cityMap.values());

  for (const potentialSourceCity of cityMap.keys()) {
    if (!destinationCities.has(potentialSourceCity)) {
      return potentialSourceCity;
    }
  }

  return undefined;
};

export default getStartOfTheTrip;
