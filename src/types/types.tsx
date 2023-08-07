export interface IUser {
    user: string;
    avatar: string;
    tweets: number;
    followers: number;
    id: number;
}

export interface ITheme {
    colors: {
        black: string;
        white: string;
    text: string;
    background: string;
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
    my: string;
  },

  space: number[]

  fonts: {
    body: string;
    heading: string;
    monospace: string;
  },

  fontSizes: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  },

  fontWeights: {
    normal: number;
    bold: number;
  },

  lineHeights: {
    body: number;
    heading: number;
  },

  borders: {
    none: string;
    normal: string;
  },

  radii: {
    none: string;
    normal: string;
    round: string;
  },
}