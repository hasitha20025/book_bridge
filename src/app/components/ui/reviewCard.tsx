import Image from 'next/image';
import { IoCalendarOutline } from "react-icons/io5";

export default function ReviewCard(props: { name: string; comment: string; image: string; date: string }) {
  return (
    <div className="border-2 border-slate-200 shadow-md rounded-md p-4 w-80 h-48"> {/* Fixed width and height */}
      <div className='flex items-center'>
        <Image
          src={props.image}
          alt="user profile"
          width={40}
          height={40}
          className='rounded-full border-2 border-slate-200 px-1'
        />
        <div className='ml-4' >
            <p className=' text-lg font-semibold'>{props.name}</p> 
            <p className='text-xs text-gray-500 flex gap-1'>{<IoCalendarOutline size={15} />} {props.date}</p> 
        </div>                
      </div>
      
      <p className='mt-2 text-gray-700 text-sm sm:text-base'>{props.comment}</p>
      
    </div>
  );
}
