import { PrimaryButtonProps } from "./types";

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { text } = props;

  return (
    <button className="w-full h-10 rounded-[4px] bg-primaryBlue flex justify-center items-center">
      <div className="text-primaryText text-base font-medium">{text}</div>
    </button>
  );
};

export default PrimaryButton;
