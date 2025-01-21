import {TamaguiConfig, createFont, createTamagui, createTokens, isWeb,styled,YStack } from 'tamagui'



export const Container = styled(YStack, {
  flex: 1,
  paddingHorizontal: 15,
  width: "100%",
  marginLeft: "auto",
  backgroundColor: '#111011',
  marginRight: "auto",
  maxWidth: 500,
  position: "relative"
});

export const Main = styled(YStack, {
  flex: 1,
  height: "100%",
  width: "100%",
  justifyContent: 'space-between',
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative"
});


const systemFont = createFont({
  family:'System',
  size: {
    1: 12,
    2: 14,
    3: 16,
  },
  lineHeight: {
    1: 18,
    2: 20,
    3: 24,
  },
  weight: {
    1: '300',
    2: '400',
    3: '600',
  },
  letterSpacing: {
    1: 0,
    2: -0.5,
    3: -1,
  },
  face: {
    300: { normal: 'InterLight', italic: 'InterItalic' },
    600: { normal: 'InterBold' },
  },
})

const size = {
  0: 0,
  1: 5,
  2: 10,
  3: 20,
  true:10
}

export const tokens = createTokens({
  size,
  space: { ...size},
  radius: { 0: 0, 1: 3, 2: 6 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#000',
    primary: '#3498db',
  },
})

const tamaguiConfig = createTamagui({
  fonts: {
    heading: systemFont,
    body: systemFont,
  },
  tokens,

  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },

  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  // Shorthands
  // Adds <View m={10} /> to <View margin={10} />
  // See Settings section on this page to only allow shorthands
  // Be sure to have `as const` at the end
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
    bg: 'backgroundColor'
  },

  // Change the default props for any styled() component with a name.
  // We are discouraging the use of this and have deprecated it, prefer to use
  // styled() on any component to change it's styles.
  defaultProps: {
    Text: {
      color: 'green',
    },
  },
})

// export const config = createTamagui(configBase)
export type TamaguiCustomConfig = typeof tamaguiConfig;
export default tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig {}
}