import ButtonProps from "./type"
import classNames  from "classnames"

const Button:React.FC<ButtonProps> = ({
  varient,
  VarientType="filled",
  children,
  type,
  classes,
  onClick,
  isLoading,
  ...restProps 
 }) => {
  //classes
  const btnClasses = classNames("py-2 px-4 rounded cursor-pointer ", {
    "bg-primary text-white font-bold" : varient === "primary" && VarientType === "filled",
    "bg-secondary text-white font-bold" : varient === "secondary" && VarientType === "filled",
    "bg-tertiary text-white font-bold" : varient === "tertiary"&& VarientType === "filled",
    "border-2 border-primary text-white font-bold":varient === "primary" && VarientType==="outline",
    "border-2 border-secondary text-white font-bold":varient === "secondary" && VarientType==="outline",
    "border-2 border-tertiary text-white font-bold":varient === "tertiary" && VarientType==="outline",
    "cursor-not-allowed capacity-50" : isLoading,




  },classes)

  return (
      <button type= {type} className={btnClasses}onClick={onClick} {...restProps}>
       
        <span className="flex items-center justify-center gap-3">
        {children}
        {isLoading && (
          <span className="border-green-300 h3 w-3 rounded-full animate-spin border-8 border-t-blue-600 "></span>
        )} 
        </span>
      </button> 
  )
}

export default Button 
  