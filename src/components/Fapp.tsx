import { react2 } from "../assets/images"
import { Button, Swiperjs } from "."


const Fapp = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10  pb-32 bg-secondary space-y-3">
        <h1 className="text-center max-w-md text-6xl leading-3xl">
            Join a community<br className="hidden lg:inline"/>
            of millions
        </h1>

        <p className="text-center w-1/2 text-xl leading-7 py-6">
            You’re not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.
        </p>

        <div className="flex w-full py-12">
            <Swiperjs />
        </div>

        <p className="text-center w-1/2 text-xl leading-7 mb-32">
        This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.
        </p>
        <img src={react2} alt="" className="h-1/6"/>
        <h1 className='text-6xl max-w-lg text-center'>
            Welcome to the{`\n`}
            React community
        </h1>
        <div className="flex space-x-4 mt-4">
          <Button text={'Get Started'} bg="bg-btn"/>
        </div>
    </div>
  )
}

export default Fapp