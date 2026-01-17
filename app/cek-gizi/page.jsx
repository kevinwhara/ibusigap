"use client";
import React, { useState } from 'react';
import {
  UtensilsCrossed,
  Sunrise,
  Moon,
  SunDim,
  Droplets,
  Plus,
  Minus,
  Pill,
  BarChart2
} from 'lucide-react';

import Navbar from '@/components/Navbar';

function NutritionCheck() {
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const [waterGlasses, setWaterGlasses] = useState(5);
  const [tabletTaken, setTabletTaken] = useState(false);

  const handleWaterIncrease = () => {
    setWaterGlasses(prev => Math.min(prev + 1, 20));
  };

  const handleWaterDecrease = () => {
    setWaterGlasses(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    console.log({
      breakfast,
      lunch,
      dinner,
      waterGlasses,
      tabletTaken
    });
    alert('Data berhasil disimpan!');
  };

  return (
    <div className="min-h-screen bg-[#f8f5f6] text-[#1d0c12] antialiased flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-10 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Halo, Bunda Sarah!</h1>
            <p className="text-[#a14563] text-base md:text-lg font-normal">Mari cek asupan gizi harian untuk kesehatan ibu dan si kecil hari ini.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Meal Log Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eacdd7]/50">
                <div className="flex items-center gap-3 mb-6 border-b border-[#eacdd7] pb-4">
                  <span className="text-[#FF4081]">
                    <UtensilsCrossed size={24} />
                  </span>
                  <h2 className="text-xl font-bold">Catatan Makan (Meal Log)</h2>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Breakfast */}
                  <div className="form-group">
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                      <Sunrise className="text-orange-400" size={20} />
                      Makan Pagi
                    </label>
                    <textarea
                      className="w-full resize-none rounded-xl border border-[#eacdd7] bg-[#f8f5f6] p-4 text-base placeholder:text-[#a14563]/60 focus:border-[#FF4081] focus:ring-1 focus:ring-[#FF4081] transition-all outline-none"
                      placeholder="Contoh: Nasi uduk, 1 butir telur dadar, tempe orek..."
                      rows="2"
                      value={breakfast}
                      onChange={(e) => setBreakfast(e.target.value)}
                    />
                  </div>

                  {/* Lunch */}
                  <div className="form-group">
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                      <SunDim className="text-yellow-500" size={20} />
                      Makan Siang
                    </label>
                    <textarea
                      className="w-full resize-none rounded-xl border border-[#eacdd7] bg-[#f8f5f6] p-4 text-base placeholder:text-[#a14563]/60 focus:border-[#FF4081] focus:ring-1 focus:ring-[#FF4081] transition-all outline-none"
                      placeholder="Contoh: Nasi putih, ikan bakar, sayur bayam, buah pisang..."
                      rows="2"
                      value={lunch}
                      onChange={(e) => setLunch(e.target.value)}
                    />
                  </div>

                  {/* Dinner */}
                  <div className="form-group">
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                      <Moon className="text-indigo-400" size={20} />
                      Makan Malam
                    </label>
                    <textarea
                      className="w-full resize-none rounded-xl border border-[#eacdd7] bg-[#f8f5f6] p-4 text-base placeholder:text-[#a14563]/60 focus:border-[#FF4081] focus:ring-1 focus:ring-[#FF4081] transition-all outline-none"
                      placeholder="Contoh: Roti gandum, susu ibu hamil, salad buah..."
                      rows="2"
                      value={dinner}
                      onChange={(e) => setDinner(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Water & Tablet Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eacdd7]/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Water Intake */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                      <Droplets className="text-blue-500" size={20} />
                      Air Minum (Gelas)
                    </label>
                    <div className="relative flex items-center">
                      <button
                        className="absolute left-2 p-2 text-[#a14563] hover:text-[#FF4081] hover:bg-[#ffeef5] rounded-lg transition-colors"
                        type="button"
                        onClick={handleWaterDecrease}
                      >
                        <Minus size={20} />
                      </button>
                      <input
                        className="w-full text-center rounded-xl border border-[#eacdd7] bg-[#f8f5f6] py-3 px-12 text-lg font-bold focus:border-[#FF4081] focus:ring-1 focus:ring-[#FF4081] outline-none"
                        type="number"
                        value={waterGlasses}
                        onChange={(e) => setWaterGlasses(parseInt(e.target.value) || 0)}
                      />
                      <button
                        className="absolute right-2 p-2 text-[#a14563] hover:text-[#FF4081] hover:bg-[#ffeef5] rounded-lg transition-colors"
                        type="button"
                        onClick={handleWaterIncrease}
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <p className="text-xs text-[#a14563] mt-2 text-center">Target: 8 gelas / hari</p>
                  </div>

                  {/* Tablet */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                      <Pill className="text-[#FF4081]" size={20} />
                      Tablet Tambah Darah
                    </label>
                    <div className="flex items-center justify-between rounded-xl border border-[#eacdd7] bg-[#f8f5f6] p-3">
                      <span className="text-sm font-medium pl-1">Sudah diminum?</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={tabletTaken}
                          onChange={() => setTabletTaken(!tabletTaken)}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF4081]"></div>
                      </label>
                    </div>
                    <p className="text-xs text-[#a14563] mt-2">Penting untuk mencegah anemia</p>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <button
                className="w-full bg-[#FF4081] hover:bg-[#d6336c] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#FF4081]/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 text-lg"
                onClick={handleSubmit}
              >
                <BarChart2 size={24} />
                Simpan & Analisis Gizi
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-white border-t border-[#eacdd7]">
        <div className="max-w-7xl mx-auto px-10 text-center text-[#a14563] text-sm">
          <p>© 2026 Cek Gizi Harian. Dibuat dengan cinta untuk Bunda dan Buah Hati.</p>
        </div>
      </footer>
    </div>
  );
}

export default NutritionCheck;