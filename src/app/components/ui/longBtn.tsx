'use client';

export default function LongBtn(props: { name: string; fun: () => void; className?: string }) {
    return (
        <>
            <button type="button" 
            className= {`bg-white hover:bg-primary hover:text-white hover:shadow-md text-primary border-2 border-primary font-bold py-2 px-24 rounded-lg hover:scale-110 transition ease-in-out delay-100 ${props.className}`}
            onClick={props.fun}
            >           
            {props.name}
            </button>
        </>
    )
}
 