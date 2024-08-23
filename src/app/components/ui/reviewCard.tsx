import Image from 'next/image';
import { FaClock } from "react-icons/fa";

export default function ReviewCard(props: { name: string; comment: string; image: string; date: string }) {
  return (
    <div className="border-2 border-slate-200 shadow-md rounded-md p-4 w-64 h-48"> {/* Fixed width and height */}
      <div className='flex items-center'>
        <Image
          src={props.image}
          alt="user profile"
          width={40}
          height={40}
          className='rounded-full border-2 border-slate-200 px-1'
        />
        <p className='ml-4 text-lg font-semibold'>{props.name}</p>
      </div>
      <p className='mt-2 text-gray-700 text-sm sm:text-base'>{props.comment}</p>
      <div className='mt-4 text-xs text-gray-500 flex items-center justify-end gap-1'>
        <FaClock size={12} />   
        <p> {props.date}</p>
      </div>
    </div>
  );
}
