import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserNavbar from "./components/ui/userNavbar";
import Baner from "./components/ui/baner";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Bridge",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body className="">
          <Baner name={"Sri Lanka #1 Book sharing platform"} />
          <UserNavbar/>
          <div className="container mx-auto"> 
           
            {children}
                       
          </div>
          
          <div>
            <Footer/>
          </div>
      </body>

    </html>
  );
}
