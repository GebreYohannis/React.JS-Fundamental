const movies = [
  {
    id: 1,
    title: "Terminator",
    genre: { id: 1, name: "Action" },
    stock: 6,
    rate: 2.5,
  },
  {
    id: 2,
    title: "Die Hard",
    genre: { id: 2, name: "Action" },
    stock: 5,
    rate: 2.5,
  },
  {
    id: 3,
    title: "Get Out",
    genre: { id: 3, name: "Action" },
    stock: 8,
    rate: 3.5,
  },
  {
    id: 4,
    title: "Trip to Italy",
    genre: { id: 4, name: "Thriller" },
    stock: 7,
    rate: 3.5,
  },
  {
    id: 5,
    title: "Airplane",
    genre: { id: 5, name: "Comedy" },
    stock: 6,
    rate: 2.5,
  },
  {
    id: 6,
    title: "The Maze Runner",
    genre: { id: 6, name: "Action" },
    stock: 9,
    rate: 1.5,
  },
];

export function getMovies() {
  return movies;
}
