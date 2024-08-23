import CustomDropdown from "./ui/customDropdown";
import categoryData from '../data/bookCategoryData/category.json';

export default function Category() {
  const {
    Fiction,
    Non_Fiction,
    Reference,
    Academic_and_Educational,
    Others,
    Hobbies,
    PreSchool,
    Grade_1_5,
    Grade_6_9,
    O_L,
    A_L
  } = categoryData;

  return (
    <>
      <h1 className="text-xl font-bold text-center text-text my-5">Book Categories</h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <CustomDropdown name="Fiction" menuItems={Fiction} />
        <CustomDropdown name="Non-Fiction" menuItems={Non_Fiction} />
        <CustomDropdown name="Reference" menuItems={Reference} />
        <CustomDropdown name="Academic & Educational" menuItems={Academic_and_Educational} />
        <CustomDropdown name="Others" menuItems={Others} />
        <CustomDropdown name="Hobbies" menuItems={Hobbies} />
        <CustomDropdown name="Pre-School" menuItems={PreSchool} />
        <CustomDropdown name="Grade 1-5" menuItems={Grade_1_5} />
        <CustomDropdown name="Grade 6-9" menuItems={Grade_6_9} />
        <CustomDropdown name="O/L" menuItems={O_L} />
        <CustomDropdown name="A/L" menuItems={A_L} />
      </div>
    </>
  );
}
