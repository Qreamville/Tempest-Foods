import { Inter, Open_Sans } from "next/font/google";
import "../styles/globals/reset.scss";
import Navbar from "@/components/Navbar/Navbar";
import CartModal from "@/components/Modal/CartModal";
import Footer from "@/components/Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tempest Foods | Lightning-Fast Delivery, Delightful Flavors",
  description:
    "Tempest Foods is a lightning-fast food delivery app that brings a diverse selection of mouthwatering dishes from top-rated restaurants straight to your doorstep. With a user-friendly interface, customizable options, and a storm of flavors, Tempest Foods ensures a delightful and convenient dining experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
