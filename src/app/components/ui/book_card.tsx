import Image from 'next/image'
import LongBtn from './longBtn';
import { FaClock } from "react-icons/fa";

export default function Book_card(props:{book_name:string; updateTime:string;  image:string;}) {

    function handleClickBook(): void {
        console.log('Login clicked');
    }

  return (
    <>
        <div className="bg-white rounded-md shadow-lg p-4 max-w-xs mx-auto hover: hover:scale-105 transition ease-in-out delay-100">
            <div className="relative w-full h-80 mb-4">
                <Image
                src={props.image}
                alt={`Cover of the book ${props.book_name}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                // width={100}
                // height={200}
                />
            </div>
            <div className=' '>             
                <p className='-mt-3 text-xs text-gray-500 flex items-center justify-end space-x-2 gap-1'>{<FaClock />} {props.updateTime}</p>
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold text-gray-800 my-2">{props.book_name}</p>
                <LongBtn name={'Request'} fun={handleClickBook}/>
            </div>
    </div>
    </>
  )
}
