export const Title = ({text}) =>{
    return(
        <div className="flex justify-center items-center">
            <hr className="border-[1.5px] border-[#FC2779] w-[2.8%]"/>
            <h1 className="px-4 font-bold uppercase text-[20px]">
               {text}
            </h1>
            <hr className="border-[1.5px] w-[2.8%] border-[#FC2779]" />
        </div>
    )
}