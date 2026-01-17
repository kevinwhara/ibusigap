"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Settings, LayoutDashboard, FileClock, UtensilsCrossed, HeartCrack, HeartPulse, CircleAlert, Apple, Plus, Menu, X } from "lucide-react";

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex h-screen w-full font-sans overflow-hidden text-[#1d0c12]">
            {/* Sidebar */}
            <aside className={`
                fixed lg:relative inset-y-0 left-0 z-40
                transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:transform-none lg:translate-x-0
                flex flex-col w-64 lg:w-72 h-full border-r border-[#eacdd7] bg-white p-6 shrink-0
                transition-transform duration-300 ease-in-out
            `}>
                <div className="flex flex-col gap-8 h-full">
                    {/* Profile Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-[#eacdd7]">
                        <div className="flex items-center gap-3">
                            <div
                                className="bg-center bg-no-repeat aspect-square rounded-full w-12 h-12 ring-2 ring-primary/20"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8MqkZ6Br_SKfaNmfvnGQeCB_030qqh_GY_mFk8qCAucykA9SBESbdhtsLHKdlx5gZickFNI7cfxoeggPoTq0uBF8otvq_PN4VMCSqMBD71k2q1FmXtUvdcKLRL_0n54iSB8I3LtdK9FbwY5-eRvvj7BccRN76o4zS3hvGhCZBHALXwWOkmS8V7-dQvTsWHlfSSlC4gmixC_Ttd8hVUzgloMWfzdFKMxy1iHPXn4v3Q2f_kpgxLvJ2mSwWHRd5OYcgnPogukAVan0")',
                                }}
                            ></div>
                            <div className="flex flex-col">
                                <h1 className="text-lg font-bold leading-tight">Bunda Sarah</h1>
                                <p className="text-primary text-sm font-medium">Minggu ke-24</p>
                            </div>
                        </div>
                        {/* Close button for mobile */}
                        <button 
                            className="lg:hidden p-2 rounded-lg hover:bg-primary/5"
                            onClick={closeSidebar}
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2 flex-1">
                        <a 
                            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary transition-colors" 
                            href="#"
                            onClick={closeSidebar}
                        >
                            <LayoutDashboard className="w-6 h-6" />
                            <span className="text-sm font-bold">Dashboard</span>
                        </a>
                        <a 
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors" 
                            href="#"
                            onClick={closeSidebar}
                        >
                            <FileClock className="w-6 h-6" />
                            <span className="text-sm font-medium">Riwayat Medis</span>
                        </a>
                        <a 
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors" 
                            href="#"
                            onClick={closeSidebar}
                        >
                            <UtensilsCrossed className="w-6 h-6" />
                            <span className="text-sm font-medium">Jurnal Makanan</span>
                        </a>
                        <a 
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors" 
                            href="#"
                            onClick={closeSidebar}
                        >
                            <HeartCrack className="w-6 h-6" />
                            <span className="text-sm font-medium">Deteksi Gangguan</span>
                        </a>
                        <a 
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors" 
                            href="#"
                            onClick={closeSidebar}
                        >
                            <Settings className="w-6 h-6" />
                            <span className="text-sm font-medium">Pengaturan</span>
                        </a>
                    </nav>

                    {/* Footer / Logout */}
                    <div className="mt-auto">
                        <button 
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:text-red-500 w-full transition-colors"
                            onClick={closeSidebar}
                        >
                            <span className="material-symbols-outlined">logout</span>
                            <span className="text-sm font-medium">Keluar</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 h-full overflow-y-auto p-4 md:p-4 lg:p-10">
                <div className="flex flex-col mx-auto gap-8">
                    {/* Page Heading - DIHAPUS TOMBOL HAMBURGER DI SINI */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                                Ringkasan Kesehatan
                            </h1>
                            <p className="text-slate-500 text-base md:text-lg">
                                Pantau kesehatan Bunda dan janin hari ini.
                            </p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* General Health */}
                        <div className="flex flex-col gap-3 rounded-xl p-6 bg-white border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                    <HeartPulse className="w-7 h-7" />
                                </div>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Kesehatan Umum</p>
                            </div>
                            <p className="text-3xl font-bold">Baik</p>
                            <p className="text-slate-400 text-sm">Tekanan darah stabil</p>
                            <Link href="/cek-kesehatan" className="w-fit px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-600/90 transition shadow-lg shadow-primary/20 whitespace-nowrap">
                                Periksa Kesehatan
                            </Link>
                        </div>

                        {/* Daily Risk */}
                        <div className="flex flex-col gap-3 rounded-xl p-6 bg-white border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-amber-100 rounded-lg text-amber-600">
                                    <CircleAlert className="w-7 h-7" />
                                </div>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Risiko Hari Ini</p>
                            </div>
                            <p className="text-3xl font-bold">Perlu Perhatian</p>
                            <p className="text-primary text-sm font-medium">Tidur & Zat Besi</p>
                            <Link href="/cek-masalah" className="w-fit px-6 py-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-600/90 transition shadow-lg shadow-primary/20 whitespace-nowrap">
                                Periksa Gangguan
                            </Link>
                        </div>

                        {/* Nutrition Status */}
                        <div className="flex flex-col gap-3 rounded-xl p-6 bg-white border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600">
                                    <Apple className="w-7 h-7" />
                                </div>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Status Gizi</p>
                            </div>
                            <p className="text-3xl font-bold">Perlu Ditingkatkan</p>
                            <p className="text-primary text-sm font-medium">Asupan Kalori Harian</p>
                            <Link href="/cek-gizi" className="w-fit px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-600/90 transition shadow-lg shadow-primary/20 whitespace-nowrap">
                                Periksa Nutrisi
                            </Link>
                        </div>
                    </div>

                    {/* Detailed Content */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                            <h2 className="text-2xl font-bold tracking-tight">Detail Risiko & Rekomendasi</h2>
                            <a className="text-primary text-sm font-semibold hover:underline" href="#">Lihat Semua</a>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            {/* Sleep Card */}
                            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white shadow-sm border border-transparent hover:border-primary/20 transition-all">
                                <div className="flex-1 flex flex-col gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase">Pola Tidur</span>
                                            <span className="text-slate-400 text-xs">Hari ini</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">Kurang Istirahat</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Durasi tidur Bunda semalam hanya 5 jam. Untuk menjaga kesehatan janin, disarankan minimal 7-8 jam tidur berkualitas.
                                        </p>
                                    </div>
                                    <button className="mt-auto flex items-center justify-center gap-2 w-full md:w-fit px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                        <span className="material-symbols-outlined text-lg">bedtime</span>
                                        <span className="text-sm font-medium">Tips Tidur Nyenyak</span>
                                    </button>
                                </div>
                                <div
                                    className="w-full md:w-48 aspect-video md:aspect-square bg-cover bg-center rounded-lg shadow-inner shrink-0"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGFfqE3o1rTkTkIGyselVHYQoeHbBVc1WvhUu8kTu_00irltTjuaHD4IX_Gn-sVVmdzRjm1uXdXvmH0mPlBfXn1mOnvgjthWByYBcIls6OepX-CiYGZiZBejqdCUOjbrd-wvirS7X7fCTp2pNdn9VfMgQ0K4rDjZ4T7laMANfwsHoUgGjkC2mJ42aUHSZJ-u4PpsJOn73MXt5rMB8CgpF3MtOut7-6goTH3g-XyvpZy1pz0f29-aVPq_EhReH3Z_bUDTegvFJanmk")' }}
                                    data-alt="Calm bedroom setting with warm lighting suitable for sleep"
                                ></div>
                            </div>

                            {/* Nutrition Card */}
                            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white shadow-sm border border-transparent hover:border-primary/20 transition-all">
                                <div className="flex-1 flex flex-col gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase">Nutrisi</span>
                                            <span className="text-slate-400 text-xs">Mingguan</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">Zat Besi Rendah</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Asupan zat besi minggu ini sedikit di bawah target. Tingkatkan konsumsi sayuran hijau seperti bayam atau daging merah.
                                        </p>
                                    </div>
                                    <button className="mt-auto flex items-center justify-center gap-2 w-full md:w-fit px-5 py-2.5 bg-white border border-primary/30 text-primary rounded-lg hover:bg-primary/5 transition-colors">
                                        <span className="material-symbols-outlined text-lg">restaurant</span>
                                        <span className="text-sm font-medium">Lihat Menu Rekomendasi</span>
                                    </button>
                                </div>
                                <div
                                    className="w-full md:w-48 aspect-video md:aspect-square bg-cover bg-center rounded-lg shadow-inner shrink-0"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCK-YC9oqmhy1GRjz6ZTZKwRbV70_WFdB7Jpkq8YCEBrFMga7VMItFm8SoySxMh7hn34Hihp20sTmjSkMzk_7rDbBKRrTWR0iCAzODMJI5K4MxAfV1kkpfpFF35LjG3I6TXOuG9VBdwJATL_i3Tg-56JikDzir9LYkgclUF0RRAluKFNBCvH4IEht0eAqOZazDDfjxQMRsFQZGBxu9yQ0PxpYFshyM-npXSChIufVccudxMBL5SANGw024pWfRqBZe-qCmmKeRD_wE")' }}
                                    data-alt="Fresh healthy salad bowl with spinach and vegetables"
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Vitals Input */}
                    <div className="rounded-xl bg-primary/5 p-6 border border-primary/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary text-white p-3 rounded-full">
                                    <Plus className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1d0c12]">Catat Perkembangan Hari Ini</h4>
                                    <p className="text-sm text-slate-500">Jangan lupa catat berat badan & mood Bunda.</p>
                                </div>
                            </div>
                            <Link href="/cek-kesehatan" className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition shadow-lg shadow-primary/20 whitespace-nowrap">
                                Catat Sekarang
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Spacer */}
                    <div className="h-10"></div>
                </div>
            </main>

            {/* Mobile Nav (Floating Button) - Show only when sidebar is closed */}
            {!isSidebarOpen && (
                <div className="fixed bottom-6 right-6 lg:hidden z-50">
                    <button 
                        className="bg-primary text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
                        onClick={toggleSidebar}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            )}
        </div>
    );
}