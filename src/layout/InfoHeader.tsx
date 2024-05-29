import logo from "../assets/layout/header/logo.png";
import divider from "../assets/layout/info_header/divider.png";
import divider_dark from "../assets/layout/info_header/divider-dark.png";
import white_down_arrow from "../assets/layout/info_header/white-down-arrow.png";
import underline from "../assets/layout/info_header/underline.png";
import banner from "../assets/layout/info_header/banner.png";
import menu from "../assets/layout/header/menu.svg"
import menu_dark from "../assets/layout/header/menu-dark.svg"

interface InfoHeaderProps {
  closeSidebar?: () => void
}

function InfoHeader(props: InfoHeaderProps) {

  return (
    <>
      <div className="relative">
        <img className="hidden lg:inline w-full" src={banner} />
        <div className="relative lg:absolute top-0 w-full h-full">
          <div className="flex flex-col h-full">
            <img className="inline lg:hidden w-full absolute z-0 md:h-[114px] h-[105px]" src={banner} />
            <div className="md:container mx-auto flex-none px-2 md:px-0 w-full relative z-20">
              <div className="flex justify-between items-center mt-8 mb-8 text-white">
                <div className="flex space-x-4 items-center">
                  <img className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]" src={logo} />
                  <p className="text-2xl md:text-4xl font-suburbia font-light leading-6">legacytoken</p>
                </div>
                <div className="flex space-x-2 md:space-x-6 items-center">
                  <button className="block xl:hidden" onClick={() => {
                    if (props.closeSidebar != undefined)
                      props.closeSidebar()
                  }}>
                    {/* <img className="inline dark:hidden" src={menu} /> */}
                    <img className="" src={menu_dark} />
                  </button>
                  <div className="hidden xl:flex space-x-6 items-center text-sm font-trispace font-normal leading-4">
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
                    <img className="inline dark:hidden" src={divider} />
                    <img className="hidden dark:inline" src={divider_dark} />
                  </div>
                  <div className="flex flex-col">
                    <img src={underline} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col z-20">
              <div className="h-[1px] w-full bg-[#E4E4EB] flex-none"></div>
              <div className="flex-1 flex justify-center items-center">
                <p className="hidden lg:block text-transparent text-5xl md:text-7xl lg:text-[80px] font-semibold leading-[96px] mt-12 md:mt-24 lg:mt-0" style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "white"}}>PIXEL Collection</p>
            <p className="block lg:hidden text-transparent text-5xl md:text-7xl lg:text-[80px] font-semibold leading-[96px] mt-12 md:mt-24 lg:mt-0" style={{
        WebkitTextStrokeWidth: "1px",
        WebkitTextStrokeColor: "black"}}>PIXEL Collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoHeader

