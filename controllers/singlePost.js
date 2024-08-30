const { getPosts } = require("./posts");
const getSingle = (req, res) => {
  const postID = req.params.id || req.query.id;

  if (!postID) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Missing required query parameter: id",
    });
  }

  const { posts } = res.locals.cachedPosts;
  const exists = posts.findIndex((obj) => obj.id === Number(postID));
  if (exists > -1) return res.json({ result: posts[exists] });
  if (posts?.length > 0)
    return res.status(404).json({
      error: "Not found",
      message: `Unknown specified post id: ${postID}`,
    });

  getPosts().then((posts) => {
    const exists2 = posts.findIndex((obj) => obj.id === Number(postID));
    if (exists2 === -1) return;
    res.json({ result: posts[exists2] });
  });
};

module.exports = getSingle;
