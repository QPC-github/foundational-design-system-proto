/* eslint-disable id-length */
import {createCss, StitchesCss} from '@stitches/react';
import {rem} from 'polished';

export type {StitchesVariants} from '@stitches/react';

const stitches = createCss({
  theme: {
    colors: {
      // Semantic colors
      background: 'rgba(246, 246, 247, 1)',
      backgroundHovered: 'rgba(241, 242, 243, 1)',
      backgroundPressed: 'rgba(237, 238, 239, 1)',
      backgroundSelected: 'rgba(237, 238, 239, 1)',
      surface: 'rgba(255, 255, 255, 1)',
      surfaceNeutral: 'rgba(228, 229, 231, 1)',
      surfaceNeutralHovered: 'rgba(219, 221, 223, 1)',
      surfaceNeutralPressed: 'rgba(201, 204, 208, 1)',
      surfaceNeutralDisabled: 'rgba(241, 242, 243, 1)',
      surfaceNeutralSubdued: 'rgba(246, 246, 247, 1)',
      surfaceSubdued: 'rgba(250, 251, 251, 1)',
      surfaceDisabled: 'rgba(250, 251, 251, 1)',
      surfaceHovered: 'rgba(246, 246, 247, 1)',
      surfacePressed: 'rgba(241, 242, 243, 1)',
      surfaceDepressed: 'rgba(237, 238, 239, 1)',
      backdrop: 'rgba(0, 0, 0, 0.5)',
      overlay: 'rgba(255, 255, 255, 0.5)',
      shadowFromDimLight: 'rgba(0, 0, 0, 0.2)',
      shadowFromAmbientLight: 'rgba(23, 24, 24, 0.05)',
      shadowFromDirectLight: 'rgba(0, 0, 0, 0.15)',
      hintFromDirectLight: 'rgba(0, 0, 0, 0.15)',
      surfaceSearchField: 'rgba(241, 242, 243, 1)',
      border: 'rgba(140, 145, 150, 1)',
      borderNeutralSubdued: 'rgba(186, 191, 195, 1)',
      borderHovered: 'rgba(153, 158, 164, 1)',
      borderDisabled: 'rgba(210, 213, 216, 1)',
      borderSubdued: 'rgba(201, 204, 207, 1)',
      borderDepressed: 'rgba(87, 89, 89, 1)',
      borderShadow: 'rgba(174, 180, 185, 1)',
      borderShadowSubdued: 'rgba(186, 191, 196, 1)',
      divider: 'rgba(225, 227, 229, 1)',
      icon: 'rgba(92, 95, 98, 1)',
      iconHovered: 'rgba(26, 28, 29, 1)',
      iconPressed: 'rgba(68, 71, 74, 1)',
      iconDisabled: 'rgba(186, 190, 195, 1)',
      iconSubdued: 'rgba(140, 145, 150, 1)',
      text: 'rgba(32, 34, 35, 1)',
      textDisabled: 'rgba(140, 145, 150, 1)',
      textSubdued: 'rgba(109, 113, 117, 1)',
      interactive: 'rgba(44, 110, 203, 1)',
      interactiveDisabled: 'rgba(189, 193, 204, 1)',
      interactiveHovered: 'rgba(31, 81, 153, 1)',
      interactivePressed: 'rgba(16, 50, 98, 1)',
      focused: 'rgba(69, 143, 255, 1)',
      surfaceSelected: 'rgba(242, 247, 254, 1)',
      surfaceSelectedHovered: 'rgba(237, 244, 254, 1)',
      surfaceSelectedPressed: 'rgba(229, 239, 253, 1)',
      iconOnInteractive: 'rgba(255, 255, 255, 1)',
      textOnInteractive: 'rgba(255, 255, 255, 1)',
      actionSecondary: 'rgba(255, 255, 255, 1)',
      actionSecondaryDisabled: 'rgba(255, 255, 255, 1)',
      actionSecondaryHovered: 'rgba(246, 246, 247, 1)',
      actionSecondaryPressed: 'rgba(241, 242, 243, 1)',
      actionSecondaryDepressed: 'rgba(109, 113, 117, 1)',
      actionPrimary: 'rgba(0, 128, 96, 1)',
      actionPrimaryDisabled: 'rgba(241, 241, 241, 1)',
      actionPrimaryHovered: 'rgba(0, 110, 82, 1)',
      actionPrimaryPressed: 'rgba(0, 94, 70, 1)',
      actionPrimaryDepressed: 'rgba(0, 61, 44, 1)',
      iconOnPrimary: 'rgba(255, 255, 255, 1)',
      textOnPrimary: 'rgba(255, 255, 255, 1)',
      textPrimary: 'rgba(0, 123, 92, 1)',
      textPrimaryHovered: 'rgba(0, 108, 80, 1)',
      textPrimaryPressed: 'rgba(0, 92, 68, 1)',
      surfacePrimarySelected: 'rgba(241, 248, 245, 1)',
      surfacePrimarySelectedHovered: 'rgba(179, 208, 195, 1)',
      surfacePrimarySelectedPressed: 'rgba(162, 188, 176, 1)',
      borderCritical: 'rgba(253, 87, 73, 1)',
      borderCriticalSubdued: 'rgba(224, 179, 178, 1)',
      borderCriticalDisabled: 'rgba(255, 167, 163, 1)',
      iconCritical: 'rgba(215, 44, 13, 1)',
      surfaceCritical: 'rgba(254, 211, 209, 1)',
      surfaceCriticalSubdued: 'rgba(255, 244, 244, 1)',
      surfaceCriticalSubduedHovered: 'rgba(255, 240, 240, 1)',
      surfaceCriticalSubduedPressed: 'rgba(255, 233, 232, 1)',
      surfaceCriticalSubduedDepressed: 'rgba(254, 188, 185, 1)',
      textCritical: 'rgba(215, 44, 13, 1)',
      actionCritical: 'rgba(216, 44, 13, 1)',
      actionCriticalDisabled: 'rgba(241, 241, 241, 1)',
      actionCriticalHovered: 'rgba(188, 34, 0, 1)',
      actionCriticalPressed: 'rgba(162, 27, 0, 1)',
      actionCriticalDepressed: 'rgba(108, 15, 0, 1)',
      iconOnCritical: 'rgba(255, 255, 255, 1)',
      textOnCritical: 'rgba(255, 255, 255, 1)',
      interactiveCritical: 'rgba(216, 44, 13, 1)',
      interactiveCriticalDisabled: 'rgba(253, 147, 141, 1)',
      interactiveCriticalHovered: 'rgba(205, 41, 12, 1)',
      interactiveCriticalPressed: 'rgba(103, 15, 3, 1)',
      borderWarning: 'rgba(185, 137, 0, 1)',
      borderWarningSubdued: 'rgba(225, 184, 120, 1)',
      iconWarning: 'rgba(185, 137, 0, 1)',
      surfaceWarning: 'rgba(255, 215, 157, 1)',
      surfaceWarningSubdued: 'rgba(255, 245, 234, 1)',
      surfaceWarningSubduedHovered: 'rgba(255, 242, 226, 1)',
      surfaceWarningSubduedPressed: 'rgba(255, 235, 211, 1)',
      textWarning: 'rgba(145, 106, 0, 1)',
      borderHighlight: 'rgba(68, 157, 167, 1)',
      borderHighlightSubdued: 'rgba(152, 198, 205, 1)',
      iconHighlight: 'rgba(0, 160, 172, 1)',
      surfaceHighlight: 'rgba(164, 232, 242, 1)',
      surfaceHighlightSubdued: 'rgba(235, 249, 252, 1)',
      surfaceHighlightSubduedHovered: 'rgba(228, 247, 250, 1)',
      surfaceHighlightSubduedPressed: 'rgba(213, 243, 248, 1)',
      textHighlight: 'rgba(52, 124, 132, 1)',
      borderSuccess: 'rgba(0, 164, 124, 1)',
      borderSuccessSubdued: 'rgba(149, 201, 180, 1)',
      iconSuccess: 'rgba(0, 127, 95, 1)',
      surfaceSuccess: 'rgba(174, 233, 209, 1)',
      surfaceSuccessSubdued: 'rgba(241, 248, 245, 1)',
      surfaceSuccessSubduedHovered: 'rgba(236, 246, 241, 1)',
      surfaceSuccessSubduedPressed: 'rgba(226, 241, 234, 1)',
      textSuccess: 'rgba(0, 128, 96, 1)',
      decorativeOneIcon: 'rgba(126, 87, 0, 1)',
      decorativeOneSurface: 'rgba(255, 201, 107, 1)',
      decorativeOneText: 'rgba(61, 40, 0, 1)',
      decorativeTwoIcon: 'rgba(175, 41, 78, 1)',
      decorativeTwoSurface: 'rgba(255, 196, 176, 1)',
      decorativeTwoText: 'rgba(73, 11, 28, 1)',
      decorativeThreeIcon: 'rgba(0, 109, 65, 1)',
      decorativeThreeSurface: 'rgba(146, 230, 181, 1)',
      decorativeThreeText: 'rgba(0, 47, 25, 1)',
      decorativeFourIcon: 'rgba(0, 106, 104, 1)',
      decorativeFourSurface: 'rgba(145, 224, 214, 1)',
      decorativeFourText: 'rgba(0, 45, 45, 1)',
      decorativeFiveIcon: 'rgba(174, 43, 76, 1)',
      decorativeFiveSurface: 'rgba(253, 201, 208, 1)',
      decorativeFiveText: 'rgba(79, 14, 31, 1)',
    },
    fonts: {
      system:
        "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      mono: "Monaco, Consolas, 'Lucida Console', monospace",
    },
    fontWeights: {
      base: 400,
      medium: 500,
      bold: 700,
      badge: 400,
    },
    fontSizes: {
      1: rem(13),
      2: rem(15),
      3: rem(16),
      4: rem(17),
      5: rem(21),
      6: rem(24),
      7: rem(27),
      caption: '$1',
      heading: '$4',
      subheading: '$1',
      input: '$3',
      body: '$2',
      buttonSlim: '$3',
      button: '$2',
      buttonLarge: '$4',
      displayXLarge: '$7',
      displayLarge: '$6',
      displayMedium: '$5',
      displaySmall: '$3',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
      none: '0px',
      extraTight: '4px',
      tight: '8px',
      baseTight: '12px',
      base: '16px',
      loose: '20px',
      extraLoose: '32px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
      choice: '2rem',
      icon: '1rem',
    },
    borderWidths: {
      thin: '0.1rem',
      control: '0.2rem',
    },
    radii: {
      base: '0.4rem',
      wide: '0.8rem',
      full: '50%',
    },
    shadows: {
      card: '0px 0px 5px $colors$shadowFromAmbientLight, 0px 1px 2px $colors$shadowFromDirectLight',
      popover:
        '-1px 0px 20px $colors$shadowFromAmbientLight, 0px 1px 5px $colors$shadowFromDirectLight',
      modal:
        '0px 26px 80px $colors$shadowFromDimLight, 0px 0px 1px $colors$shadowFromDimLight',
      topBar: '0 2px 2px -1px $colors$shadowFromDirectLight',
      button: '0 1px 0 rgba(0, 0, 0, 0.05)',
      buttonInner: 'inset 0 -1px 0 rgba(0, 0, 0, 0.2)',
      buttonPressedInner: 'inset 0 1px 0 rgba(0, 0, 0, 0.15)',
      bannerDefault:
        'inset 0 0.1rem 0 0 $colors$borderNeutralSubdued, inset 0 0 0 0.1rem $colors$borderNeutralSubdued',
      bannerSuccess:
        'inset 0 0.1rem 0 0 $colors$borderSuccessSubdued, inset 0 0 0 0.1rem $colors$borderSuccessSubdued',
      bannerHighlight:
        'inset 0 0.1rem 0 0 $colors$borderHighlightSubdued, inset 0 0 0 0.1rem $colors$borderHighlightSubdued',
      bannerWarning:
        'inset 0 0.1rem 0 0 $colors$borderWarningSubdued, inset 0 0 0 0.1rem $colors$borderWarningSubdued',
      bannerCritical:
        'inset 0 0.1rem 0 0 $colors$borderCriticalSubdued, inset 0 0 0 0.1rem $colors$borderCriticalSubdued',
    },
    transitions: {
      fastEase: '100ms cubic-bezier(0.4, 0.22, 0.28, 1)',
      slowEase: '100ms cubic-bezier(0.4, 0.22, 0.28, 1)',
      fastEaseIn: '150ms cubic-bezier(0.5, 0.1, 1, 1)',
      slowEaseIn: '150ms cubic-bezier(0.5, 0.1, 1, 1)',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value: any) => ({
      paddingTop: value,
    }),
    pr: (config) => (value: any) => ({
      paddingRight: value,
    }),
    pb: (config) => (value: any) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value: any) => ({
      paddingLeft: value,
    }),
    px: (config) => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value: any) => ({
      marginTop: value,
    }),
    mr: (config) => (value: any) => ({
      marginRight: value,
    }),
    mb: (config) => (value: any) => ({
      marginBottom: value,
    }),
    ml: (config) => (value: any) => ({
      marginLeft: value,
    }),
    mx: (config) => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (config) => (value: any) => ({textAlign: value}),

    fd: (config) => (value: any) => ({flexDirection: value}),
    fw: (config) => (value: any) => ({flexWrap: value}),

    ai: (config) => (value: any) => ({alignItems: value}),
    ac: (config) => (value: any) => ({alignContent: value}),
    jc: (config) => (value: any) => ({justifyContent: value}),
    as: (config) => (value: any) => ({alignSelf: value}),
    fg: (config) => (value: any) => ({flexGrow: value}),
    fs: (config) => (value: any) => ({flexShrink: value}),
    fb: (config) => (value: any) => ({flexBasis: value}),

    bc: (config) => (value: any) => ({
      backgroundColor: value,
    }),

    br: (config) => (value: any) => ({
      borderRadius: value,
    }),
    btrr: (config) => (value: any) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (config) => (value: any) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (config) => (value: any) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (config) => (value: any) => ({
      borderTopLeftRadius: value,
    }),

    bs: (config) => (value: any) => ({boxShadow: value}),

    lh: (config) => (value: any) => ({lineHeight: value}),

    ox: (config) => (value: any) => ({overflowX: value}),
    oy: (config) => (value: any) => ({overflowY: value}),

    pe: (config) => (value: any) => ({pointerEvents: value}),
    us: (config) => (value: any) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (config) => (value: any) => ({
      width: value,
      height: value,
    }),

    linearGradient: (config) => (value: any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    appearance: (config) => (value) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelect: (config) => (value) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    backgroundClip: (config) => (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = StitchesCss<typeof stitches>;

export const {styled, css, theme, getCssString, global, keyframes, config} =
  stitches;

export const utils = config.utils;