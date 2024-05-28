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
                    <div className="flex space-x-2 items-center">
                      <p>Collection</p>
                      <img src={white_down_arrow} />
                    </div>
                    <p>Marketplace</p>
                    <p>ASNGE Token</p>
                    <div className="flex space-x-2 items-center">
                      <p>Media</p>
                      <img src={white_down_arrow} />
                    </div>
                    <p>Metaverse</p>
                    <div className="flex space-x-2 items-center">
                      <p>About</p>
                      <img src={white_down_arrow} />
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

