import New_Arrival from "@/app/components/new_Arrival";
import Category from "../../components/category";
import Carousels from "../../components/ui/carousels";

export default function Home() {
  return (
    <>  
        <main>          
            <Carousels/>
            <Category/>
            <New_Arrival/>
        </main>
    </>
  )
}
