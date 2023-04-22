'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start() {
		this.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    
		while (this.count == '' || this.count == null || isNaN(this.count))  {
			this.count = +prompt ('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms () {

		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
				b = prompt('На сколько оцените его?', '').trim();
		
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				this.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel () {

		if (this.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count < 30) {
			console.log('Вы классический зритель');
		} else if (this.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	/* 
	showMyDB () {
		if (this.privat) { /* empty */ 
	/* 	} else {
			return console.log(this);
		}
	},
 */
	showMyDB (hidden) {
		if (!hidden) {
			console.log(this);
		}
	},
	toggleVisibleMyDB () {
		if (this.privat) {
			return this.privat = false;
		} else {
			return this.privat = true;
		}
	},

	writeYourGenres () {
		for (let i = 1; i < 2; i++) {
			/* let genre = prompt (`Ваш любимый жанр под номером ${i}`);

			if (genre === '' || genre == null){
				console.log('Вы ввели некорректные данные или не ввели их вообще');
			} else {
				this.genres[i - 1] = genre;
			} */

			let genres = prompt ('Введите ваши любимые жанры через запятую'.toLowerCase());
			
			if (genres === '' || genres == null){
				console.log('Вы ввели некорректные данные или не ввели их вообще');
				i--;
			} else {
				this.genres = genres.split(', ');
				this.genres.sort();
			}
		}
		this.genres.forEach((item, i) => {
			console.log(`Любимый жанр $(i + 1) - это ${item}`);
		});
	}
};


/* personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB.count); */



