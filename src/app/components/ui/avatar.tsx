import { Badge } from 'antd';
import Image from 'next/image'


export default function Avatar(props:{notificatio_num:number; profile_pic:string}) {
    return (
        <>
            <Badge count={props.notificatio_num} className='cursor-pointer'>
                <Image
                    src={props.profile_pic}
                    alt="Logo"
                    width={30}
                    height={30}
                    className='mt-2 w-full h-full object-cover rounded-full border-2 px-1 hover:shadow-md hover:border-primary hover:scale-110 transition ease-in-out delay-100'
                />
            </Badge>
           
        </>
    )
}
