import { useTranslation } from 'react-i18next';
import close from "../assets/layout/header/x.svg"

interface CardProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar(props: CardProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className={`xl:hidden block px-4 py-8 text-black fixed top-0 left-0 h-full w-64 bg-[#F7F9FB] dark:bg-[#F38E0C] z-50 transition-transform duration-300 transform ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end mb-12">
          <button onClick={props.closeSidebar}>
            <img src={close} />
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Collection")}</p>
          <ul className="pl-4">
            <li>
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Collections")}</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Proof Of Publishing")}</p>
            </li>
          </ul>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Marketplace")}</p>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("ASNGE Token")}</p>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Media")}</p>
          <ul className="pl-4">
            <li>
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Articles")}</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("VIP Gallery")}</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("NFT Games")}</p>
            </li>
          </ul>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Metaverse")}</p>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("About")}</p>
          <ul className="pl-4">
            <li>
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("About ASNGE Project")}</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Manifesto")}</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Partners")}</p>
            </li>
          </ul>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("FAQ")}</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar

