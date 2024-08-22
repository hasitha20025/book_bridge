

export default function RoundBtn(props: { name: string; fun: () => void }) {
    return (
        <>
            <button type="button" 
            className="bg-primary hover:primary_hover_alt hover:shadow-md text-white border-2 border-primary font-bold py-2 px-5 rounded-full hover:scale-110 transition ease-in-out delay-100"
            onClick={props.fun}
            >           
            {props.name}
            </button>
        </>
    )
}
