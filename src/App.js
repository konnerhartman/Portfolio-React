import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

const styles = {
    portBody: {
        backgroundColor: '#ffffff10',
        backdropFilter: 'blur(12px)',
    }
}

function App() { 
  return (
    <div>
        <div className="shadow-lg rounded-3 m-5 mt-0" style={styles.portBody}>
        <PortfolioContainer />
        </div>
        <Footer />
    </div>
  )
};

export default App;
