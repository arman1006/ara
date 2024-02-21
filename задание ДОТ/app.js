const film = { 
    name: "Рафик", 
    yearOfRelease: 2005, 
    director: "Арман Безоян", 
    genre: "Комедия", 
    
  }; 
  
  function printFilm() { 
    if (film.genre === "Комедия") { 
      return "Жанр является комедией"; 
    } else if (film.genre === "Фантастика") { 
      return "Жанр является фантастикой"; 
    } else if (film.genre === "Боевик") { 
      return "Жанр являетсья Боевиком"; 
    } else { 
      return "Тип жанра не определен"; 
    } 
  } 
  
  function printFilmDirector() { 
    let FilmDirector = ""; 
    for (let key in film) { 
      FilmDirector += `${key}: ${film[key]}\n`; 
    } 
    FilmDirector += `${printFilm()}`; 
    console.log(FilmDirector); 
  }
  
  
  printFilmDirector();