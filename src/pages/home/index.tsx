import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <header className="w-full flex justify-center items-center h-[60vh] flex-col gap-y-10">
        <div>
          <AnimatedShinyText className="w-full inline-flex items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className="text-[10rem] font-sans font-bold">Hello World</span>
          </AnimatedShinyText>
        </div>
        <div>
          <Link to={'/todo'}>
            <Button className="text-white" size={'lg'} variant={'success'}>
              Get Started
            </Button>
          </Link>
        </div>
      </header>
    </>
  )
}
