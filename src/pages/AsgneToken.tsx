import Footer from "../layout/Footer"
import Header from "../layout/Header"
import chaos from "../assets/home/discover/chaos.png"
import graph from "../assets/asgne/graph.png"
import top_border from "../assets/asgne/top-border.png"
import YellowButton from "../components/common/YellowButton"

function AsgneToken() {

  return (
    <>
      <Header />
      <div className="relative">
        <img src={chaos} />
        <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
          <div className="w-fit rounded-[20px] opacity-[62] pt-10 pb-12 pl-14 pr-12 flex space-x-16" style={{boxShadow: "0px 4px 40px 0px #00000026"}}>
            <div className="">
              <p className="font-noto font-normal text-2xl leading-[64px]">Total Balance:</p>
              <p className="font-trispace font-bold text-[40px] leading-[64px]">5,670.00</p>
              <p className="font-noto font-normal text-xl leading-[64px] mb-8">equivalent $398.77</p>
              <YellowButton width={200} height={50} title="Buy ASNGE" />
            </div>
            <div className="flex items-center justify-center opacity-100">
              <div className="relative">
                <img src={graph} />
                <div className="absolute top-0">
                  <img src={top_border} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AsgneToken

