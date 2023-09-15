import { HOME_STRINGS } from "../../constants/strings";
import { CreatePostProps } from "./types";

const CreatePost = (props: CreatePostProps) => {
  const { onPostClick } = props;

  return (
    <div className="w-full py-6 px-5 rounded-lg bg-secondaryBlack">
      <div className="text-lg font-medium text-tertiaryText">
        {HOME_STRINGS.createPost}
      </div>
      <div className="h-4" />
      <div className="w-full flex flex-row bg-tertiaryBlack p-4 rounded-lg items-center">
        <div className="h-12 w-12 rounded-full bg-secondaryBlack flex justify-center items-center">
          {HOME_STRINGS.emoji}
        </div>
        <div className="w-4" />
        <button
          className="w-[550px] text-secondaryText text-left"
          onClick={onPostClick}
        >
          {HOME_STRINGS.howAreYouFeelingToday}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
