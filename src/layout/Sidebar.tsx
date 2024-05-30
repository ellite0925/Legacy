import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import close from "../assets/layout/header/x.svg"

interface CardProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar(props: CardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className={`xl:hidden block py-8 text-black fixed top-0 left-0 h-full w-64 bg-[#F7F9FB] dark:bg-[#F38E0C] z-50 transition-transform duration-300 transform ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end mb-12 mr-4">
          <button onClick={props.closeSidebar}>
            <img src={close} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 relative">
          <div className='group relative'>
            <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Collection")}</p>
            <div className="absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-0 left-[256px] z-20 w-[200px] border-[0.5px] border-black border-opacity-10 dark:text-white" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
              <p className="font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("Collections")}</p>
              <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
              <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("Proof Of Publishing")}</p>
            </div>
          </div>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Marketplace")}</p>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer" onClick={() => {navigate('/asgne_token')}}>{t("ASNGE Token")}</p>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Articles")}</p>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Metaverse")}</p>
          <div className='group relative'>
            <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("About")}</p>
            <div className="absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-0 left-[256px] z-20 w-[200px] border-[0.5px] border-black border-opacity-10 dark:text-white" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
              <p className="font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("About ASNGE Project")}</p>
              <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
              <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("Manifesto")}</p>
              <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
              <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("Partners")}</p>
            </div>
          </div>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("FAQ")}</p>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Connect Wallet")}</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar

