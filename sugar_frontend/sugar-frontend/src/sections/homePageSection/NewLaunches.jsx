import { mbNewLaunch_image, NewLaunch_image } from "../../assets/images/firstSlider_images"
import { MbTitle } from "../../components/MbTitle"
import { Title } from "../../components/Title"


export const NewLaunches = () =>{
    return(
        <section>
          <div className="mobile:hidden tablet:block">
            <Title text={"New Launch"}/>
            <div className="px-10 py-7">
                <img className="rounded-xl" src={NewLaunch_image} alt="NewLaunch_image"/>
            </div>
        </div>  

        <div className="mobile:block tablet:hidden">
            <MbTitle text={"New Launch"}/>
            <div className="px-0 py-3">
                <img className="rounded-xl" src={mbNewLaunch_image} alt="NewLaunch_image"/>
            </div>
        </div>
        </section>
        
    )
}