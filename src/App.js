import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

const styles = {
    portBody: {
        backgroundColor: '#ffffff10',
        backdropFilter: 'blur(12px)',
    },
    mainBody: {
      height: '100vh'
    }
}

function App() { 
  return (
    <div  className="d-flex flex-column h-100 text-white">
        <main className="shadow-lg rounded-3 m-5 mt-0 flex-shrink-0" style={styles.portBody}>
        <PortfolioContainer />
        </main>
        <Footer />
    </div>
  )
};

export default App;
