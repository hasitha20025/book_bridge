import { AiOutlineDashboard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link'
import type { MenuProps } from 'antd';
import { Dropdown as AntDropdown, Dropdown, Space } from 'antd';
import Avatar from './avatar';
import profile_pic from '../../../../public/imges/users/users/pic.jpg'

// Define the dropdown items
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link  href="/dashboard" className="flex gap-2">
        <AiOutlineDashboard className="my-1" /> Dashboard
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href="/dashboard" className="flex gap-2">
        <CiUser className="my-1" /> Profile
      </Link>
    ),
    
  },
  {
    key: '3',
    label: (
      <Link href="/dashboard" className="flex gap-2">
        <CiSettings className="my-1" /> Setting
      </Link>
    ),
  },
  {
    key: '4',
    danger: true,
    label:  (
      <Link href="/dashboard" className="flex gap-2">
        <IoIosLogOut className="my-1" /> Log out
      </Link>
    ),
  },
];

// Define your custom Dropdown component
export default function Profile(  ) {
  return (
    <>
        <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>      
            <Avatar notificatio_num={0} profile_pic={profile_pic.src}/>
          </Space>
        </a>
        </Dropdown>
    </>
  );
}
