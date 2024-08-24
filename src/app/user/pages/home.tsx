import New_Arrival from "@/app/components/new_Arrival";
import Category from "../../components/category";
import Carousels from "../../components/ui/carousels";
import Reviews from "@/app/components/reviews";
import OurTeam from "@/app/components/ourTeam";
import AboutUs from "@/app/components/aboutUs";

export default function Home() {
  return (
    <>  
        <main>          
            <Carousels/>
            <Category/>
            <New_Arrival/>
            <Reviews/>
            <OurTeam/>
            <AboutUs/>
        </main>
    </>
  )
}
