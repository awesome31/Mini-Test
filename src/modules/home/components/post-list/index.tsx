import { POSTS } from "../../constants/posts";
import Post from "../post";
import { PostProps } from "../post/types";

const PostList = () => {
  const renderPost = (item: PostProps) => <Post {...item} />;

  return (
    <div className="flex flex-col w-full gap-4">{POSTS.map(renderPost)}</div>
  );
};

export default PostList;
