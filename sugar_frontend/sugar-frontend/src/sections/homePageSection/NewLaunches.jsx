import { NewLaunch_image } from "../../assets/images/firstSlider_images"
import { Title } from "../../components/Title"


export const NewLaunches = () =>{
    return(
        <div>
            <Title text={"New Launches"}/>
            <div className="px-10 py-7">
                <img className="rounded-xl" src={NewLaunch_image} alt="NewLaunch_image"/>
            </div>
        </div>
    )
}