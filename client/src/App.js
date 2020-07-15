import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav";
import CardPlanning from "./components/CardPlanning";
import CardIndv from "./components/CardIndv";
import CardBudget from "./components/CardBudget";
import CardItinerary from "./components/CardItinerary";
import CardSignin from "./components/CardSignIn"







import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#C8E6C9',
      main: '#4CAF50',
      dark: '#2E7D32',
      contrastText: '#fff'
    },
    secondary: {
      light: '#EF9A9A',
      main: '#F44336',
      dark: '#C62828',
      contrastText: '#000'
    },
    openTitle: green['400'],
    protectTitle: red['400'],
    type: 'dark'
  }
});

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <MuiThemeProvider theme={theme}>
//           <Routes>
//             <Nav />
//             <CardPlanning />
//           </Routes>
//         </MuiThemeProvider>
//       </BrowserRouter>
//     );
//   }



function App() {
  return (
    <div>
      <Nav />
      <CardSignin />
      <CardPlanning />
      <CardBudget />
      <CardItinerary />
      <CardIndv />


    </div>
  );
}


export default App;