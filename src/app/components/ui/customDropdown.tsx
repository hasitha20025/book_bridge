'use client';

import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

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
      <a target="_blank" rel="noopener noreferrer" href={item.href}>
        {item.label}
      </a>
    ),
  }));

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {name}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
