import PostShort from "@/components/PostShort/PostShort";

export default function Posts({ posts }) {
  if (!posts && !posts.length) {
    <div>Posts not found</div>;
  }

  return (
    <>
      {posts
        .map((post) => {
          return <PostShort post={post} key={post.id} />;
        })
        .reverse()}
      {/* <PaginationContainer /> */}
    </>
  );
}
