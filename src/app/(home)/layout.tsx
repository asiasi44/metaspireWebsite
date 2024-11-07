import Footer from "./footer";
import Navigation from "./navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <Navigation/>
        {children}
        <Footer/>
    </main>
  );
}
