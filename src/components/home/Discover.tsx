import chaos from "../../assets/home/discover/chaos.png";
import chaos_dark from "../../assets/home/discover/chaos-dark.png";
import draft from "../../assets/home/discover/draft.png";
import eth from "../../assets/home/discover/eth.png";
import fox from "../../assets/home/discover/fox.png";

function Discover() {

  return (
    <>
      <div className="relative">
        <img className="dark:hidden w-full absolute top-0 lg:inline lg:relative" src={chaos} />
        <img className="hidden dark:inline w-full" src={chaos_dark} />
        
        <div className="w-full h-full lg:absolute lg:top-0">
          <div className="md:container mx-auto flex z-10 relative h-full items-center flex-row">
            <div className="flex-1 lg:my-0 my-12 items-center md:items-start flex flex-col">
              <p className="mt-4 font-trispace text-3xl md:text-5xl font-normal leading-[45px] tracking-wider text-center md:text-left">Discover, and collect with benefits Digital Art  NFTs </p>
              <p className="mt-6 font-dm text-md md:text-xl font-normal leading-8 text-center md:text-left">Non tempor turpis quisque commodo diam eget aliquet convallis risus. Suspendisse accumsan fringilla volutpat commodo sit fermentum. In nisl.</p>
              <button className="mt-6 w-[200px] h-[50px] rounded-xl bg-[#F38E0C] text-white" style={{boxShadow: "0px 0px 24px 0px #E8A241"}}>Collections</button>
              <div className="mt-6 flex space-x-5 md:space-x-10">
                <div>
                  <div className="flex">
                    <p className="font-trispace text-2xl md:text-5xl font-bold leading-[45px] tracking-wider">1</p>
                    <p className="font-trispace text-2xl md:text-5xl font-normal leading-[45px] tracking-wider">k+</p>
                  </div>
                  <p className="font-noto text-sm md:text-xl font-normal leading-8">Collections</p>
                </div>
                <div>
                  <div className="flex">
                    <p className="font-trispace text-2xl md:text-5xl font-bold leading-[45px] tracking-wider">2</p>
                    <p className="font-trispace text-2xl md:text-5xl font-normal leading-[45px] tracking-wider">k+</p>
                  </div>
                  <p className="font-noto text-sm md:text-xl font-normal leading-8">NFT Stamps</p>
                </div>
                <div>
                  <div className="flex">
                    <p className="font-trispace text-2xl md:text-5xl font-bold leading-[45px] tracking-wider">9</p>
                    <p className="font-trispace text-2xl md:text-5xl font-normal leading-[45px] tracking-wider">k+</p>
                  </div>
                  <p className="font-noto text-sm md:text-xl font-normal leading-8">Creators</p>
                </div>
              </div>
            </div>
            <div className="relative flex-none hidden lg:block">
              <img src={draft} />
              <div className="absolute top-6 left-[95px] text-white">
                <p className="font-noto font-bold text-3xl leading-9">Text NFT</p>
                <div className="mt-2 flex space-x-3 items-center">
                  <img src={fox} />
                  <p className="font-noto font-bold text-xl leading-7">MoonDancer</p>
                </div>
              </div>
              <div className="absolute bottom-6 right-[97px]">
                <div className="w-[353px] h-[73px] rounded-xl bg-white bg-opacity-[20%] px-6 py-3 flex justify-between text-white backdrop-filter backdrop-blur-xl">
                  <div className="flex flex-col space-y-2">
                    <p className="font-noto font-medium text-xs leading-4">Current Price</p>
                    <div className="flex space-x-2 items-center">
                      <img src={eth} />
                      <p className="font-trispace font-bold text-base leading-5">0.25 ETH</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="font-noto font-medium text-xs leading-4">Available</p>
                    <p className="font-trispace font-bold text-base leading-5">12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F9FB] dark:bg-black py-16 flex flex-col items-center">
        <p className="font-trispace font-bold text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl leading-10 text-black dark:text-white">UNPRUNABLE UTXO ART, BECAUSE SATS DON'T EXIST</p>
        <p className="font-trispace font-bold text-xs xs:text-lg sm:text-xl md:text-2xl lg:text-3xl leading-10 text-black dark:text-white">OF NFTS IN A NEW WORK.</p>
        <p className="mt-5 py-2.5 border-b-2 border-[#F38E0C]">Read More</p>
      </div>
    </>
  )
}

export default Discover

