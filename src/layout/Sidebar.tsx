import close from "../assets/layout/header/x.svg"

interface CardProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar(props: CardProps) {

  return (
    <>
      <div className={`xl:hidden block px-4 py-8 text-black fixed top-0 left-0 h-full w-64 bg-[#F7F9FB] z-50 transition-transform duration-300 transform ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end mb-12">
          <button onClick={props.closeSidebar}>
            <img src={close} />
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Collection</p>
          <ul className="pl-4">
            <li>
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Collections</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Proof Of Publishing</p>
            </li>
          </ul>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Marketplace</p>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">ASNGE Token</p>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Media</p>
          <ul className="pl-4">
            <li>
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Articles</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">VIP Gallery</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">NFT Games</p>
            </li>
          </ul>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Metaverse</p>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">About</p>
          <ul className="pl-4">
            <li>
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">About ASNGE Project</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Manifesto</p>
            </li>
            <li className="mt-6">
              <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">Partners</p>
            </li>
          </ul>
          <p className="font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">FAQ</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar

