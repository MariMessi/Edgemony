import { cE, qS, tvCardGen } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS (".body");
const topRatedEl = qS (".top_rated");
const popularEl = qS (".popular");
const airingTodayEl = qS (".airing_today");



GET ("tv", "top_rated").then ((data) => 
data.results.map ((tv) => topRatedEl.appendChild(tvCardGen(tv))));

GET ("tv", "popular").then ((data) => 
data.results.map ((tv) => popularEl.appendChild(tvCardGen(tv))));

GET ("tv", "airing_today").then ((data) => 
data.results.map ((tv) => airingTodayEl.appendChild(tvCardGen(tv))));


// Promise.all([
//     GET("tv", "latest"),
//     GET("tv", "popular"),
//     GET("tv", "airing_today"),
// ])
// .then((data) =>  {
//     data[0].results.map((tv) => latestEl.append(tvCardGen(tv)));
//     data[1].results.map((tv) => popularEl.append(tvCardGen(tv)));
//     data[2].results.map((tv) => airingTodayEl.append(tvCardGen(tv)));

// });










