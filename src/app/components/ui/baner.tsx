export default function Banner(props: { name: string }) {
  return (
    <>
      <div className="flex items-center justify-center text-sm md:text-base text-black bg-yellow-200 py-2 ">
        <p className="px-4 text-center">{props.name}</p>
      </div>
    </>
  );
}
