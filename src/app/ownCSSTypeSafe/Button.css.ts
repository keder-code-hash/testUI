import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeVars } from './theme.css';

export const button = recipe({
  base: {
    border: 0,
    borderRadius: 6,
  },

  variants: {
    kind: {
      primary: {
        background: themeVars.backgroundColors.brand,
        color: themeVars.textColors.white,
      },
      secondary: {
        background: themeVars.backgroundColors.secondary,
      },
    },
    size: {
      small: { padding: themeVars.spaces['4'] },
      medium: { padding: themeVars.spaces['8'] },
      large: { padding: themeVars.spaces['16'] },
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },

  defaultVariants: {
    kind: 'primary',
    size: 'medium',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
