// import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import store from "../../store";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies(props) {
  // Destructing props: state movies 
  //membuat props judul agar bisa dipakai oleh bagian atribut movies
  // const { movies, setMovies } = props;
  // const { movies } = props;
  const { judul } = props; 


  //akses global state lalu masuk ke reducernya dan state nya serta disimpan state movies
  const movies = useSelector((store) => store.movies.movies);

  // console.log(movies);


  // function handleClick() {
  //   const movie = {
  //     id: nanoid(),
  //     title: "Jigsaw Spiral",
  //     year: 2021,
  //     type: "Movie",
  //     poster: "https://picsum.photos/300/400",
  //   };

  //   /**
  //    * Update state movies: setMovies
  //    * Melakukan teknik spread untuk copy dan merge array
  //    */
  //   setMovies([...movies, movie]);
  // }

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          {/* penggunaaan if pada judul ... masih bigung disini */}
          <h2  className={styles.movies__title}>Rekomendasi {judul}</h2>
          <div className={styles.movie__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
          {/* <button onClick={handleClick}>Add Movie</button> */}
        </section>
      </div>
    </div>
  );
}

export default Movies;
