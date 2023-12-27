import { Button } from "."
import { react } from "../assets/images"

type data = {
  title: string,
  subtitle: string
}
const Hfapp = ({ title, subtitle }: data) => {
  return (
    <div className='flex flex-col items-center pt-10  pb-32 border-b border-search'>
        <img src={react} alt="" className="h-1/6"/>
        <h1 className='text-6xl'>{title}</h1>
        <h2 className='text-3xl'>{subtitle}</h2>
        <div className="flex space-x-4 mt-4">
          <Button text={'Learn React'} bg="bg-btn"/>
          <Button text={'API Reference'}  bg=""/>
        </div>
    </div>
  )
}

export default Hfapp