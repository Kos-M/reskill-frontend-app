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
  if (exists === -1) {
    return res.status(404).json({
      error: "Not found",
      message: `Unknown specified post id: ${postID}`,
    });
  }

  res.json({ result: posts[exists] });
};

module.exports = getSingle;
