export default function BoderBtn(props: { name: string; fun?: (e: React.MouseEvent<HTMLButtonElement>) => void; className?: string; type?: "button" | "submit" | "reset" | undefined }) {
    return (
        <>
            <button 
                type={props.type} 
                className={`bg-white hover:bg-primary hover:text-white hover:shadow-md text-primary border-2 border-primary font-bold py-2 px-5 rounded-full hover:scale-110 transition ease-in-out delay-100 ${props.className}`}
                onClick={props.fun}
            >           
                {props.name}
            </button>
        </>
    );
}
