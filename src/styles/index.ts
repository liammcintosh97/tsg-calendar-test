import {TextStyles} from './type';
import typography from './typography';

export const textStyles: TextStyles = {
  display: {
    1: {
      fontFamily: typography.DINProCondBlack,
      fontSize: 36,
    },
    2: {
      fontFamily: typography.DINPro,
      fontSize: 48,
    },
    3: {
      fontFamily: typography.DINProCondMedium,
      fontSize: 64,
    },
  },
  header: {
    1: {
      fontFamily: typography.DINProCondBlack,
      fontSize: 24,
    },
    2: {
      fontFamily: typography.DINProCondBlack,
      fontSize: 20,
    },
    3: {
      fontFamily: typography.DINProCondBlack,
      fontSize: 18,
    },
    4: {
      fontFamily: typography.DINProCondBlack,
      fontSize: 16,
    },
  },
  subHeader: {
    1: {
      fontFamily: typography.DINProBold,
      fontSize: 20,
    },
    2: {
      fontFamily: typography.DINProBold,
      fontSize: 16,
    },
    3: {
      fontFamily: typography.DINProBold,
      fontSize: 14,
    },
  },
  body: {
    1: {
      fontFamily: typography.DINPro,
      fontSize: 20,
      letterSpacing: 0.15,
    },
    2: {
      fontFamily: typography.DINPro,
      fontSize: 16,
      letterSpacing: 0.15,
    },
    3: {
      fontFamily: typography.DINPro,
      fontSize: 14,
    },
    4: {
      fontFamily: typography.DINPro,
      fontSize: 12,
      letterSpacing: 0.4,
    },
  },
  label: {
    1: {
      fontFamily: typography.DINProMedium,
      fontSize: 18,
      letterSpacing: 0.15,
    },
    2: {
      fontFamily: typography.DINProMedium,
      fontSize: 16,
      letterSpacing: 0.3,
    },
    3: {
      fontFamily: typography.DINProMedium,
      fontSize: 14,
    },
  },
};
