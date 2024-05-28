import Discover from "../components/home/Discover"
import Trending from "../components/home/Trending"
import Footer from "../layout/Footer"
import Header from "../layout/Header"

function HomePage() {

  return (
    <>
      <Header />
      <Discover />
      <Trending />
      <Footer />
    </>
  )
}

export default HomePage

