// app/(main)/layout.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
    return (
        <section>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </section>
    );
}