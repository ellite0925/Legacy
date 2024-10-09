
function Card() {
  return (
    <>
      <div className="w-[368px] h-[461px] rounded-lg bg-[#FCFCFC] pt-1 flex flex-col">
        <img className="flex-none w-[368px] h-[264px]" src="/src/assets/rituales/card_img.png" />
        <div className="flex-1 pl-5 pr-6 pt-2 pb-7 flex flex-col justify-between">
          <div className="flex space-x-3">
            <div className="bg-[#D0D0D0] rounded-md w-20 h-6"></div>
            <div className="bg-[#D0D0D0] rounded-md w-20 h-6"></div>
          </div>
          <div className="pb-[3px]">
            <p className="font-semibold text-base">Nombre del producto</p>
            <p className="w-[200px] truncate text-sm mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            {/* star starts */}
            {/* star ends */}
          </div>
          <div className="ml-auto px-3 py-1 text-white text-sm rounded-md bg-[#A77FE0] opacity-50">
            Comprar - € 17,00
          </div>
        </div>
      </div>
    </>
  )
}

export default Card

