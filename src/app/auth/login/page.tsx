import { LoginForm } from '@/components/login-form'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Log In"
}

export default function Page() {
  return (
    <>
     {/* White Logo */}
    <div className="absolute hidden top-0 left-0 z-50 p-2 md:p-4 md:flex w-full">
    <Link href={"/"}><Image src={"/PocketTracerWhite.png"} width={200} height={200} alt='Pocket Tracer Logo'></Image></Link>
    </div>


    {/*Blue Logo */}
    <div className="absolute top-0 left-0 z-50 p-2 md:hidden flex w-full">
    <Link href={"/"}><Image src={"/PocketTracerBlue.png"} width={200} height={200} alt='Pocket Tracer Logo'></Image></Link>
    </div>
    
    
    <section className="h-screen w-full items-center flex justify-center overflow-hidden md:bg-white md:grid grid-cols-5">
      <div className=" bg-custom-gradient h-screen col-span-3 relative overflow-hidden">
        <div className='hidden h-screen md:flex flex-col justify-center items-center text-center p-12 text-white'>
          <div className="max-w-md">
        <h1 className="text-5xl mb-4 font-extralight">Welcome Back to Pocket Tracer</h1>
        <p className="text-xl mb-8 opacity-90 font-extralight">
          Smart expense tracking for financial peace of mind
        </p>
          </div>
        </div>

        {/* Circles - positioned absolutely with overflow hidden */}
        <div className="flex absolute -bottom-35 -left-6">
          <div className="
        rounded-full 
        border-2 md:border-2 lg:border-2 
        border-blue-500 
        bg-transparent
        w-64 h-64 lg:w-80 lg:h-80
        opacity-50
          "></div>
        </div>
         <div className="flex absolute -bottom-30 -left-25">
          <div className="
        rounded-full 
        border-2 md:border-2 lg:border-2 
        border-blue-500 
        bg-transparent
        w-64 h-64 lg:w-80 lg:h-80
        opacity-50
          "></div>
        </div>
      </div>

      <div className="flex justify-center col-span-2 md:bg-white">
        <div className='w-sm'>
          <LoginForm />
        </div>
      </div>
    </section>
    </>
  )
}