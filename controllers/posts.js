const axios = require("axios");

const mockData = require("../utils/mockData");
// read env variable to load urls in array , and failback to empty array if the variable is not set
const URLS = {
  users: process.env.USERS_URL ?? "",
  posts: process.env.POSTS_URL ?? "",
  photos: process.env.PHOTOS_URL ?? "",
};
const cachePeriod = process.env.CACHE_PERIOD ?? 0;

// const useMock = false;
const useMock = true;
const randomizeResults = true;

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
  // Step 1 & 2: Convert the object to an array of key-promise pairs and map each promise to its resolved value's length.
  const entries = await Promise.all(
    Object.entries(promObject).map(async ([key, promise]) => {
      const value = await promise; // Wait for the promise to resolve
      return [key, value?.data]; // Return the key and the length as a tuple
    })
  );

  // Step 3 & 4: Convert the array of entries back to an object
  return Object.fromEntries(entries);
};

const fetchPosts = (req, res) => {
  const now = Date.now();

  // return posts direclty from cache in case of posts are still valid and not expired.
  if (now - cachedPosts.fetchedOn < cachePeriod * 60 * 1000) {
    return res.json({
      posts: cachedPosts.posts,
    });
  }
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
  promResolver(prom).then((ans) => {
    // console.log(ans);
    let postsNPhotos = [];
    // merge posts - photos on id key
    postsNPhotos = [...ans.posts];
    ans.photos.forEach((ph) => {
      const exists = postsNPhotos.findIndex((obj) => obj.id === ph.id);
      if (exists > -1) {
        postsNPhotos[exists] = { ...postsNPhotos[exists], ...ph }; // merge matched post with photo data..
      }
    });
    // merge posts and photos with Users..
    ans.users.forEach((us) => {
      const exists = postsNPhotos.findIndex((obj) => obj.userId === us.id);
      if (exists > -1) {
        postsNPhotos[exists].userName = us.name; // merge matched post with photo data..
        postsNPhotos[exists].city = us?.address?.city;
      }
    });

    const filtered = postsNPhotos.filter(
      (item) =>
        Object.prototype.hasOwnProperty.call(item, "userName") &&
        Object.prototype.hasOwnProperty.call(item, "body")
    );
    // console.log(filtered);
    // keep cached posts in local cache
    cachedPosts.fetchedOn = Date.now();
    cachedPosts.posts = randomizeResults ? filtered.shuffle() : filtered;
    res.json({ posts: cachedPosts.posts });
  });
};

const fetchPostsMocked = (req, res) => {
  cachedPosts.fetchedOn = Date.now();
  cachedPosts.posts = mockData;
  // setTimeout(() => , 100);
  res.json({ posts: mockData });
};

module.exports = {
  fetchPosts: useMock ? fetchPostsMocked : fetchPosts,
  cachedPosts,
};
