import New_Arrival from "@/app/components/new_Arrival";
import Category from "../../components/category";
import Carousels from "../../components/ui/carousels";
import Reviews from "@/app/components/reviews";
import OurTeam from "@/app/components/ourTeam";
import AboutUs from "@/app/components/aboutUs";
import UserFlyer from "@/app/components/ui/userFlyer";

export default function Home() {
  return (
    <>  
        <main>          
            <Carousels/>
            <Category/>
            <New_Arrival/>
            <UserFlyer donater_num={10} request_num={10} book_num={10}/>
            <Reviews/>
            <OurTeam/>
            <AboutUs/>
        </main>
    </>
  )
}
