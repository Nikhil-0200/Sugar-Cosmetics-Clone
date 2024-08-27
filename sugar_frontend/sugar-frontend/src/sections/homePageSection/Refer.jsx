import { refer, mbRefer } from "../../assets/images/sugarIcons/index"
import { MbTitle } from "../../components/MbTitle"
import { Title } from "../../components/Title"


export const Refer = () =>{
    return(
        <section>
          <div className="mobile:hidden tablet:block">
            <Title text={"REFER YOUR FRIENDS"}/>
            <div className="px-10 py-7">
                <img className="rounded-xl" src={refer} alt="NewLaunch_image"/>
            </div>
        </div>  

        <div className="mobile:block tablet:hidden">
            <MbTitle text={"REFER YOUR FRIENDS"}/>
            <div className="px-0 py-3">
                <img className="rounded-xl" src={mbRefer} alt="NewLaunch_image"/>
            </div>
        </div>
        </section>
        
    )
}