import logo from "../assets/layout/header/logo.png";
import discord from "../assets/layout/footer/discord.png";
import instagram from "../assets/layout/footer/instagram.png";
import twitter from "../assets/layout/footer/twitter.png";
import discord_dark from "../assets/layout/footer/discord-dark.png";
import instagram_dark from "../assets/layout/footer/instagram-dark.png";
import twitter_dark from "../assets/layout/footer/twitter-dark.png";
import us from "../assets/layout/footer/us.png";
import down_arrow from "../assets/layout/header/down-arrow.png";
import LegacyAccordion from "../components/layout/footer/LegacyAccordion";

function Footer() {

  return (
    <>
      <div className="bg-[#F7F9FB] dark:bg-[#F38E0C]">
        <div className="md:container mx-auto py-12 md:py-24 text-black dark:text-black">
          <p className="font-trispace text-xl md:text-3xl font-medium leading-8 pl-4 md:pl-0">Frequently asked questions</p>
          <div className="mt-12 flex space-y-12 md:space-y-0 md:space-x-24 w-full flex-col md:flex-row">
            <div className="md:basis-1/2 basis-1">
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="How do I register?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="What is LegacyToken?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="How do I place a bid?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
            </div>
            <div className="basis-1/2">
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="Why do I need to verify my identity?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="What is on NFTs?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="How can I buy ETH?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container mx-auto pt-16 flex flex-col space-y-6">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="font-noto font-normal text-base leading-6">
            <div className="flex space-x-5 items-center justify-center md:justify-start">
              <img src={logo} />
              <p className="font-suburbia text-2xl md:text-5xl font-light leading-6">legacytoken</p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center md:block">
              <p>Magna neque cursus cras</p>
              <p>integer vitae a posuere eget.</p>
            </div>
            <div className="mt-5 flex justify-center md:block">
              <p>Join our community</p>
            </div>
            <div className="mt-6 flex space-x-4 items-center justify-center md:justify-start">
              <img className="inline dark:hidden" src={discord} />
              <img className="inline dark:hidden" src={instagram} />
              <img className="inline dark:hidden" src={twitter} />
              <img className="hidden dark:inline" src={discord_dark} />
              <img className="hidden dark:inline" src={instagram_dark} />
              <img className="hidden dark:inline" src={twitter_dark} />
            </div>
          </div>
          <div className="flex space-x-8 md:space-x-32 items-start justify-center mt-12 md:mt-0">
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
          <div className="w-full h-[1px] bg-[#858584] dark:bg-[#525253]"></div>
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

