import { SignUpForm } from '@/components/sign-up-form'
import { Metadata } from 'next'

  export const metadata : Metadata ={
    title :"Sign Up"
}

export default function Page() {
  return (
  <div className="h-screen w-full items-center flex justify-center overflow-hidden md:grid grid-cols-5">
        <div className=" bg-custom-gradient h-screen col-span-3 relative overflow-hidden">
          <div className='hidden h-screen md:flex flex-col justify-center items-center text-center p-12 text-white'>
            <div className="max-w-md">
          <h1 className="text-5xl mb-4 font-light">Join Pocket Tracer</h1>
          <p className="text-xl mb-8 opacity-90">
             Start your journey to financial clarity today
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
          <div className='w-full md:max-w-md p-2'>
            <SignUpForm />
          </div>
        </div>
      </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    // <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
    //   <div className="w-full max-w-sm">
    //     <SignUpForm />
    //   </div>
    // </div>
  )
}
