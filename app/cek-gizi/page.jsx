
"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

function NutritionCheck() {
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const [waterGlasses, setWaterGlasses] = useState(5);
  const [tabletTaken, setTabletTaken] = useState(false);
  const [nutritionScore, setNutritionScore] = useState(10);

  const handleWaterIncrease = () => {
    setWaterGlasses(prev => Math.min(prev + 1, 20));
  };

  const handleWaterDecrease = () => {
    setWaterGlasses(prev => Math.max(prev - 1, 0));
  };

  const handleSave = () => {
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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Meal Log Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eacdd7]/50">
                <div className="flex items-center gap-3 mb-6 border-b border-[#eacdd7] pb-4">
                  <span className="material-symbols-outlined text-[#FF4081]">restaurant_menu</span>
                  <h2 className="text-xl font-bold">Catatan Makan (Meal Log)</h2>
                </div>
                <div className="flex flex-col gap-6">
                  {/* Breakfast */}
                  <div className="form-group">
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                      <span className="material-symbols-outlined text-orange-400 text-lg">wb_twilight</span>
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
                      <span className="material-symbols-outlined text-yellow-500 text-lg">wb_sunny</span>
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
                      <span className="material-symbols-outlined text-indigo-400 text-lg">dark_mode</span>
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
                      <span className="material-symbols-outlined text-blue-500 text-lg">water_drop</span>
                      Air Minum (Gelas)
                    </label>
                    <div className="relative flex items-center">
                      <button 
                        className="absolute left-2 p-2 text-[#a14563] hover:text-[#FF4081] hover:bg-[#ffeef5] rounded-lg transition-colors"
                        type="button"
                        onClick={handleWaterDecrease}
                      >
                        <span className="material-symbols-outlined text-xl">remove</span>
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
                        <span className="material-symbols-outlined text-xl">add</span>
                      </button>
                    </div>
                    <p className="text-xs text-[#a14563] mt-2 text-center">Target: 8 gelas / hari</p>
                  </div>
                  
                  {/* Tablet */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                      <span className="material-symbols-outlined text-[#FF4081] text-lg">medication</span>
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
                onClick={handleSave}
              >
                <span className="material-symbols-outlined">analytics</span>
                Simpan & Analisis Gizi
              </button>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24">
              {/* Nutrition Score Card */}
              <div className="bg-gradient-to-br from-[#FF4081] to-[#d6336c] rounded-2xl p-6 shadow-md text-white relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wider">Skor Gizi Harian</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black tracking-tight">{nutritionScore}</span>
                      <span className="text-xl font-medium text-white/80">/ 100</span>
                    </div>
                    <p className="text-white/90 text-sm font-medium mt-1">
                      Status: <span className="font-bold underline decoration-2 decoration-yellow-300 underline-offset-4">Perlu Ditingkatkan</span>
                    </p>
                  </div>
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                      <path 
                        className="text-white/20" 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3"
                      />
                      <path 
                        className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeDasharray={`${nutritionScore}, 100`}
                        strokeLinecap="round"
                        strokeWidth="3"
                      />
                    </svg>
                    <span className="material-symbols-outlined text-4xl absolute text-white">health_metrics</span>
                  </div>
                </div>
              </div>

              {/* Nutrition Analysis Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eacdd7]/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#FF4081]">vital_signs</span>
                    <h2 className="text-xl font-bold">Analisis Gizi</h2>
                  </div>
                  <span className="text-xs font-medium bg-[#FF4081]/10 text-[#FF4081] px-2 py-1 rounded-md">Real-time</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Energy */}
                  <div className="p-4 rounded-xl bg-green-50 border border-green-100 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Energi</span>
                      <span className="material-symbols-outlined text-green-600 text-lg">check_circle</span>
                    </div>
                    <p className="text-lg font-black text-gray-800">2100 <span className="text-xs font-normal text-gray-500">kkal</span></p>
                    <span className="text-xs font-bold text-green-700 bg-green-200/50 self-start px-2 py-0.5 rounded">Cukup</span>
                  </div>
                  
                  {/* Protein */}
                  <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Protein</span>
                      <span className="material-symbols-outlined text-yellow-600 text-lg">warning</span>
                    </div>
                    <p className="text-lg font-black text-gray-800">45 <span className="text-xs font-normal text-gray-500">g</span></p>
                    <span className="text-xs font-bold text-yellow-700 bg-yellow-200/50 self-start px-2 py-0.5 rounded">Kurang</span>
                  </div>
                  
                  {/* Iron */}
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Zat Besi</span>
                      <span className="material-symbols-outlined text-red-600 text-lg">error</span>
                    </div>
                    <p className="text-lg font-black text-gray-800">Low <span className="text-xs font-normal text-gray-500">intake</span></p>
                    <span className="text-xs font-bold text-red-700 bg-red-200/50 self-start px-2 py-0.5 rounded">Rendah</span>
                  </div>
                  
                  {/* Water */}
                  <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Air</span>
                      <span className="material-symbols-outlined text-yellow-600 text-lg">water_loss</span>
                    </div>
                    <p className="text-lg font-black text-gray-800">{waterGlasses} <span className="text-xs font-normal text-gray-500">gelas</span></p>
                    <span className="text-xs font-bold text-yellow-700 bg-yellow-200/50 self-start px-2 py-0.5 rounded">
                      {waterGlasses >= 8 ? 'Cukup' : 'Kurang'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommendations Card */}
              <div className="bg-[#FF4081]/5 rounded-2xl p-6 border border-[#FF4081]/20 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF4081]/10 rounded-full blur-3xl"></div>
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="p-1.5 bg-[#FF4081] text-white rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-xl">lightbulb</span>
                  </div>
                  <h3 className="font-bold text-lg">Rekomendasi Otomatis</h3>
                </div>
                <ul className="space-y-3 relative z-10">
                  <li className="flex gap-3 bg-white p-3 rounded-xl shadow-sm border border-[#FF4081]/10">
                    <span className="material-symbols-outlined text-[#FF4081] mt-0.5">egg_alt</span>
                    <div>
                      <p className="text-sm font-bold">Tingkatkan Protein</p>
                      <p className="text-xs text-[#a14563] mt-0.5">Tambahkan: Telur rebus, dada ayam, atau tahu tempe di menu makan malam.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 bg-white p-3 rounded-xl shadow-sm border border-[#FF4081]/10">
                    <span className="material-symbols-outlined text-red-500 mt-0.5">bloodtype</span>
                    <div>
                      <p className="text-sm font-bold">Cegah Anemia</p>
                      <p className="text-xs text-[#a14563] mt-0.5">Konsumsi sayuran hijau (bayam) dan hati ayam. Jangan lupa tablet tambah darah!</p>
                    </div>
                  </li>
                  <li className="flex gap-3 bg-white p-3 rounded-xl shadow-sm border border-[#FF4081]/10">
                    <span className="material-symbols-outlined text-blue-500 mt-0.5">glass_cup</span>
                    <div>
                      <p className="text-sm font-bold">Hidrasi Kurang</p>
                      <p className="text-xs text-[#a14563] mt-0.5">Minum minimal 3 gelas air lagi sebelum tidur untuk mencapai target 8 gelas.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Consultation Banner */}
              <div className="rounded-2xl overflow-hidden h-32 relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#FF4081] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">Konsultasi Bidan?</p>
                    <p className="text-xs text-white/80">Chat sekarang 24/7</p>
                  </div>
                  <span className="material-symbols-outlined text-white text-4xl bg-white/20 p-2 rounded-full">support_agent</span>
                </div>
                <div 
                  className="absolute inset-0 z-[-1] bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMkDbKc1G3ZCkA3M777riwEx9EFamhkiE_a5i9JUu2GQl8lmaNMkqskteTeSNnSky2-G3FTv99HG7C3PE8PlB-QGsGi2YsTMnxznEmJS5J9nqhTTE4j6PdMG_ylae2j0tysyq7cDKjTdPlzU5hsfLP8Io-x6SbO1uORAEPXMw63AV1oMCfVQFsqnMUMeKQpP372BlNM5ej_ILiOHQCXyOKkGaetGlSEBWcQr0oZIJRvvnLvvcjJZ_82t4a83zeAbGVeuwABgdV8mg')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-white border-t border-[#eacdd7]">
        <div className="max-w-7xl mx-auto px-10 text-center text-[#a14563] text-sm">
          <p>© 2023 Cek Gizi Harian. Dibuat dengan cinta untuk Bunda dan Buah Hati.</p>
        </div>
      </footer>
    </div>
  );
}

export default NutritionCheck;