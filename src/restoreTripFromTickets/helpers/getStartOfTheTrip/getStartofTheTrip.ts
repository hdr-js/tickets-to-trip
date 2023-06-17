import { City } from "../../../types";

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
