
interface YellowButtonProps {
  title: string;
  width?: number;
  height: number;
  shadow?: boolean;
  fullWidth?: boolean;
}

function YellowButton(props: YellowButtonProps) {
  return (
    <>
      <button className={`bg-[#F38E0C] rounded-[10px] font-news font-normal text-lg leading-5 ${props.fullWidth ? "w-full" : `w-[${props.width}px]`} h-[${props.height}px] text-white`} style={{boxShadow: `${props.shadow ? "0px 0px 24px 0px #E8A241" : ""}`}}>
        {props.title}
      </button>
    </>
  )
}

export default YellowButton;