import { css } from "styled-components";

export const sizes = {
  desktopWide: "1440px",
  desktop: "1280px",
  tabletWide: "1024px",
  tablet: "768px",
  mobile: "365px",
};

type Keys = keyof typeof sizes;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Breakpoints = { [key in Keys]: (...cssValue: any) => any };

export const media: Breakpoints = Object.keys(sizes).reduce((acc, label) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  acc[label as Keys] = (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${sizes[label as Keys]}) {
      ${css(first, ...interpolations)}
    }
  `;

  return acc;
}, {} as Breakpoints);
