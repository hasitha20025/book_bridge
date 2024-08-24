
import { MdGroups2 } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";

export default function UserFlyer(props: { donater_num: number; request_num: number; book_num: number; }) {
    const size = 100;
  
    return (
      <>
        <section id="usersflyer" className=" text-primary py-8 my-5">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 shadow-md rounded-md bg-yellow-100">
            {/* Donators */}
            <div className="flex flex-col items-center text-center p-4 ">
              <MdGroups2 size={size} />
              <div className="mt-1">
                <p className="text-2xl font-semibold">Donators</p>
                <p className="text-xl font-semibold">{props.donater_num}+</p>
              </div>
            </div>
  
            {/* Requesters */}
            <div className="flex flex-col items-center text-center p-4 ">
              <MdGroups size={size} />
              <div className="mt-1">
                <p className="text-2xl font-semibold">Requesters</p>
                <p className="text-xl font-semibold">{props.request_num}+</p>
              </div>
            </div>
  
            {/* Books */}
            <div className="flex flex-col items-center text-center p-4 ">
              <MdLibraryBooks size={size} />
              <div className="mt-1">
                <p className="text-2xl font-semibold">Books</p>
                <p className="text-xl font-semibold">{props.book_num}+</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }