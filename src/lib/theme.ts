const size = {
  text: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  },
  element: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem"
  },
  letterSpacing: {
    shorter: "1.25px",
    short: "1.375px",
    base: "1.5px",
    tall: "1.625px",
    taller: "2px"
  },
  borderRadius: {
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  lineHeight: {
    shorter: "1.25rem",
    short: "1.375rem",
    base: "1.5rem",
    tall: "1.625rem",
    taller: "2rem"
  }
}

const defaultColors = {
  white: "#fff",
  black: "#000",
  alpha: {
    black: {
      50: "RGBA(0, 0, 0, 0.04)",
      100: "RGBA(0, 0, 0, 0.06)",
      200: "RGBA(0, 0, 0, 0.08)",
      300: "RGBA(0, 0, 0, 0.16)",
      400: "RGBA(0, 0, 0, 0.24)",
      500: "RGBA(0, 0, 0, 0.36)",
      600: "RGBA(0, 0, 0, 0.48)",
      700: "RGBA(0, 0, 0, 0.64)",
      800: "RGBA(0, 0, 0, 0.80)",
      900: "RGBA(0, 0, 0, 0.92)"
    },
    white: {
      50: "RGBA(255, 255, 255, 0.04)",
      100: "RGBA(255, 255, 255, 0.06)",
      200: "RGBA(255, 255, 255, 0.08)",
      300: "RGBA(255, 255, 255, 0.16)",
      400: "RGBA(255, 255, 255, 0.24)",
      500: "RGBA(255, 255, 255, 0.36)",
      600: "RGBA(255, 255, 255, 0.48)",
      700: "RGBA(255, 255, 255, 0.64)",
      800: "RGBA(255, 255, 255, 0.80)",
      900: "RGBA(255, 255, 255, 0.92)"
    }
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#EBF8FF",
    100: "#BEE3F8",
    200: "#90CDF4",
    300: "#63B3ED",
    400: "#4299E1",
    500: "#3182CE",
    600: "#2B6CB0",
    700: "#2C5282",
    800: "#2A4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  }
}

export const dark = {
  name: "dark",
  size,
  color: {
    ...defaultColors,
    bg: defaultColors.gray[700],
    bg_secondary: defaultColors.gray[800],
    primary: defaultColors.white,
    secondary: defaultColors.gray[300]
  }
}

export const light = {
  name: "light",
  size,
  color: {
    ...defaultColors,
    bg: defaultColors.gray[100],
    bg_secondary: defaultColors.gray[300],
    primary: defaultColors.gray[800],
    secondary: defaultColors.gray[600]
  }
}
