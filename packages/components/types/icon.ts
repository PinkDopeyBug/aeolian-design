import type { ExtractPropTypes } from "vue";
export const iconProps = {
  color: {
    type: String,
    default: "black",
  },
  size: {
    type: [String, Number],
    default: 14,
  },
};
export type IconProps = ExtractPropTypes<typeof iconProps>;