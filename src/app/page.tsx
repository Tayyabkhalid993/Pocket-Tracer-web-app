import Image from "next/image";
import Link from "next/link";
import Silk from '@/components/silk-background';
import Paragraph from "@/components/word-animation"
import TimelineDemo from "../components/features";
import { TextRevealAnimation } from "@/components/text-reveal-animation";
import MobileNavbar from "@/components/mobile-navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

      <header className=" sticky top-0 backdrop-blur-lg z-50 mix-blend-difference">
    {/* Desktop Navbar */}
<nav className="hidden md:flex justify-between items-center w-full px-5 font-medium">
          <Link href={"/"}><Image src={"/PocketTracerWhite.png"} width={200} height={200} alt="Pocket Tracer Logo"></Image></Link>
          <div>
            <ul className="flex justify-center items-center gap-3">
              <li><Link className="underline-text" href={"/"}>Home</Link></li>
              <li><Link className="underline-text" href={"/#about"}>About</Link></li>
              <li><Link className="underline-text" href={"/#features"}>Features</Link></li>
              <li><Link className="underline-text" href={"/#faqs"}>FAQs</Link></li>
            </ul>
          </div>
          <div className="flex justify-center gap-3">
            <button><Link className="underline-text" href={"/auth/login"}>LogIn</Link></button>
            <button><Link className="underline-text" href={"/auth/sign-up"}>SignUp</Link></button>
          </div>
        </nav>






        {/* Mobile NavBar */}
         <MobileNavbar />
      </header>










      {/* Landing Page */}

      <section className="flex flex-col justify-center items-center h-screen text-center text-white">



        <TextRevealAnimation text="Stop Guessing. Start Tracking." className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-center uppercase" />
        <TextRevealAnimation text="Stop guessing and start tracking with confidence. Pocket Tracer transforms your financial data into clear visuals and professional reports, so you always know where your money stands." className="max-w-2xl mt-10 mb-5 text-xl leading-8" />
        <TextRevealAnimation text="No accounting degree required." className="font-extrabold bg-[#8480fd] text-[#fff] rounded py-1" />
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
        {/* <div style={{position: 'relative', height: '250px', padding:"10px"}} className="mx-auto mt-10 max-w-7xl">
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
      </section>





      {/* Footer */}



      <footer className="bg-custom-gradient text-white">
        <div className="grid w-full place-items-center overflow-y-hidden p-4 sm:grid-rows-4 md:grid-rows-4">
          {/* <!-- Intro Message --> */}
          <section aria-labelledby="footer-message">
            <h2 id="footer-message" className="sr-only">Footer Message</h2>
            <p className="text-center text-[clamp(2rem,6vw,8rem)]">Your wallet&apos;s new best friend.</p>
          </section>

          {/* <!-- Navigation Columns --> */}
          <nav className="mt-8 grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:row-span-2 sm:grid-cols-2 sm:text-center md:row-span-1 md:grid-cols-4" aria-label="Footer Navigation">
            <div>
              <h3 className="mb-2 text-lg font-extrabold">MENU</h3>
              <ul className="space-y-1 font-medium">
                <li><Link className="underline-text" href="/">Home</Link></li>
                <li><Link className="underline-text" href="/#about">About</Link></li>
                <li><Link className="underline-text" href="/#features">Features</Link></li>
                <li><Link className="underline-text" href="/#faqs">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-extrabold">SOCIAL</h3>
              <ul className="space-y-1 font-medium">
                <li><Link className="underline-text" href="https://www.linkedin.com/in/muhammad-tayyab-khalid-tayyabk993?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">LinkedIn</Link></li>
                <li><Link className="underline-text" href="https://x.com/TayyabK993?t=8Dc8W8dJYIyE3EaYovJEVw&s=09" target="_blank">X</Link></li>
                <li><Link className="underline-text" href="https://www.facebook.com/tayyab.khalid.5070" target="_blank">Facebook</Link></li>
                <li><Link className="underline-text" href="https://www.tiktok.com/@tayyabkhalid993?_t=ZS-8xIuhdjN6KV&_r=1" target="_blank">Tiktok</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-extrabold">CONTRIBUTOR</h3>
              <ul className="space-y-1 font-medium">
                <li><Link className="underline-text" href="http://www.linkedin.com/in/Aman-ACCA" target="_blank">LinkedIn</Link></li>
                <li><Link className="underline-text" href="https://x.com/SpeechlessAman?t=W758cbMDgZB984HGF1sl7w&s=09" target="_blank">X</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-extrabold">REACH OUT</h3>
              <ul className="space-y-1 font-medium">
                <li>
                  <Link className="underline-text" href="mailto:someone@example.com" aria-label="Send us an email">contact@pockettracer.com</Link>
                </li>
                <li>
                  <Link className="underline-text" href="tel:+923156603419" aria-label="Call our phone number">+92 315 6603419</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* <!-- Branding and Footer Note --> */}
          <section className="row-span-2 mt-12 text-center">
            <TextRevealAnimation text="Pocket Tracer" className="w-full text-[clamp(3rem,12.1vw,15rem)]" />
            <p className="h-0.5 bg-white"></p>
            <p className="mt-4 text-lg">© 2025 Pocket Tracer | All rights reserved.</p>
          </section>
        </div>
      </footer>



    </div>
  );
}
