import { Badge } from 'antd';

import Image from 'next/image'
import profile from '../../../../public/imges/users/users/pic.jpg'
export default function Profile() {
    return (
        <>
            <Badge count={1} className='cursor-pointer'>
                <Image
                    src={profile}
                    alt="Logo"
                    width={30}
                    height={30}
                    className='w-full h-full object-cover rounded-full border-2 px-1 hover:shadow-md hover:border-primary hover:scale-110 transition ease-in-out delay-100'
                />
            </Badge>
        </>
    )
}
