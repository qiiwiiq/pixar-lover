export interface Film {
  name: string;
  year: number;
  poster: string;
  imdbId: string;
}

export const films: Film[] = [
  {
    name: "Toy Story",
    year: 1995,
    poster: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@.jpg",
    imdbId: "tt0114709"
  },
  {
    name: "A Bug's Life",
    year: 1998,
    poster: "https://m.media-amazon.com/images/M/MV5BNThmZGY4NzgtMTM4OC00NzNkLWEwNmEtMjdhMGY5YTc1NDE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg",
    imdbId: "tt0120623"
  },
  {
    name: "Toy Story 2",
    year: 1999,
    poster: "https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@.jpg",
    imdbId: "tt0120363"
  },
  {
    name: "Monsters, Inc.",
    year: 2001,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@.jpg",
    imdbId: "tt0198781"
  },
  {
    name: "Finding Nemo",
    year: 2003,
    poster: "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg",
    imdbId: "tt0266543"
  },
  {
    name: "The Incredibles",
    year: 2004,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@.jpg",
    imdbId: "tt0317705"
  },
  {
    name: "Cars",
    year: 2006,
    poster: "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_UX182_CR0,0,182,268_AL_.jpg",
    imdbId: "tt0317219"
  },
  {
    name: "Ratatouille",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@.jpg",
    imdbId: "tt0382932"
  },
  {
    name: "WALL-E",
    year: 2008,
    poster: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@.jpg",
    imdbId: "tt0910970"
  },
  {
    name: "Up",
    year: 2009,
    poster: "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@.jpg",
    imdbId: "tt1049413"
  },
  {
    name: "Toy Story 3",
    year: 2010,
    poster: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@.jpg",
    imdbId: "tt0435761"
  },
  {
    name: "Cars 2",
    year: 2011,
    poster: "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@.jpg",
    imdbId: "tt1216475"
  },
  {
    name: "Brave",
    year: 2012,
    poster: "https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@.jpg",
    imdbId: "tt1217209"
  },
  {
    name: "Monsters University",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BMTUyODgwMDU3M15BMl5BanBnXkFtZTcwOTM4MjcxOQ@@.jpg",
    imdbId: "tt1453405"
  },
  {
    name: "Inside Out",
    year: 2015,
    poster: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@.jpg",
    imdbId: "tt2096673"
  },
  {
    name: "The Good Dinosaur",
    year: 2015,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MTg2NjQ4MV5BMl5BanBnXkFtZTgwNzcxOTY5NjE@.jpg",
    imdbId: "tt1979388"
  },
  {
    name: "Finding Dory",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@.jpg",
    imdbId: "tt2277860"
  },
  {
    name: "Cars 3",
    year: 2017,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@.jpg",
    imdbId: "tt3606752"
  },
  {
    name: "Coco",
    year: 2017,
    poster: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@.jpg",
    imdbId: "tt2380307"
  },
  {
    name: "Incredibles 2",
    year: 2018,
    poster: "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_UX182_CR0,0,182,268_AL_.jpg",
    imdbId: "tt3606756"
  },
  {
    name: "Toy Story 4",
    year: 2019,
    poster: "https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@.jpg",
    imdbId: "tt1979376"
  },
  {
    name: "Onward",
    year: 2020,
    poster: "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@.jpg",
    imdbId: "tt7146812"
  },
  {
    name: "Soul",
    year: 2020,
    poster: "https://m.media-amazon.com/images/M/MV5BNDc4NjYzOWItYmUzYy00MTA3LThiMTctNTliZDlkY2FjZjRlXkEyXkFqcGdeQXVyNDg4NjY5OTQ@.jpg",
    imdbId: "tt2948372"
  }
];