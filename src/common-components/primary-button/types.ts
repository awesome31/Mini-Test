import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface PrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}
