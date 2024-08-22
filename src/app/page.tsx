import Category from "./components/category";
import Baner from "./components/ui/baner";
import Carousels from "./components/ui/carousels";
import UserNavbar from "./components/ui/userNavbar";


export default function App() {
  return (
    <main className="">
        <Baner name={"Sri Lanka #1 Book sharing platform"} />
        <UserNavbar/>       
        <Carousels/>
        <Category/>

    </main>
  );
}
