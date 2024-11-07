//@ts-nocheck
import Image from "next/image";

export default function Footer() {
  return (
    <section
      className="w-full h-[16rem] flex justify-around items-center"
      id="footer"
    >
      <div className="flex gap-8">
        <div>Contact Us</div>
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-4">
            <div>email</div>
            <span className="underline">metaspiresolutions@gmail.com</span>
          </div>
          <div className="flex gap-4">
            <div>phone</div>
            <div className="flex flex-col gap-4">
              <span className="underline">+977 9860172109</span>
              <span className="underline">+977 9813034994</span>
              <span className="underline">+977 9849987418</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div>Follow Us</div>
        <div className="flex flex-col gap-4">
          <a
            className="underline"
            href="https://www.linkedin.com/company/metaspire-solutions/about/"
          >
            linkedln
          </a>
          <a className="underline">instagram</a>
          <a
            className="underline"
            href="https://www.facebook.com/profile.php?id=61560882761103"
          >
            facebook
          </a>
        </div>
      </div>
    </section>
  );
}
