import { Theme, useMediaQuery, useTheme } from '@chakra-ui/react';

export const useCheckBreakpointValues = () => {
  const theme = useTheme<Theme>();
  const [isSm, isMd, isLg, isXl, is2xl] = useMediaQuery([
    `(max-width: ${theme.breakpoints.sm})`,
    `(max-width: ${theme.breakpoints.md})`,
    `(max-width: ${theme.breakpoints.lg})`,
    `(max-width: ${theme.breakpoints.xl})`,
    `(min-width: ${theme.breakpoints['2xl']})`,
  ]);

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
  };
};
