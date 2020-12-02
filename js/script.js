// MY API KEY = 2aa393177b7d8ed724328e11ae676c78

const moviesApi = 'https://api.themoviedb.org/3/search/movie?api_key=2aa393177b7d8ed724328e11ae676c78&language=it-IT&page=1&include_adult=false&query=';

var app = new Vue ({
  el : '#app',
  data : {
    films : [],
    cercaFilm : ''
  },

  methods : {
    cerca(){
      axios.get(moviesApi , {
        params:
        {
          query: this.cercaFilm
        }
      })
      .then(ritorna =>
        this.films = ritorna)
        console.log(this.films)
    }
  }
})
