"use client";
import React, { useState } from 'react';
import { ChartColumnIncreasing } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Bubbles } from 'lucide-react';
import { ShieldAlert } from 'lucide-react';
import { SquareActivity } from 'lucide-react';
import { Check } from 'lucide-react';


export default function CekKesehatan() {
    const [complaints, setComplaints] = useState([
        { id: 1, name: 'Pusing Hebat', subname: 'Severe dizziness', checked: true },
        { id: 2, name: 'Kaki & Tangan Bengkak', subname: 'Swollen feet & hands', checked: true },
        { id: 3, name: 'Nyeri Perut Bawah', subname: 'Lower abdominal pain', checked: false },
        { id: 4, name: 'Perdarahan', subname: 'Bleeding', checked: false },
        { id: 5, name: 'Gerakan Janin Berkurang', subname: 'Reduced fetal movement', checked: false },
        { id: 6, name: 'Lainnya', subname: 'Other', checked: false }
    ]);

    const [formData, setFormData] = useState({
        complaintDetail: 'Kaki bengkak + pusing',
        duration: '2 Hari',
        intensity: 'Sedang (Moderate)',
        systolic: '140',
        diastolic: '95'
    });

    const handleCheckboxChange = (id) => {
        setComplaints(complaints.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        console.log('Data dikirim:', {
            complaints: complaints.filter(item => item.checked),
            formData
        });
    };

    return (
        <div className="min-h-screen bg-[#fcf8f9] text-[#1d0c12] font-sans flex flex-col overflow-x-hidden">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-[#f4e6eb] bg-white/80 backdrop-blur-md">
                <div className="flex h-16 items-center justify-between px-4 md:px-10 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 text-[#ff4284]">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-tight">MaternalHealth</h2>
                    </div>

                    <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
                        <div className="flex items-center gap-6">
                            <a className="text-sm font-medium hover:text-[#ff4284] transition-colors" href="#">Beranda</a>
                            <a className="text-sm font-medium hover:text-[#ff4284] transition-colors" href="#">Riwayat</a>
                            <a className="text-sm font-medium hover:text-[#ff4284] transition-colors" href="#">Nutrisi</a>
                            <a className="text-sm font-medium text-[#ff4284]" href="#">Cek Kesehatan</a>
                        </div>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold">Sarah M.</span>
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-full w-9 h-9 ring-2 ring-[#ff4284]/20"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgSufEr8gKkp5fv0qjTdUD_dcf1b2wOlREJWYiUqXuaQ4VANnI-5tbhHDRpgyOLOpnIdc6Q2wjZJ024n8a5sjUp9uYt0s-wDlTIxJcRcwNH7Q_jLUw6EgZi1C-w8NWqajO2OizNAm1yKOvA-Vl2dFYews6zwVdfOJAO2K9JZzMD3gW89hezS_iGvQlm3ZiCh4boaBRoT0AzfIjisyg_jFgP1qUj_DLdrDZBJTP3XBMoV_mM0acLOpd2eC1KjDSHawZOrk_IK0v_jc")' }}
                            />
                        </div>
                    </nav>

                    <button className="md:hidden">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Input Form */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
                        {/* Heading */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-[#ff4284] text-sm font-bold uppercase tracking-wider">
                                <span className="material-symbols-outlined text-[20px]">medical_services</span>
                                Deteksi Dini
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                                Laporan Keluhan Kesehatan
                            </h1>
                            <p className="text-[#968c90] text-lg max-w-2xl">
                                Laporkan gejala yang Anda rasakan secara detail untuk mendapatkan analisis risiko kesehatan dini dari AI kami.
                            </p>
                        </div>

                        {/* Section: Checklists */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ff4284]/10 text-[#ff4284] text-sm">1</span>
                                Pilih Keluhan Utama
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {complaints.map((item) => (
                                    <label
                                        key={item.id}
                                        className={`group relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-[#ff4284] transition-all ${item.checked ? 'border-[#ff4284] bg-[#ff4284]/5 shadow-md' : ''
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            className="sr-only"
                                            checked={item.checked}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />
                                        <div className="flex items-start gap-3 w-full">
                                            <div className={`mt-0.5 rounded border border-gray-300 ${item.checked ? 'bg-[#ff4284] border-[#ff4284]' : 'bg-transparent'
                                                } flex items-center justify-center w-4 h-4 p-3 transition-colors`}>
                                                <span className={`material-symbols-outlined text-white text-[16px] ${item.checked ? 'opacity-100' : 'opacity-0'
                                                    }`}> <Check /></span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">{item.name}</span>
                                                <span className="text-xs text-[#968c90]">{item.subname}</span>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Section: Detail Input */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ff4284]/10 text-[#ff4284] text-sm">2</span>
                                Detail Kondisi
                            </h2>

                            <div className="space-y-6">
                                {/* Row 1 */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold">
                                        Detail Keluhan (Complaint)
                                    </label>
                                    <input
                                        className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm focus:border-[#ff4284] focus:ring-1 focus:ring-[#ff4284]"
                                        placeholder="Jelaskan secara singkat apa yang Anda rasakan"
                                        type="text"
                                        name="complaintDetail"
                                        value={formData.complaintDetail}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">
                                            Sejak Kapan (Duration)
                                        </label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                                <span className="material-symbols-outlined text-[20px]"></span>
                                            </span>
                                            <input
                                                className="w-full rounded-lg border border-gray-200 bg-white p-3 pl-10 text-sm focus:border-[#ff4284] focus:ring-1 focus:ring-[#ff4284]"
                                                placeholder="Contoh: 2 hari, Sejak pagi"
                                                type="text"
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">
                                            Intensitas (Intensity)
                                        </label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                                <span className="material-symbols-outlined text-[20px]"></span>
                                            </span>
                                            <select
                                                className="w-full rounded-lg border border-gray-200 bg-white p-3 pl-10 text-sm focus:border-[#ff4284] focus:ring-1 focus:ring-[#ff4284] appearance-none"
                                                name="intensity"
                                                value={formData.intensity}
                                                onChange={handleInputChange}
                                            >
                                                <option value="Ringan (Mild)">Ringan (Mild)</option>
                                                <option value="Sedang (Moderate)">Sedang (Moderate)</option>
                                                <option value="Berat (Severe)">Berat (Severe)</option>
                                            </select>
                                            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Blood Pressure */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold">
                                        Tekanan Darah Terakhir (Last Blood Pressure)
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <div className="relative flex-1">
                                            <input
                                                className="w-full rounded-lg border border-gray-200 bg-white p-3 text-center text-lg font-bold tracking-widest focus:border-[#ff4284] focus:ring-1 focus:ring-[#ff4284]"
                                                placeholder="120"
                                                type="number"
                                                name="systolic"
                                                value={formData.systolic}
                                                onChange={handleInputChange}
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-normal">SYS</span>
                                        </div>
                                        <span className="text-2xl text-gray-300 font-light">/</span>
                                        <div className="relative flex-1">
                                            <input
                                                className="w-full rounded-lg border border-gray-200 bg-white p-3 text-center text-lg font-bold tracking-widest focus:border-[#ff4284] focus:ring-1 focus:ring-[#ff4284]"
                                                placeholder="80"
                                                type="number"
                                                name="diastolic"
                                                value={formData.diastolic}
                                                onChange={handleInputChange}
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-normal">DIA</span>
                                        </div>
                                        <div className="text-sm text-[#968c90] self-center ml-2 hidden sm:block">mmHg</div>
                                    </div>
                                    <p className="text-xs text-[#968c90] mt-1">
                                        Jika Anda belum mengukur, silakan masukkan pengukuran terakhir.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Submit Action */}
                        <div className="flex justify-end pt-2 pb-10">
                            <button
                                className="w-full md:w-auto bg-[#ff4284] hover:bg-[#d6306d] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-[#ff4284]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                                onClick={handleSubmit}
                            >
                                <span className="material-symbols-outlined"></span>
                                <ChartColumnIncreasing />
                                Analisis Keluhan
                            </button>
                        </div>
                    </div>

                    {/* Right Column: AI Feedback (Output) */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="sticky top-24 flex flex-col gap-6">
                            {/* AI Result Card */}
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border-t-4 border-[#ff4284] ring-1 ring-gray-100">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                    <span className="material-symbols-outlined text-[120px] text-[#ff4284]"></span>
                                </div>

                                <div className="p-6 relative z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="bg-linear-to-br from-purple-500 to-[#ff4284] text-white text-[10px] font-bold px-4 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                            <span className="material-symbols-outlined text-[14px]"></span>
                                            <Sparkles />
                                            AI Insight
                                        </div>
                                        <span className="text-xs font-medium text-gray-500">Baru saja diperbarui</span>
                                    </div>

                                    <h3 className="text-lg font-semibold mb-1">
                                        Hasil Analisis Awal
                                    </h3>

                                    <div className="mt-2 mb-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold text-sm border border-red-100">
                                            <span className="material-symbols-outlined text-[18px]"></span>
                                            Risiko Preeklamsia Ringan
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div className="mt-0.5 shrink-0 w-8 h-8  rounded-full bg-[#ff4284] flex items-center justify-center">
                                                < SquareActivity />
                                            </div>
                                            <p className="text-sm leading-relaxed">
                                                <span className="font-semibold text-[#ff4284]">Disarankan segera periksa</span> ke bidan atau dokter kandungan untuk pemeriksaan lebih lanjut.
                                            </p>
                                        </div>

                                        <div className="flex gap-3">
                                            <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                                <ShieldAlert />
                                                <span className="material-symbols-outlined text-[16px] text-orange-600"></span>
                                            </div>
                                            <p className="text-sm leading-relaxed">
                                                <span className="font-semibold">Jangan tunda</span> jika disertai nyeri kepala hebat, pandangan kabur, atau mual muntah.
                                            </p>
                                        </div>

                                        <div className="flex gap-3">
                                            <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                <Bubbles />
                                                <span className="material-symbols-outlined text-[16px] text-blue-600"></span>
                                            </div>
                                            <p className="text-sm leading-relaxed">
                                                Kurangi asupan garam dan pastikan istirahat yang cukup hingga pemeriksaan dilakukan.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 border border-red-100">
                                            <span className="material-symbols-outlined">call</span>
                                            Hubungi Bidan Darurat
                                        </button>
                                        <p className="text-center text-[11px] text-gray-400 mt-3">
                                            *Hasil ini adalah simulasi AI dan bukan diagnosis medis final.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info Card */}
                            <div className="rounded-2xl bg-linear-to-br from-[#ff4284]/80 to-[#ff4284] p-6 text-white shadow-lg relative overflow-hidden group">
                                <div className="bg-white/20 absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-700"></div>
                                <h4 className="font-bold text-lg mb-2 relative z-10">Tahukah Bunda?</h4>
                                <p className="text-sm text-white/90 relative z-10 mb-4 leading-relaxed">
                                    Mencatat keluhan secara rutin dapat membantu dokter mendeteksi komplikasi kehamilan hingga 30% lebih awal.
                                </p>
                                <a className="inline-flex items-center gap-1 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors relative z-10" href="#">
                                    Lihat Artikel Kesehatan
                                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
