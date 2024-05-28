import logo from "../assets/layout/header/logo.png";
import divider from "../assets/layout/header/divider.png";
import down_arrow from "../assets/layout/header/down-arrow.png";
import underline from "../assets/layout/header/underline.png";

function Header() {

  return (
    <>
      <div className="md:container mx-auto flex flex-col">
        <div className="flex justify-between items-center mt-8 mb-8">
          <div className="flex space-x-4 items-center">
            <img src={logo} />
            <p className="text-4xl font-suburbia font-light leading-6">legacytoken</p>
          </div>
          <div className="flex space-x-6 items-center">
            <div className="flex space-x-6 items-center text-sm font-trispace font-normal leading-4">
              <div className="flex space-x-2 items-center">
                <p>Collection</p>
                <img src={down_arrow} />
              </div>
              <p>Marketplace</p>
              <p>ASNGE Token</p>
              <div className="flex space-x-2 items-center">
                <p>Media</p>
                <img src={down_arrow} />
              </div>
              <p>Metaverse</p>
              <div className="flex space-x-2 items-center">
                <p>About</p>
                <img src={down_arrow} />
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
        <div className="h-[1px] w-full bg-[#E4E4EB]"></div>
      </div>
    </>
  )
}

export default Header

