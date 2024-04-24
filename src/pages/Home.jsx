import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  return (
    <div style={{ backgroundColor: '#faf0ca'}}>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </div>
  )
}

export default Home