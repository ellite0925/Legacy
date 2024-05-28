import eth from "../../assets/full/card/eth.png"
import eth_yellow from "../../assets/full/card/eth-yellow.png"

interface CardProps {
  image: string;
  title: string;
  eth: string;
  sale?: string;
  isBuyNow?: boolean;
}

function Card(props: CardProps) {
  return (
    <>
      <div className="bg-[#D9E0EC] bg-opacity-20 rounded-xl p-[10px]">
        <img src={props.image} />
        <p className="pt-4 font-trispace font-normal text-base leading-5">{props.title}</p>
        <div className="pt-2 flex items-center space-x-1">
          <img src={eth} />
          <p className="text-[#00AC4F] font-trispace font-medium text-xs leading-3">{props.eth} ETH</p>
        </div>
        <div className="mt-2 w-full h-[1px] bg-[#F4F4F4]"></div>
        {
          props.isBuyNow ? (
            <div className="mt-2 font-news font-normal text-base leading-4 text-center text-[#F38E0C]">Buy Now</div>
          ) : (
            <div className="mt-2 flex items-center">
              <p className="font-trispace font-normal text-xs leading-5 mr-5">Last Sale</p>
              <img className="mr-1" src={eth_yellow} />
              <p className="font-trispace font-normal text-xs leading-5 mr-5 text-[#F38E0C]">{props.sale}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Card;