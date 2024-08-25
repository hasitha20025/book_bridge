'use client';

export default function LongBtn(props: { name: string; fun?: (e: React.MouseEvent<HTMLButtonElement>) => void; className?: string; type?: "button" | "submit" | "reset" | undefined }) {
    return (
        <>
            <button type="button" 
            className= {`bg-white hover:bg-primary hover:text-white hover:shadow-md text-primary border-2 border-primary font-bold py-2 px-20 rounded-lg hover:scale-110 transition ease-in-out delay-100 ${props.className}`}
            onClick={props.fun}
            >           
            {props.name}
            </button>
        </>
    )
}
 