import { createTools, type Tailwindest } from "tailwindest"

export const tw = createTools<Tailwindest>()


const button = tw.style({
    display: "flex",
    alignItems: "items-center",
    justifyContent: "justify-center",
 
    padding: "p-2",
    borderRadius: "rounded-md",
 
    color: "text-white",
    fontSize: "text-base",
    fontWeight: "font-medium",
 
    backgroundColor: "bg-blue-700",
})
 
const Button = () => {
    return (
            <button className={button.class}>
                <p className="text-yellow-300 text-2xl">Button 1</p>
            </button>
 
    )
}


export default Button