import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown as AntDropdown, Dropdown, Space } from 'antd';
import Avatar from './avatar';
import profile_pic from '../../../../public/imges/users/users/pic.jpg'

// Define the dropdown items
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
  {
    key: '4',
    danger: true,
    label: 'Log out',
  },
];

// Define your custom Dropdown component
export default function CustomDropdown(  ) {
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
