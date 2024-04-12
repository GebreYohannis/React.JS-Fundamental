import "./Movie.css";
import { getMovies } from "./FackMovieServicesAPI";
import { Component } from "react";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
  };

  render() {
    if (this.state.movies.length === 0)
      return <h2>There are no movies in a database.</h2>;
    return (
      <div>
        <h2>Showing {this.state.movies.length} movies in a database</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.stock}</td>
                <td>{movie.rate}</td>
                <td>
                  <button onClick={() => this.handleDelete(movie)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
