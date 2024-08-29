import PropTypes from "prop-types";

RelatedArticlePosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function RelatedArticlePosts({ posts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-8">
      {posts.map((post, index) => (
        <div key={index} className="pb-10 md:pb-20">
          <div className="h-64 md:h-80 w-full overflow-hidden rounded-lg">
            <a href={`/post?id=${post?.id}`}>
              <img
                src={post.url}
                alt={`image_${post.title}`}
                className="rounded-lg"
              />
            </a>
          </div>

          {/* Title and Author */}
          <div className="w-full py-4 md:py-6">
            <a href={`/post?id=${post?.id}`}>
              <h1 className="font-inter text-lg md:text-xl leading-6 md:leading-30 text-black font-medium">
                {post.title}
              </h1>
              <h4 className="text-semiGray font-inter leading-6 md:leading-30 text-lg md:text-xl font-medium py-1">
                {post.userName}
              </h4>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
