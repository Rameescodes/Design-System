
interface TypographyPropsType {
    tag:keyof JSX.IntrinsicElements,
    text?:String,
    className?:string,   
    children?:React.ReactNode;
    style?:React.CSSProperties;
    role?:string;
    ariaLabel?:string;
    ariaLabelledBy?:string; 
    

}

export default TypographyPropsType;
 
