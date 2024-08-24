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
      <section id="category">
        <h1 className="  text-center text-text my-8 text-2xl md:text-4xl font-bold leading-tight">Book Categories</h1>
        <div className="flex flex-wrap items-center justify-center gap-3">

          <CustomDropdown name="Fiction" menuItems={Fiction} />
          <CustomDropdown name="Non-Fiction" menuItems={Non_Fiction} />
          <CustomDropdown name="Reference" menuItems={Reference} />
          <CustomDropdown name="Academic" menuItems={Academic_and_Educational} />
          <CustomDropdown name="Others" menuItems={Others} />
          <CustomDropdown name="Hobbies" menuItems={Hobbies} />
          <CustomDropdown name="Pre School" menuItems={PreSchool} />
          <CustomDropdown name="Grade 1 to 5" menuItems={Grade_1_5} />
          <CustomDropdown name="Grade 6 to 9" menuItems={Grade_6_9} />
          <CustomDropdown name="O/L" menuItems={O_L} />
          <CustomDropdown name="A/L" menuItems={A_L} />
        </div>
      </section>
    </>
  );
}
