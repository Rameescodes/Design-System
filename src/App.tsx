import './App.css'
import Button from './components/atoms/typography/button/Button'
import Typography from './components/atoms/typography/Typography'
import viteLogo from "/vite.svg"


function App() {
  const handleOnClick = () => {
    alert("clicked");

  };

  return (  
    <>
      <Typography tag="p" text='button component icon on the right side' className='mb-5'/>

      <Button   
        type="button"
        classes="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" 
        onClick={handleOnClick}
        autoFocus>
        subscribe to my website
        <img src={viteLogo}  className="w-5 h-5 ml-2"  alt=''/>
      </Button>

      <hr className='my-5'/> 

      <Typography tag="p" text='button component icon on the left side' className='mb-5'/>

      <Button 
        type="button"
        classes="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" 
        autoFocus>
        <img src={viteLogo}  className="w-5 h-5 mr-2"  alt=''/>
        subscribe to my website
      </Button>
      <hr className='my-5'/> 

      <Button 
  type="submit"
  className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
>
  make payment
</Button>

 </>
  )   
}

export default App
