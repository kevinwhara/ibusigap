"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Menu } from "lucide-react";

export default function DashboardClientLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="flex h-screen w-full font-sans bg-slate-50">
            {/* Sidebar - Data user bisa dikirim lewat props atau fetch di sini */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
                userName="Bunda UlQron"
                pregnancyWeek="Minggu ke-12"
            />

            {/* Overlay Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* Main Content Area */}
            <main className="flex-1 h-screen overflow-y-auto relative">
                {children}
                <Footer />
            </main>

            {/* Floating Mobile Button */}
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