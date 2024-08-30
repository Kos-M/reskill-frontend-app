const axios = require("axios");

const mockData = require("../utils/mockData");
// read env variable to load urls in array , and failback to empty array if the variable is not set
const URLS = {
  users: process.env.USERS_URL ?? "",
  posts: process.env.POSTS_URL ?? "",
  photos: process.env.PHOTOS_URL ?? "",
};
const cachePeriod = process.env.CACHE_PERIOD ?? 0;

const useMock = false;
const randomizeResults = false;

const cachedPosts = {
  fetchedOn: -1,
  posts: [],
};

Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

/**
 * Accepts object with values pending promises ,
 * will resolve same object when all promises are finished.
 */
const promResolver = async (promObject) => {
  // Convert the object to an array of key-promise pairs and map each promise to its resolved value's length.
  const entries = await Promise.all(
    Object.entries(promObject).map(async ([key, promise]) => {
      const value = await promise; // Wait for the promise to resolve
      return [key, value?.data]; // Return the key and the value as a tuple
    })
  );

  // Convert the array of entries back to an object
  return Object.fromEntries(entries);
};

/**
 * Fetches all post related data , merge on common keys and filter valid data
 * @returns posts: array of merged posts
 */
const getPosts = () => {
  return new Promise((resolve, reject) => {
    console.log("fetching data..");
    const prom = {};
    Object.keys(URLS).forEach((key) => {
      prom[key] = axios.get(URLS[key]); // here we are converting object with values urls to fetch promises.
    });
    // {
    //   users: Promise { <pending> },
    //   posts: Promise { <pending> },
    //   photos: Promise { <pending> }
    // }
    promResolver(prom)
      .then((ans) => {
        let postsNPhotos = [];
        // merge posts - photos on id key
        postsNPhotos = [...ans.posts];
        // merge posts and photos with Users..
        ans.users.forEach((us) => {
          const exists = postsNPhotos.findIndex((obj) => obj.userId === us.id);
          if (exists > -1) {
            postsNPhotos[exists].userName = us.name; // merge matched post with photo data..
            postsNPhotos[exists].city = us?.address?.city;
          }
        });
        // filter out all data without username or body props
        postsNPhotos = postsNPhotos.filter(
          (item) =>
            Object.prototype.hasOwnProperty.call(item, "userName") &&
            Object.prototype.hasOwnProperty.call(item, "body")
        );
        // merge matched post with photo data..
        ans.photos.forEach((ph) => {
          const exists = postsNPhotos.findIndex((obj) => obj.id === ph.id);
          if (exists > -1) {
            postsNPhotos[exists] = { ...postsNPhotos[exists], ...ph };
          }
        });

        // keep cached posts in local cache
        cachedPosts.fetchedOn = Date.now();
        cachedPosts.posts = randomizeResults
          ? postsNPhotos.shuffle()
          : postsNPhotos;
        resolve(cachedPosts.posts);
      })
      .catch((e) => reject(e));
  });
};

const fetchPosts = (req, res) => {
  const now = Date.now();

  // return posts direclty from cache in case of posts are still valid and not expired.
  if (now - cachedPosts.fetchedOn < cachePeriod * 60 * 1000) {
    return res.json({
      posts: cachedPosts.posts,
    });
  }
  // fetch posts from third party
  getPosts()
    .then((posts) => res.json({ posts }))
    .catch((e) =>
      res.status(500).json({ error: e?.message ?? "Internal Error" })
    );
};

/**
 * Only for demo purposes , respond with mock data
 */
const fetchPostsMocked = (req, res) => {
  cachedPosts.fetchedOn = Date.now();
  cachedPosts.posts = mockData;
  // setTimeout(() => , 100);
  res.json({ posts: mockData });
};

module.exports = {
  fetchPosts: useMock ? fetchPostsMocked : fetchPosts,
  cachedPosts,
  getPosts,
};
