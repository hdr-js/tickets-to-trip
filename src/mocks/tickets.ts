import { City, Ticket } from "../types";

// demo Data
export const demoTicketsACyclic: Ticket[] = [
  { source: "Amsterdam", destination: "Berlin" },
  { source: "Berlin", destination: "Stolkhom" },
  { source: "Paris", destination: "London" },
  { source: "London", destination: "Amsterdam" },
];
export const demoTicketsCyclic: Ticket[] = [
  { source: "Amsterdam", destination: "Berlin" },
  { source: "Berlin", destination: "Amsterdam" },
];
export const demoTicketsEmpty: Ticket[] = [];

// restoreTripFromTickets test data
export const testTicketsACyclic: Ticket[] = [
  { source: "cityA", destination: "cityB" },
  { source: "cityB", destination: "cityC" },
  { source: "cityC", destination: "cityD" },
];

export const testTicketsCyclic: Ticket[] = [
  { source: "cityA", destination: "cityB" },
  { source: "cityB", destination: "cityA" },
];

export const testTicketsEmpty: Ticket[] = [];

// restoreTripFromTickets test data
export const testTicketsMapACyclic: Map<City, City> = new Map([
  ["cityD", "cityB"],
  ["cityB", "cityC"],
  ["cityC", "cityA"],
]);

export const testTicketsMapCyclic: Map<City, City> = new Map([
  ["cityA", "cityB"],
  ["cityB", "cityC"],
  ["cityC", "cityA"],
]);

export const testTicketsMapEmpty: Map<City, City> = new Map([]);
