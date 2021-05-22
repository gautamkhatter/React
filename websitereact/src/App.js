import React from 'react';
import NavBar from './Navbar';
import Start from './StartSection';
import Main from './MainSection';
import Card from './CardSection';
import Footer from './Footer';

const App = () => {
   return (
      <div>
         <NavBar />
         <Start />
         <Main />
         <Card />
         <Footer />
      </div>
   )
}

export default App;
