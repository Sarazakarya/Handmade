import Footer from "@/shared/components/Footer/organisms/Footer";
import BackToTop from "@/shared/components/molecule/BackToTop";
import NavbarFooter from "@/shared/components/NavBar/molecule/NavbarFooter";
import Navbar from "@/shared/components/NavBar/organisms/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <NavbarFooter />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default layout;
