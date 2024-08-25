

export default function RoundBtn(props: { name: string; fun?: (e: React.MouseEvent<HTMLButtonElement>) => void; className?: string; type?: "button" | "submit" | "reset" | undefined }) {
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
