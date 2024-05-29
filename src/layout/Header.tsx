import logo from "../assets/layout/header/logo.png";
import divider from "../assets/layout/header/divider.png";
import down_arrow from "../assets/layout/header/down-arrow.png";
import down_arrow_dark from "../assets/layout/header/down-arrow-dark.png";
import underline from "../assets/layout/header/underline.png";
import underline_dark from "../assets/layout/header/underline-dark.png";
import menu from "../assets/layout/header/menu.svg"

interface HeaderProps {
  closeSidebar?: () => void
}

function Header(props: HeaderProps) {

  return (
    <>
      <div className="md:container mx-auto flex flex-col px-0 md:px-0">
        <div className="flex justify-between items-center mt-8 mb-8 px-2 md:px-0">
          <div className="flex space-x-2 md:space-x-4 items-center">
            <img className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]" src={logo} />
            <p className="text-2xl md:text-4xl font-suburbia font-light leading-6">legacytoken</p>
          </div>
          <div className="flex space-x-2 md:space-x-6 items-center">
            <button className="block xl:hidden" onClick={() => {
              if (props.closeSidebar != undefined)
                props.closeSidebar()
            }}>
              <img src={menu} />
            </button>
            <div className="space-x-6 items-center text-sm font-trispace font-normal leading-4 hidden xl:flex">
              <div className="flex items-center relative group">
                <p className="mr-2">Collection</p>
                <img className="inline dark:hidden" src={down_arrow} />
                <img className="hidden dark:inline" src={down_arrow_dark} />
                <div className="absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-6 left-0 z-20 w-[200px] border-[0.5px] border-black border-opacity-10" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
                  <p className="font-trispace font-normal text-sm leading-5 pl-2 py-3">Collections</p>
                  <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                  <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3">Proof Of Publishing</p>
                </div>
              </div>
              <p>Marketplace</p>
              <p>ASNGE Token</p>
              <div className="flex items-center relative group">
                <p className="mr-2">Media</p>
                <img className="inline dark:hidden" src={down_arrow} />
                <img className="hidden dark:inline" src={down_arrow_dark} />
                <div className="absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-6 left-0 z-20 w-[200px] border-[0.5px] border-black border-opacity-10" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
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
                <img className="inline dark:hidden" src={down_arrow} />
                <img className="hidden dark:inline" src={down_arrow_dark} />
                <div className="absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-6 left-0 z-20 w-[200px] border-[0.5px] border-black border-opacity-10" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
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
              <img className="inline dark:hidden" src={underline} />
              <img className="hidden dark:inline" src={underline_dark} />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#E4E4EB]"></div>
      </div>
    </>
  )
}

export default Header

