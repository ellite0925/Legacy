import logo from "../assets/layout/header/logo.png";
import discord from "../assets/layout/footer/discord.png";
import instagram from "../assets/layout/footer/instagram.png";
import twitter from "../assets/layout/footer/twitter.png";
import us from "../assets/layout/footer/us.png";
import down_arrow from "../assets/layout/header/down-arrow.png";

function Footer() {

  return (
    <>
      <div className="bg-[#F7F9FB]">
        <div className="md:container mx-auto py-24">
          <p className="font-trispace text-3xl font-medium leading-8">Frequently asked questions</p>
          <div className="mt-12 flex space-x-24 w-full">
            <div className="basis-1/2">
              <div className="bg-[#282828] w-full h-[1px]"></div>
            </div>
            <div className="basis-1/2">
              <div className="bg-[#282828] w-full h-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container mx-auto pt-16 flex flex-col space-y-6">
        <div className="flex justify-between">
          <div className="font-noto font-normal text-base leading-6">
            <div className="flex space-x-5 items-center">
              <img src={logo} />
              <p className="font-suburbia text-5xl font-light leading-6">legacytoken</p>
            </div>
            <div className="mt-8">
              <p>Magna neque cursus cras</p>
              <p>integer vitae a posuere eget.</p>
            </div>
            <div className="mt-5">
              <p>Join our community</p>
            </div>
            <div className="mt-6 flex space-x-4 items-center">
              <img src={discord} />
              <img src={instagram} />
              <img src={twitter} />
            </div>
          </div>
          <div className="flex space-x-32 items-start">
            <div>
              <p className="font-trispace text-xl font-semibold leading-8">Explore</p>
              <p className="font-trispace text-base font-normal leading-6 mt-6">Partners</p>
              <p className="font-trispace text-base font-normal leading-6 mt-5">Contact us</p>
              <p className="font-trispace text-base font-normal leading-6 mt-5">Connect a wallet</p>
            </div>
            <div>
              <p className="font-trispace text-xl font-semibold leading-8">Legal</p>
              <p className="font-trispace text-base font-normal leading-6 mt-6">Privacy Policy</p>
              <p className="font-trispace text-base font-normal leading-6 mt-5">Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-[1px] bg-[#858584]"></div>
          <div className="mt-3.5 flex justify-between items-center">
            <p className="font-noto font-normal text-xs leading-3">Copyrights &copy; 2024 LegacyToken. All rights reserved.</p>
            <div className="flex space-x-1.5 items-center">
              <img src={us} />
              <p className="font-trispace font-normal text-sm leading-4">Eng</p>
              <img src={down_arrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

