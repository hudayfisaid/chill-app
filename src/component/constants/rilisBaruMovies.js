// Constants
const thumbnailPath = "/img/thumbnail/RilisBaru/";
const commonCategories = ["Misteri", "Kriminal", "Fantasi"];
const commonStyle = "box-panjang";

const topRatingFilmAndMovies = [
    {
        style: commonStyle,
        type: "new",
        title: "Suzume",
        image: `${thumbnailPath}tn1.png`,
        rating: "4.5/5",
        eps: "Episode 1",
        duration: 153,
        progress: "40%",
        totaleps: 11,
        category: commonCategories,
        label: "Top 10",
        neweps: false,
        top10: true,
    },
    {
        style: commonStyle,
        type: "old",
        title: "Jurassic World",
        image: `${thumbnailPath}tn2.png`,
        rating: "4.2/5",
        eps: "Episode 1",
        duration: 254,
        progress: "66%",
        totaleps: 13,
        category: commonCategories,
        label: "new Episode",
        neweps: true,
        top10: false,
    },
    {
        style: commonStyle,
        type: "new",
        title: "Sonic",
        image: `${thumbnailPath}tn3.png`,
        rating: "4.6/5",
        eps: "Episode 1",
        duration: 44,
        progress: "56%",
        totaleps: 13,
        category: commonCategories,
        label: null,
        neweps: false,
        top10: true,
    },
    {
        style: commonStyle,
        type: "old",
        title: "All Of Us Dead",
        image: `${thumbnailPath}tn4.png`,
        rating: "4.3/5",
        eps: "Episode 1",
        duration: 54,
        progress: "58%",
        totaleps: 12,
        category: commonCategories,
        label: "new Episode",
        neweps: true,
        top10: false,
    },
    {
        style: commonStyle,
        type: "old",
        title: "Big Hero",
        image: `${thumbnailPath}tn5.png`,
        rating: "4.3/5",
        eps: "Episode 1",
        duration: 145,
        progress: "100%",
        totaleps: 11,
        category: commonCategories,
        label: null,
        neweps: false,
        top10: true,
    },
    {
        style: commonStyle,
        type: "new",
        title: "Suzume",
        image: `${thumbnailPath}tn1.png`,
        rating: "4.5/5",
        eps: "Episode 1",
        duration: 153,
        progress: "40%",
        totaleps: 11,
        category: commonCategories,
        label: "new Episode",
        neweps: true,
        top10: false,
    },
];

export default topRatingFilmAndMovies;