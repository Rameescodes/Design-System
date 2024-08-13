import Typography from "../Typography"
const index = () => {
  return (
    <div>
      <Typography tag='h1' text="Welcome to the code world" className='title'
       style={{ fontSize:"30px", color:"blue" }}
       role = "heading"
       ariaLabel="welcom to hello world"
       ariaLabelledBy="title"
       
       />
      <span>Nice to meet you</span>
      <Typography tag='h2' text="Keep happy"/>
      <Typography tag="p" text="This is a paragraph." />
    </div>
  )
}

export default index
