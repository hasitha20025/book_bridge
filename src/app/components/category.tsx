import CustomDropdown from "./ui/customDropdown";

const menuItems = [
    { id: '1', href: 'https://www.antgroup.com', label: '1st menu item' },
    { id: '2', href: 'https://www.aliyun.com', label: '2nd menu item' },
    { id: '3', href: 'https://www.luohanacademy.com', label: '3rd menu item' },
    { id: '4', href: '#', label: 'Log out' },
  ];

export default function Category() {
  return (
    <>
        <h1 className="text-xl font-bold text-center">Book Categorys</h1>
        <div className="flex items-center justify-center">
            <CustomDropdown name="Options" menuItems={menuItems} />
        </div>

    </>
  )
}
