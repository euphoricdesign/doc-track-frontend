import { RiCheckboxCircleFill } from "react-icons/ri";


export const ToastContent = ({message})=> {
  
  
  return (
    <div className="flex items-center justify-start gap-[15px]">
      <RiCheckboxCircleFill className="mr-[8px] text-[45px] " style={{ marginRight: "8px" }} />
      <div className="">
        <p className="text-[20px] font-[500]">Success</p>
        <p>{message}</p>
      </div>
    </div>
  )

};