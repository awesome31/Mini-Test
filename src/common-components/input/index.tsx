"use client";

import Eye from "@/src/assets/images/eye";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  const { label, subLabel, onEyeClick } = props;

  return (
    <div>
      {subLabel ? (
        <div className="flex flex-row w-full justify-between items-center">
          <label className="text-sm text-tertiaryText">{label}</label>
          <button
            className="text-sm text-tertiaryText"
            onClick={subLabel.action}
          >
            {subLabel.text}
          </button>
        </div>
      ) : (
        <label className="text-sm text-tertiaryText">{label}</label>
      )}
      <div className="h-2" />
      <div className="w-full h-10 rounded-[4px] border border-borderMain px-3 text-primaryText bg-secondaryBlack flex flex-row items-center">
        <input
          className="w-full h-full text-primaryText bg-secondaryBlack"
          {...props}
        />
        {onEyeClick ? (
          <button onClick={onEyeClick}>
            <Eye />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
