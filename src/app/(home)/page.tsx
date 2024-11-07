//@ts-nocheck
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center" id="home">
      <Image
        id="homeImage"
        className=""
        src="/hero.png"
        width={1400}
        height={100}
        alt="Picture of the author"
      />
    </section>
  );
}
