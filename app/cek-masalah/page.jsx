"use client";
import React, { useState } from 'react';
import { ChartColumnIncreasing, Lightbulb, BriefcaseMedical } from 'lucide-react';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function CekMasalah() {

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
        const aiPayload = {
            mainComplaints: complaints
                .filter(item => item.checked)
                .map(item => item.name),

            complaintDetail: formData.complaintDetail,
            duration: formData.duration,
            intensity: formData.intensity.split(' ')[0],

            bloodPressure: {
                systolic: Number(formData.systolic),
                diastolic: Number(formData.diastolic)
            }
        };

        console.log(aiPayload);
    };



    return (
        <div className="min-h-screen font-sans flex flex-col overflow-x-hidden">

            <Navbar />

            {/* Main Content */}
            <main className="grow w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
                <div className="gap-8 lg:gap-12">
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
                        {/* Heading */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-[#ff4284] text-sm font-bold uppercase tracking-wider">
                                <BriefcaseMedical className="w-6 h-6" />
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

                        {/* AI Suggestion */}
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="flex items-center gap-2 mb-4 relative z-10">
                                <div className="p-1.5 bg-primary text-white rounded-lg shadow-sm">
                                    <Lightbulb className="w-6 h-6" />
                                </div>
                                <h3 className="text-text-main font-bold text-lg">Rekomendasi Otomatis</h3>
                            </div>
                            <div className="flex gap-3 bg-white p-3 rounded-xl shadow-sm border border-primary/10">
                                <div>
                                    <p className="text-sm mt-0.5">Tambahkan: Telur rebus, dada ayam, atau tahu tempe di menu makan malam.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
