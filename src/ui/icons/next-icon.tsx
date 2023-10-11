import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgNextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 6 8"
    {...props}
  >
    <path fill="#000" d="m4.56 8 .94-.94L2.447 4 5.5.94 4.56 0l-4 4 4 4Z" />
  </svg>
);
const Memo = memo(SvgNextIcon);
export default Memo;
