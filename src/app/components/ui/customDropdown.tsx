'use client';

import { MdArrowDropDown } from "react-icons/md";
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link'


type MenuItem = {
  id: string;
  href: string;
  label: string;
};

type CustomDropdownProps = {
  name: string;
  menuItems: MenuItem[];
};

export default function CustomDropdown({ name, menuItems }: CustomDropdownProps) {
  const items: MenuProps['items'] = menuItems.map((item) => ({
    key: item.id,
    label: (
      <Link   href={`{item.href}`} >
        <span  >{item.label}</span>
      </Link>
    ),
  }));

  return (
    <Dropdown menu={{ items }}>
      <Link href={``} onClick={(e) => e.preventDefault()}>
        <Space className="hover:text-primary">{name}<MdArrowDropDown /></Space>    
      </Link>
    </Dropdown>
  );
}
