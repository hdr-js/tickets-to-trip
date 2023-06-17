import { City, Ticket } from "../types";

const getStartOfTheTrip = (cityMap: Map<City, City>): string | undefined => {
  const destinationCities = new Set(cityMap.values());

  for (const potentialSourceCity of cityMap.keys()) {
    if (!destinationCities.has(potentialSourceCity)) {
      return potentialSourceCity;
    }
  }

  return undefined;
};

const restoreTripFromTickets = (tickets: Ticket[]): string => {
  // 1. A map to hold on to the all the tickets, i.e. <sourceCity, destinationCity>
  const allTickets = new Map<City, City>();

  // 2. iterate through tickets and populate the map
  for (const { source, destination } of tickets) {
    allTickets.set(source, destination);
  }

  // 3. Find the start fo the trip
  let current: string | undefined = getStartOfTheTrip(allTickets);
  const trip: (City | undefined)[] = [current];

  // 4. iterate the tickets from starting city and populate trip
  while (current) {
    current = allTickets.get(current);
    trip.push(current);
  }

  return trip.join(",");
};

export default restoreTripFromTickets;
