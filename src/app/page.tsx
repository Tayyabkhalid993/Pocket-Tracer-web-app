import TextPressure from "@/components/pressure-text";
import Image from "next/image";
import SplitText from "@/components/split-text";
import { TextEffectOne } from 'react-text-animate'
import Link from "next/link";
import Silk from '@/components/silk-background';

export default function Home() {


  return (
    <div className="scroll-smooth">

      {/* background-animation */}
      <div className="absolute inset-0 z-[-1]">
        <Silk
          speed={5}
          scale={1}
          color="#0575E6"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>



      {/* Header */}

      <header>
        <nav className="flex justify-between items-center w-full px-5 font-bold">
          <Link href={"/"}><Image src={"/PocketTracerWhite.png"} width={200} height={200} alt="Pocket Tracer Logo"></Image></Link>
          <div>
            <ul className="flex justify-center items-center gap-3">
              <li><Link className="underline-text" href={"/"}>Home</Link></li>
              <li><Link className="underline-text" href={"/#about"}>About</Link></li>
              <li><Link className="underline-text" href={"/"}>Features</Link></li>
              <li><Link className="underline-text" href={"/"}>FAQ</Link></li>
              <li><Link className="underline-text" href={"/"}>Contact</Link></li>
            </ul>
          </div>
          <div className="flex justify-center gap-3">
            <button><Link className="underline-text" href={"/auth/login"}>LogIn</Link></button>
            <button><Link className="underline-text" href={"/auth/sign-up"}>SignUp</Link></button>
          </div>
        </nav>
      </header>



      {/* Landing Page */}

      <section className="flex flex-col justify-center items-center h-screen text-center text-white">


        {/* <SplitText
          text="Stop Guessing. Start Tracking."
          className="text-7xl font-semibold text-center pb-4"
          delay={400}
          duration={0.3}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        /> */}

         <TextEffectOne elementVisibilityAmount={0.1} lineHeight={1.2} text="Stop Guessing. Start Tracking." 
          className="text-7xl font-semibold text-center" />

        <h1 className="text-7xl"></h1>
        <p className="max-w-2xl mt-10 mb-5 text-xl">Stop guessing and start tracking with confidence. Pocket Tracer transforms your financial data into clear visuals and professional reports, so you always know where your money stands.</p>
        <p className="font-bold bg-[#8480fd] text-[#fff] rounded px-2">No accounting degree required.</p>
      </section>








      {/* About Us */}



<section id="about" className="bg-slate-50 text-gray-800 py-16 px-4 md:px-20 scroll-mt-24">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}

     <p className="text-7xl text-blue">About</p>
    <h2 className="text-3xl text-blue md:text-7xl mb-16">
       Pocket Tracer
    </h2>

    {/* Subtitle */}
    {/* <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Empowering You to Understand Your Finances – Simply and Freely.
    </p> */}

    {/* Mission & Purpose */}
    <div className="space-y-6 text-3xl text-gray-700">
      <p className="">
        <strong>Pocket Tracer</strong> is a free, user-friendly financial tracking app built to help individuals and small businesses manage their income and expenses with clarity.  Our mission is to make financial clarity accessible to everyone — whether you’re a student learning to budget or a small business handling daily transactions. Pocket Tracer bridges the gap between simplicity and real-world accounting.
      </p>
      <br />
      <p>
        With visual insights, printable reports, and real accounting practices built-in, Pocket Tracer is your go-to tool for smart, simple finance management.
      </p>
    </div>
  </div>
</section>









      {/* Features */}



<section id="features" className="bg-white text-gray-800 py-16 px-4 md:px-20 scroll-mt-24">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
      Why Choose Pocket Tracer?
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      Powerful features designed to simplify your financial journey — all for free.
    </p>

    {/* Feature Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Feature 1 */}
      <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Voucher-Based Accounting</h3>
        <p className="text-gray-600">
          Manage CPV, CRV, BPV, BRV, and JV entries with ease using real accounting practices.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Visual Dashboards</h3>
        <p className="text-gray-600">
          Instantly see where your money is coming from and going to with beautiful charts.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Detailed Reporting</h3>
        <p className="text-gray-600">
          Generate, filter, and export comprehensive reports for both expenses and income.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">100% Free, Forever</h3>
        <p className="text-gray-600">
          No subscriptions, no hidden fees — Pocket Tracer is completely free to use.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Privacy-Focused</h3>
        <p className="text-gray-600">
          Your financial data stays safe. We never sell or share your information.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Simple & User-Friendly</h3>
        <p className="text-gray-600">
          Clean interface built for beginners, yet powerful enough for businesses.
        </p>
      </div>
    </div>
  </div>
</section>








      {/* <div style={{position: 'relative', height: '250px'}}>
  <TextPressure
    text="Join us!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#0575E6"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div> */}
    </div>
  );
}
