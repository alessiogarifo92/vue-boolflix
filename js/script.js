// MY API KEY = 2aa393177b7d8ed724328e11ae676c78

const moviesApi = 'https://api.themoviedb.org/3/search/movie?api_key=2aa393177b7d8ed724328e11ae676c78&language=it-IT&page=1&include_adult=false&query=';
const seriesApi = 'https://api.themoviedb.org/3/search/tv?api_key=2aa393177b7d8ed724328e11ae676c78&language=it-IT&page=1&include_adult=false&query=';
var app = new Vue ({
  el : '#app',
  data : {
    films : [],
    serieTv : [],
    cercaFilm : ''
  },

  methods : {
    cerca : function(){
      //films
      {axios.get(moviesApi , {
          params:
          {
            query: this.cercaFilm
          }
        }).then((ritorna) =>
        {this.films = ritorna.data.results,
        console.log(ritorna)}
        )
        this.cercaFilm = '';
      }

      //serieTv
      {axios.get(seriesApi , {
          params:
          {
            query: this.cercaFilm
          }
        }).then((riporta) =>
          {this.serieTv = riporta.data.results,
          console.log(riporta)}
        )
        this.cercaFilm = '';
      }
    },

    printVote: function(movie) {
      console.log(movie)
      if (movie !== 0) {
        return parseFloat(movie / 2).toFixed(0);
      } else {
        return 0;
      }
    }
  }
})
