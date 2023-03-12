import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      content: string;
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  }
}

export { DefaultTheme };
