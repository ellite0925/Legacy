import Footer from "../layout/Footer"
import Header from "../layout/Header"
import chaos from "../assets/home/discover/chaos.png"
import collection from "../assets/single/collection.png"
import creator from "../assets/single/creator.png"
import tetris from "../assets/single/tetris.png"
import copy_icon from "../assets/single/copy-icon.png"
import like from "../assets/single/like.png"
import download from "../assets/single/download.png"
import twitter from "../assets/single/twitter.png"
import copy from "../assets/single/copy.png"
import YellowButton from "../components/common/YellowButton"

function SingleStamp() {

  return (
    <>
      <Header />
      <div className="relative">
        <img src={chaos} className="w-full absolute z-0" />
        <div className="w-full h-full relative z-10">
          <div className="md:container mx-auto py-16">
            <p className="font-trispace font-medium text-4xl leading-[46px]">Stamp 67114 A10028994648006722000</p>
            <p className="mt-3 font-noto font-normal text-2xl leading-9">Total Volume: 0.00567000 $398.77</p>
            <div className="mt-9 flex space-x-12">
              <div className="basis-1/2">
                <div className="flex space-x-5">
                  <div className="basis-1/2 flex space-x-4">
                    <div className="flex-none">
                      <img src={collection} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="font-noto font-normal text-base leading-6 text-[#636363]">Collection</p>
                      <p className="font-trispace font-bold text-xl leading-6">PIXEL</p>
                    </div>
                  </div>
                  <div className="basis-1/2 flex space-x-4">
                    <div className="flex-none">
                      <img src={creator} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="font-noto font-normal text-base leading-6 text-[#636363]">Creator</p>
                      <p className="font-trispace font-bold text-xl leading-6">1K6x...JyQ9bFE</p>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-[#636363] font-normal text-base leading-6">Magna montes pharetra ac libero non aliquet. Orci neque mi justo scelerisque in. Nibh amet egestas mattis at consectetur vulputate lacus nisi molestie. </p>
                <div className="mt-8 flex space-x-10">
                  <div className="basis-1/2 flex flex-col space-y-2 items-center">
                    <p className="font-noto font-normal text-base leading-7">Current Price</p>
                    <div className="flex justify-between w-full">
                      <p className="text-[#F38E0C] font-trispace text-[26px] leading-[31px]">0.25 ETH</p>
                      <p className="font-trispace text-[20px] leading-[29px]">($3,429.65)</p>
                    </div>
                  </div>
                  <div className="basis-1/2 flex flex-col space-y-2 items-center">
                    <p className="font-noto font-normal text-base leading-7">Top Offer</p>
                    <div className="flex justify-between w-full">
                      <p className="text-[#F38E0C] font-trispace text-[26px] leading-[31px]">0.15 ETH</p>
                      <p className="font-trispace text-[20px] leading-[29px]">($3,070.43)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <YellowButton title="Connect To MINT" height={50} fullWidth shadow />
                </div>
                <div className="mt-8 rounded-xl bg-[#D9E0EC] bg-opacity-20 border-2 border-opacity-50 border-[#F2F2F2] p-6 flex flex-col space-y-[10px]">
                  <p className="font-news font-bold text-2xl leading-7 opacity-100">
                    Information
                  </p>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Stamp number</p>
                    <p className="font-trispace font-normal text-base leading-6">#67114</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Asset Name</p>
                    <div className="flex space-x-2 items-center">
                      <p className="font-trispace font-normal text-base leading-6">A10028994648006722000</p>
                      <img src={copy_icon} />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Issuer</p>
                    <div className="flex space-x-2 items-center">
                      <p className="font-trispace font-normal text-base leading-6">1K6xT...3Rggi</p>
                      <img src={copy_icon} />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Total Supply</p>
                    <p className="font-trispace font-normal text-base leading-6">13</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Divisible</p>
                    <p className="font-trispace font-normal text-base leading-6">No</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Locked</p>
                    <p className="font-trispace font-normal text-base leading-6">Yes</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">keyburn</p>
                    <p className="font-trispace font-normal text-base leading-6">No</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Block</p>
                    <div className="flex space-x-2 items-center">
                      <p className="font-trispace font-normal text-base leading-6">794220</p>
                      <img src={copy_icon} />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Destructions</p>
                    <p className="font-trispace font-normal text-base leading-6">x8</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">Transaction</p>
                    <div className="flex space-x-2 items-center">
                      <p className="font-trispace font-normal text-base leading-6">9ad0b...5ab5b</p>
                      <img src={copy_icon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <img src={tetris} className="w-full" />
                <div className="mt-8 flex justify-between items-center">
                  <p className="font-noto font-normal text-base leading-7">Views: 10k</p>
                  <div className="flex space-x-4">
                    <img src={like} />
                    <img src={download} />
                    <img src={twitter} />
                    <img src={copy} />
                  </div>
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

export default SingleStamp

