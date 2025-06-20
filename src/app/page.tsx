import TextPressure from "@/components/pressure-text";
import Image from "next/image";
import SplitText from "@/components/split-text";
import { TextEffectOne } from 'react-text-animate'
import Link from "next/link";
import Silk from '@/components/silk-background';
import Paragraph from "@/components/word-animation"
import TimelineDemo from "../../features";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
              <li><Link className="underline-text" href={"/#features"}>Features</Link></li>
              <li><Link className="underline-text" href={"/#faqs"}>FAQs</Link></li>
              <li><Link className="underline-text" href={"/#contact"}>Contact</Link></li>
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



      <section id="about" className="py-16 px-4 md:px-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <p className="text-7xl text-blue">About</p>
          <h2 className="text-3xl text-blue md:text-7xl mb-16">
            Pocket Tracer
          </h2>

          {/* Mission & Purpose */}
          <div className="space-y-6 text-3xl text-gray-700">
            <Paragraph paragraph={"Pocket Tracer is a free, user-friendly financial tracking app built to help individuals and small businesses manage their income and expenses with clarity.  Our mission is to make financial clarity accessible to everyone — whether you’re a student learning to budget or a small business handling daily transactions. Pocket Tracer bridges the gap between simplicity and real-world accounting."} />

          </div>
        </div>
      </section>









      {/* Features */}



      <section id="features" className="py-16 px-4 md:px-20 scroll-mt-24">
        <TimelineDemo />
      </section>










      {/* FAQs */}


      <section id="faqs" className="py-16 text-center px-4 md:px-20 scroll-mt-24">
        <div>
          <h2 className="text-3xl text-blue md:text-7xl mb-16">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is Pocket Tracer really free?</AccordionTrigger>
              <AccordionContent>
                Yes! Pocket Tracer is 100% free forever with no hidden fees. We don’t even ask for your credit card.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How is Pocket Tracer different from other finance apps?</AccordionTrigger>
              <AccordionContent>
                Unlike basic expense trackers, we generate professional accounting vouchers (CPV/CRV/BPV/BRV/JV) and advanced reports while remaining completely free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is my financial data secure?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We use bank-grade encryption (AES-256) and never sell your data. You own all your information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use Pocket Tracer on mobile?</AccordionTrigger>
              <AccordionContent>
                Yes! Our web app works perfectly on all devices. Mobile apps (iOS/Android) are coming soon!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I access reports in CSV?</AccordionTrigger>
              <AccordionContent>
                Yes, you can export all your reports in CSV format for easy integration with other tools or for offline use.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>






{/* 
      <div style={{position: 'relative', height: '250px', padding:"20px"}}>
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
