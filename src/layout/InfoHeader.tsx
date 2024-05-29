import logo from "../assets/layout/header/logo.png";
import divider from "../assets/layout/info_header/divider.png";
import white_down_arrow from "../assets/layout/info_header/white-down-arrow.png";
import underline from "../assets/layout/info_header/underline.png";
import banner from "../assets/layout/info_header/banner.png";

function InfoHeader() {

  return (
    <>
      <div className="relative">
        <img className="w-full" src={banner} />
        <div className="absolute top-0 w-full h-full">
          <div className="h-full flex flex-col">
            <div className="md:container mx-auto flex flex-col flex-none">
              <div className="flex justify-between items-center mt-8 mb-8 text-white">
                <div className="flex space-x-4 items-center">
                  <img src={logo} />
                  <p className="text-4xl font-suburbia font-light leading-6">legacytoken</p>
                </div>
                <div className="flex space-x-6 items-center">
                  <div className="flex space-x-6 items-center text-sm font-trispace font-normal leading-4">
                    <div className="flex items-center relative group">
                      <p className="mr-2">Collection</p>
                      <img src={white_down_arrow} />
                      <div className="text-black dark:text-white absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-6 left-0 z-20 w-[200px] border-[0.5px] border-black border-opacity-10" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
                        <p className="font-trispace font-normal text-sm leading-5 pl-2 py-3">Collections</p>
                        <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                        <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3">Proof Of Publishing</p>
                      </div>
                    </div>
                    <p>Marketplace</p>
                    <p>ASNGE Token</p>
                    <div className="flex items-center relative group">
                      <p className="mr-2">Media</p>
                      <img src={white_down_arrow} />
                      <div className="text-black dark:text-white absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-6 left-0 z-20 w-[200px] border-[0.5px] border-black border-opacity-10" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
                        <p className="font-trispace font-normal text-sm leading-5 pl-2 py-3">Articles</p>
                        <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                        <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3">VIP Gallery</p>
                        <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                        <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3">NFT Games</p>
                      </div>
                    </div>
                    <p>Metaverse</p>
                    <div className="flex items-center relative group">
                      <p className="mr-2">About</p>
                      <img src={white_down_arrow} />
                      <div className="text-black dark:text-white absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-6 left-0 z-20 w-[200px] border-[0.5px] border-black border-opacity-10" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
                        <p className="font-trispace font-normal text-sm leading-5 pl-2 py-3">About ASNGE Project</p>
                        <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                        <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3">Manifesto</p>
                        <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                        <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3">Partners</p>
                      </div>
                    </div>
                    <p>FAQ</p>
                  </div>
                  <div>
                    <img src={divider} />
                  </div>
                  <div className="flex flex-col">
                    <img src={underline} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="h-[1px] w-full bg-[#E4E4EB] flex-none"></div>
              <div className="flex-1 flex justify-center items-center">
                <p className="text-transparent text-[80px] font-semibold leading-[96px]" style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "white"}}>PIXEL Collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoHeader

