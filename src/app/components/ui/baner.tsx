

export default function Baner(Props:{name:string}) {
  return (
    <>
      <div className="flex items-center justify-center text-sm text-black bg-yellow-200 py-1 my-0  shadow-md">
        <p>{Props.name}</p>
      </div>
    </>
  )
}
