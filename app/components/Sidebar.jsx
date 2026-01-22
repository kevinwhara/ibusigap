"use client";
import React from "react";
import { LayoutDashboard, FileClock, UtensilsCrossed, HeartCrack, Settings, X, UserRound } from "lucide-react";

const Sidebar = ({ isOpen, onClose, userName, pregnancyWeek }) => {
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
                        <UserRound
                            className="bg-center bg-no-repeat aspect-square rounded-full w-10 h-10 ring-3 ring-primary text-primary"
                        ></UserRound>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold leading-tight">{userName}</h1>
                            <p className="text-primary text-sm font-medium">{pregnancyWeek}</p>
                        </div>
                    </div>
                    {/* Close button for mobile */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-primary/5"
                        onClick={onClose}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 flex-1">
                    <a
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary transition-colors"
                        href="#"
                        onClick={onClose}
                    >
                        <LayoutDashboard className="w-6 h-6" />
                        <span className="text-sm font-bold">Dashboard</span>
                    </a>
                    <a
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors"
                        href="#"
                        onClick={onClose}
                    >
                        <FileClock className="w-6 h-6" />
                        <span className="text-sm font-medium">Riwayat Medis</span>
                    </a>
                    <a
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors"
                        href="#"
                        onClick={onClose}
                    >
                        <UtensilsCrossed className="w-6 h-6" />
                        <span className="text-sm font-medium">Jurnal Makanan</span>
                    </a>
                    <a
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors"
                        href="#"
                        onClick={onClose}
                    >
                        <HeartCrack className="w-6 h-6" />
                        <span className="text-sm font-medium">Deteksi Gangguan</span>
                    </a>
                    <a
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors"
                        href="#"
                        onClick={onClose}
                    >
                        <Settings className="w-6 h-6" />
                        <span className="text-sm font-medium">Pengaturan</span>
                    </a>
                </nav>

            </div>
        </aside>
    );
};

export default Sidebar;