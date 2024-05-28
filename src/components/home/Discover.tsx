import chaos from "../../assets/home/discover/chaos.png";
import black_letter from "../../assets/home/discover/black-letter.png";
import red_letter from "../../assets/home/discover/red-letter.png";
import cyber from "../../assets/home/discover/cyber.png";

function Discover() {

  return (
    <>
      <div className="lg:h-[532px] xl:h-[900px] relative overflow-hidden">
        <img className="w-full absolute z-0" src={chaos} />
        
        <div className="md:container mx-auto flex justify-between z-10 relative h-full items-center">
          <div className="basis-1/2">
            <p className="mt-4 font-trispace text-5xl font-normal leading-[45px] tracking-wider">Discover, and collect with benefits Digital Art  NFTs </p>
            <p className="mt-6 font-dm text-xl font-normal leading-8">Non tempor turpis quisque commodo diam eget aliquet convallis risus. Suspendisse accumsan fringilla volutpat commodo sit fermentum. In nisl.</p>
            <button className="mt-6 w-[200px] h-[50px] rounded-xl bg-[#F38E0C] text-white" style={{boxShadow: "0px 0px 24px 0px #E8A241"}}>Collections</button>
            <div className="mt-6 flex space-x-10">
              <div>
                <div className="flex">
                  <p className="font-trispace text-5xl font-bold leading-[45px] tracking-wider">1</p>
                  <p className="font-trispace text-5xl font-normal leading-[45px] tracking-wider">k+</p>
                </div>
                <p className="font-noto text-xl font-normal leading-8">Collections</p>
              </div>
              <div>
                <div className="flex">
                  <p className="font-trispace text-5xl font-bold leading-[45px] tracking-wider">2</p>
                  <p className="font-trispace text-5xl font-normal leading-[45px] tracking-wider">k+</p>
                </div>
                <p className="font-noto text-xl font-normal leading-8">NFT Stamps</p>
              </div>
              <div>
                <div className="flex">
                  <p className="font-trispace text-5xl font-bold leading-[45px] tracking-wider">9</p>
                  <p className="font-trispace text-5xl font-normal leading-[45px] tracking-wider">k+</p>
                </div>
                <p className="font-noto text-xl font-normal leading-8">Creators</p>
              </div>
            </div>
          </div>
          <div className="relative flex-none">
            <img className="absolute z-0 w-[310px] h-[342px]" src={cyber} />
            <img className="absolute z-10 w-[356px] h-[392px]" src={red_letter} />
            <img className="absolute z-20 w-[400px] h-[440px]" src={black_letter} />
          </div>
        </div>
      </div>
      <div className="bg-[#F7F9FB] py-16 flex flex-col items-center">
        <p className="font-trispace font-bold text-3xl leading-10">UNPRUNABLE UTXO ART, BECAUSE SATS DON'T EXIST</p>
        <p className="font-trispace font-bold text-3xl leading-10">OF NFTS IN A NEW WORK.</p>
        <p className="mt-5 py-2.5 border-b-2 border-[#F38E0C]">Read More</p>
      </div>
    </>
  )
}

export default Discover

