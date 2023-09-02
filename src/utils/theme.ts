import { Typography } from '@mui/material';

import { Roboto } from 'next/font/google';
import { createTheme , responsiveFontSizes} from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
export let theme = createTheme({
  typography : {
    fontFamily : 'Heebo, sans-serif'
  },
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#19857b',
      light : '#EDF7FA'
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer :{
      defaultProps : { 
        maxWidth :'md'
      },
      styleOverrides : {
       maxWidthSm:{
        '@media(min-width:600)': {
          maxwidth : '680px'
        }
       },
       maxWidthMd:{
        '@media(min-width:900)': {
          maxwidth : '860px'
        }
       }
      }

    },
    MuiLink :{
      defaultProps : {
        underline : 'hover',
      },
     styleOverrides : {
        root : {
          color : '#000000',
          "&:hover,&.active": {
            color: "#FF6464",
          },
          cursor : 'pointer'
        },
     }
    },
    MuiButton : {
      variants : [
          {
            props : {color : 'primary', },
            style : {color : 'white' , backgroundColor : '#FF6464'}
          }
      ],
      styleOverrides : {
        root : {
        '&:hover' : {
          opacity : 0.9,
          backgroundColor : '#FF6464',
        }}
      }
    },
    MuiChip : {
      styleOverrides : {
        root : {
          paddingInline : 2
        }
      },
      variants : [
         {
          props : {color : 'secondary' },
          style : {color : 'white' , backgroundColor : '#142850',fontSize : '16px' , fontWeight : 'bold'}
         }
       ]
    }
  },
});
theme = responsiveFontSizes(theme);