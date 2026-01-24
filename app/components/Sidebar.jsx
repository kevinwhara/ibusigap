"use client";
import React from "react";
import { LayoutDashboard, FileClock, UtensilsCrossed, HeartCrack, Settings, X, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import ini

export default function Sidebar({ isOpen, onClose, userName, pregnancyWeek }) {
    const pathname = usePathname(); // 2. Ambil path URL saat ini

    // 3. Fungsi pembantu buat nentuin style aktif atau nggak
    const getNavLinkStyle = (path) => {
        const isActive = pathname === path;
        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive
            ? "bg-primary/10 text-primary font-bold" // Style kalau AKTIF
            : "text-slate-600 hover:bg-primary/5 hover:text-primary font-medium" // Style kalau BIASA
        }`;
    };

    return (
        <aside
            className={`
                fixed lg:relative inset-y-0 left-0 z-40
                transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
                lg:transform-none lg:translate-x-0
                flex flex-col w-64 lg:w-72 h-full border-r border-[#eacdd7] bg-white p-6 shrink-0
                transition-transform duration-300 ease-in-out
            `}
        >
            <div className="flex flex-col gap-8 h-full">
                {/* Profile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#eacdd7]">
                    <div className="flex items-center gap-3">
                        <UserRound className="bg-center bg-no-repeat aspect-square rounded-full w-10 h-10 ring-3 ring-primary text-primary" />
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold leading-tight">{userName}</h1>
                            <p className="text-primary text-sm font-medium">{pregnancyWeek}</p>
                        </div>
                    </div>
                    <button className="lg:hidden p-2 rounded-lg hover:bg-primary/5" onClick={onClose}>
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 flex-1">

                    {/* Dashboard */}
                    <Link href="/dashboard" className={getNavLinkStyle("/dashboard")} onClick={onClose}>
                        <LayoutDashboard className="w-6 h-6" />
                        <span className="text-sm">Dashboard</span>
                    </Link>

                    {/* Riwayat Medis */}
                    <Link href="/riwayat-medis" className={getNavLinkStyle("/riwayat-medis")} onClick={onClose}>
                        <FileClock className="w-6 h-6" />
                        <span className="text-sm">Riwayat Medis</span>
                    </Link>

                    {/* Jurnal Makanan */}
                    <Link href="/jurnal-gizi" className={getNavLinkStyle("/jurnal-gizi")} onClick={onClose}>
                        <UtensilsCrossed className="w-6 h-6" />
                        <span className="text-sm">Jurnal Makanan</span>
                    </Link>

                    {/* Deteksi Gangguan */}
                    <Link href="/deteksi-gangguan" className={getNavLinkStyle("/deteksi-gangguan")} onClick={onClose}>
                        <HeartCrack className="w-6 h-6" />
                        <span className="text-sm">Deteksi Gangguan</span>
                    </Link>

                    {/* Pengaturan */}
                    <Link href="/pengaturan" className={getNavLinkStyle("/pengaturan")} onClick={onClose}>
                        <Settings className="w-6 h-6" />
                        <span className="text-sm">Pengaturan</span>
                    </Link>

                </nav>
            </div>
        </aside>
    );
}   