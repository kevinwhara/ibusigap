import React from "react";
import Link from "next/link";
import { HeartPulse, CircleAlert, Apple, Plus } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="flex flex-col mx-auto gap-8 p-4 md:p-4 lg:p-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d0c12]">
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
                    <h2 className="text-2xl font-bold tracking-tight text-[#1d0c12]">Detail Risiko & Rekomendasi</h2>
                    <Link className="text-primary text-sm font-semibold hover:underline" href="#">Lihat Semua</Link>
                </div>

                {/* Recommendation Cards */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white shadow-sm border border-slate-100">
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
                            </div>
                        </div>
                    ))}
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
    );
}