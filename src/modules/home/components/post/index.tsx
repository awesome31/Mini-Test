import Comment from "@/src/assets/images/comment";
import { HOME_STRINGS } from "../../constants/strings";
import { PostProps } from "./types";

const Post = (props: PostProps) => {
  const {
    content,
    edited,
    emoji,
    lastActive,
    userLogo,
    username,
    commentsCount,
  } = props;

  return (
    <div className="w-full py-6 px-5 rounded-lg bg-secondaryBlack">
      <div className="flex flex-row items-center">
        <img
          src={userLogo}
          alt={userLogo}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="w-4" />
        <div>
          <div className="text-tertiaryText text-base">{username}</div>
          <div className="text-secondaryText text-sm">
            {lastActive} {edited ? HOME_STRINGS.edited : ""}
          </div>
        </div>
      </div>
      <div className="h-4" />
      <div className="w-full flex flex-row bg-tertiaryBlack p-4 rounded-lg">
        <div className="h-12 w-12 rounded-full bg-secondaryBlack flex justify-center items-center">
          {emoji}
        </div>
        <div className="w-4" />
        <div className="w-[550px] text-secondaryText">{content}</div>
      </div>
      {commentsCount ? (
        <>
          <div className="h-3" />
          <div className="flex flex-row items-center">
            <Comment />
            <div className="w-2" />
            <div className="text-secondaryText text-sm">
              {commentsCount} {HOME_STRINGS.comments}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Post;
