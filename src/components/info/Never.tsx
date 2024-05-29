import yellow_star from "../../assets/info/never/yellow-star.png";
import orange_star from "../../assets/info/never/orange-star.png";
import black_star from "../../assets/info/never/black-star.png";
import YellowButton from "../common/YellowButton";

function Never() {

  return (
    <>
      <div className="md:container mx-auto py-24">
        <div className="px-2 flex flex-col items-center border-[#D7D7D7] dark:border-white dark:border-opacity-20 border-2 rounded-[32px] py-16 relative">
          <div className="flex justify-center">
            <p className="font-trispace font-semibold text-[53px] leading-[64px]">Never&nbsp;</p>
            <p className="font-trispace font-semibold text-[53px] leading-[64px] text-[#F38E0C]">miss a drop!</p>
          </div>
          <p className="mt-5 font-noto font-normal text-lg leading-7 text-[#636363] dark:text-[#ECECEC]">Subscribe to our super-rare and exclusive drops & collectibles.</p>
          <div className="flex space-x-3 mt-9">
            <input className="bg-[#F7F9FB] dark:bg-[#3C3E41] rounded-[50px] pl-6 w-[300px]" type="text" placeholder="Enter your email" />
            <YellowButton width={200} height={50} title="Subscribe" shadow />
          </div>
          <img className="absolute left-[4%] bottom-[25%]" src={yellow_star} />
          <img className="absolute left-[13%] bottom-[12%]" src={orange_star} />
          <img className="absolute top-[12%] right-[8%]" src={black_star} />
        </div>
      </div>
    </>
  )
}

export default Never

