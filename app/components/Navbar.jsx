import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#f4e6eb] bg-white/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-4 md:px-10 max-w-7xl mx-auto w-full">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 text-[#ff4284]">
                        <Image
                            src="/images/logo.svg"
                            alt="Logo"
                            width={200}
                            height={80}
                        />
                    </div>
                    <h2 className="text-lg font-bold">IbuSIGAP</h2>
                </div>

                {/* Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/dashboard" className="text-sm font-medium hover:text-primary cursor-pointer">Beranda</Link>
                    <Link href="/cek-gizi" className="text-sm font-medium hover:text-primary cursor-pointer">Cek Gizi</Link>
                    <Link href="/cek-kesehatan" className="text-sm font-medium hover:text-primary cursor-pointer">Cek Kesehatan</Link>
                    <Link href="/cek-masalah" className="text-sm font-medium hover:text-primary cursor-pointer">Cek Gangguan</Link>
                </nav>
            </div>
        </header>
    );
}
