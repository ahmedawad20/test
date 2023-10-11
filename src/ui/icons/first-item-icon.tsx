import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFirstItemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 17 16"
    {...props}
  >
    <path fill="#000" d="m4.774 4-.94.94L6.886 8l-3.053 3.06.94.94 4-4-4-4Z" />
    <path fill="#000" d="m9.167 4-.94.94L11.28 8l-3.053 3.06.94.94 4-4-4-4Z" />
  </svg>
);
const Memo = memo(SvgFirstItemIcon);
export default Memo;
