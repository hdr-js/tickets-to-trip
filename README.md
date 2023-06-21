# tickets-to-trip
A solution that restores a full trip from a set of scrambled tickets. 

## Problem

One travel agency faced a problem with a corrupted database, containing customer's trips. The IT department was able to recover tickets linked to specific users.

Unfortunately, tickets contain only source and destination countries without any other information. Help travel agency to restore original trips for specific users.

## Solution

### Data Structure

  Given is a list of tickets, where a ticket is as follows:
  ```typescript
  type Ticket = {
    source: string;
    destination: string;
  }
  ```
### Required Result

The solution provides a list of comma-separated cities, showing the restored trip. 


### Assumptions

- There can be no tickets on the list
  - In case there are no tickets, the solution provides a meaningful error message and returns `null`.
- It is possible that all the tickets result in a cyclic path
  - If the tickets are provided in such a way that it forms a cycle, then there is no way we can find a starting city, so the solution will return `null` and print a meaningful error message for the situation. 
- If there are multiple trips that can be restored, the solution will track the path, from the first found starting city.
  - There is a possibility the tickets are provided in such a way that we can have multiple starting cities, then the solution will only work on the trip that starts with the city found first in the tickets. 
  - [IMPROVEMENT] If we want all the trips that can be found, we can convert this solution very easily. Instead of finding one starting city, the solution find all starting cities and then will find multiple trips and print results.
 
### Implementation
The whole implementation of this solution is divided into 4 steps.

  1. Put all the tickets on a Map, the source city will be the key and the destination will be a value. This makes it easy for us to search, get and traverse through the tickets.
  2. Find the starting location by seeing, which source city is not a destination city in all the tickets. To find that we get all the destination cities and put them in a Set and then traverse through the Map and see if there is a starting city that doesn't exist in the Set of distinct destination cities. ([IMPROVEMMENT] if found multiple starting cities, it will return only the first found city, if we need to return multiple it will populate a list of starting cities). This will return a `null` if all tickets are cyclic and there is no way to find a starting city. 
  3. Traverse through the Map in sequence to find the destination of the starting city, putting it into the trip sequence and then making this a source city for the next iteration and so on. This will result in a list with the cities of the trip in sequence.
  4. Convert this list of cities into a string having cities separated with commas. 

### Time and Space Complexity.
The current solution has both the time and space complexity of O(N). A lot of help came from using Map and Set for traversals.

### Tech Stack
  - Development: TypeScript, ES6
  - Testing: Jest
  - Packaging and Running: npm

### Installation and Demo

1. Clone or download as zip
2. Install it via npm:

```bash
npm install 
```

3. Run it via:

```bash
npm run dev
```

4. Test it via:

```bash
npm test
```

### Closure
This README file provides an overview of the "tickets-to-trip" library, its installation, usage examples, API documentation, and information about contributing. It aims to guide users and developers in understanding and using the library effectively.

If you have any questions or need further assistance, please feel free to reach out or open an issue on the GitHub repository.

Happy Reviewing! :)
