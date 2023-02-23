import classes from "./App.module.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Hero/>
      <Features/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
