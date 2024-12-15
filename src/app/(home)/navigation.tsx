//@ts-nocheck
import Image from "next/image";

export default function Navigation() {
  return (
    <section className="flex w-full h-[6rem] items-center font-medium text-[#7415F2] text-2xl bg-white">
      <div className="fixed flex h-[6rem] items-center justify-between w-full opacity-[.99] bg-white z-[1]">
        <a href="#homeImage">
            <Image
            className="ml-8"
            src="/company_logo.png"
            width={50}
            height={0}
            alt="Picture of the author"
            />
        </a>

        {/* <div className="flex gap-8">
          <div>About Us</div>
          <div>Blogs</div>
        </div> */}
        <a className="relative p-[2px] right-8" href="#footer">
          <div
            className="absolute rounded-3xl z-[-1] inset-0 bg-gradient-to-r from-[#7415F2] via-[#4242C6] to-[#0C5FA0]"
            id="button-glow"
          ></div>
          <div className="p-4 rounded-3xl bg-white responsive-hidden">Work with Us</div>
        </a>
      </div>
      <div className="z-[2] pl-24">Metaspire solutions</div>
    </section>
  );
}
