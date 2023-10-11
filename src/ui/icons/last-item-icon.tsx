import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgLastItemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      fill="#333"
      d="m12.226 12 .94-.94L10.113 8l3.053-3.06-.94-.94-4 4 4 4Z"
    />
    <path
      fill="#333"
      d="m7.833 12 .94-.94L5.72 8l3.053-3.06-.94-.94-4 4 4 4Z"
    />
  </svg>
);
const Memo = memo(SvgLastItemIcon);
export default Memo;
