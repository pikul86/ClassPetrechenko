const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {  //null - нажали отмену, '' - пользователь нажал ок и строка пустая
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--; // Возвращает итерацию цикла на один шаг назад, если пользователь выше в условии выполнил что-то не так
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);