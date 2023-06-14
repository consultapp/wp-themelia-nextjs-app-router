import PostContainer from "../../containers/Post/Post";

export default function Posts({ postIds }) {
  if (!postIds.length) {
    <div>Posts not found</div>;
  }

  return (
    <>
      {postIds
        .map((id) => {
          return <PostContainer postId={id} key={id} showShort={true} />;
        })
        .reverse()}
      {/* <PaginationContainer /> */}
    </>
  );
}
