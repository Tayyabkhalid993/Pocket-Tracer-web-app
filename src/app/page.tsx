import TextPressure from "@/components/scatter-text";
import Image from "next/image";
import Link from "next/link";
import Silk from '@/components/silk-background';

export default function Home() {


  return (
    <div className="">

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
        <nav className="flex justify-between items-center w-full px-5 ">
          <Link href={"/"}><Image src={"/PocketTracerWhite.png"} width={200} height={200} alt="Pocket Tracer Logo"></Image></Link>
          <div>
            <ul className="flex justify-center items-center gap-3">
              <li><Link className="underline-text" href={"/"}>Home</Link></li>
              <li><Link className="underline-text" href={"/"}>About</Link></li>
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
