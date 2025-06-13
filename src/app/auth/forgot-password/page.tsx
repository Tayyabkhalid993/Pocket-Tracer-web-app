import { ForgotPasswordForm } from '@/components/forgot-password-form'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title : "Reset Password"
}

export default function Page() {
  return (
    <>

    {/*Black Logo */}
    <div className="absolute top-0 left-0 z-50 p-2 md:p-4 flex w-full">
    <Link href={"/"}><Image src={"/PocketTracerBlue.png"} width={200} height={200} alt='Pocket Tracer Logo'></Image></Link>
    </div>
    
    

    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ForgotPasswordForm />
      </div>
    </div>
    </>
  )
}
