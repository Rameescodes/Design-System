type ButtonVarient = "primary" | "secondary" | "tertiary"
type ButtonVarientType = "outline" | "filled"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    varient?:ButtonVarient;
    VarientType?:ButtonVarientType
    classes?:string,
    isLoading?:boolean
}
export default ButtonProps