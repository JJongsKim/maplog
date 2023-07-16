import { css } from 'styled-components';

type Font = {
  size: number;
  weight: 'R' | 'M' | 'B';
  family: 'welcome';
};

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'R':
      return 400;
    case 'M':
      return 500;
    case 'B':
      return 600;
  }
};

const FONT = ({ size, weight, family }: Font) => css`
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  font-family: ${family};
`;

export const font = {
  R_BODY_12: FONT({ size: 12, family: 'welcome', weight: 'R' }),
  R_BODY_14: FONT({ size: 14, family: 'welcome', weight: 'R' }),
  R_BODY_16: FONT({ size: 16, family: 'welcome', weight: 'R' }),
  R_BODY_20: FONT({ size: 20, family: 'welcome', weight: 'R' }),

  M_BODY_14: FONT({ size: 14, family: 'welcome', weight: 'M' }),
  M_BODY_17: FONT({ size: 17, family: 'welcome', weight: 'M' }),
  M_BODY_22: FONT({ size: 22, family: 'welcome', weight: 'M' }),
  M_BODY_28: FONT({ size: 28, family: 'welcome', weight: 'M' }),

  B_POINT_18: FONT({ size: 18, family: 'welcome', weight: 'B' }),
  B_POINT_22: FONT({ size: 22, family: 'welcome', weight: 'B' }),
  B_POINT_26: FONT({ size: 26, family: 'welcome', weight: 'B' }),
  B_POINT_40: FONT({ size: 40, family: 'welcome', weight: 'B' }),
};
