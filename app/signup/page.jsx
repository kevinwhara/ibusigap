"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Users, LockKeyhole } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="font-display antialiased text-text-main min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="flex flex-1 w-full">
                    {/* Left Hero (TETAP) */}
                    <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-8 xl:p-12 overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <div className="w-full h-full bg-center bg-cover bg-primary transition-transform hover:scale-105 duration-700" />
                        </div>

                        <div className="relative z-10 text-white max-w-lg mt-auto pb-10">
                            <div className="flex items-center gap-3 md:gap-4 mb-8">
                                <div className="w-11 h-11 text-[#ff4284] relative">
                                    <Image
                                        src="/images/logo-light.svg"
                                        alt="Logo IbuSIGAP"
                                        width={100}
                                        height={100}

                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-white">IbuSIGAP</h2>
                            </div>
                            <h1 className="text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                                Perjalanan Sehat untuk Ibu & Buah Hati
                            </h1>
                            <p className="text-lg xl:text-xl opacity-90 font-medium">
                                Bergabunglah dengan ribuan ibu lainnya dalam memantau nutrisi dan kesehatan kehamilan dengan mudah.
                            </p>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-12 xl:p-20 overflow-y-hidden">
                        <div className="w-full max-w-[520px] flex flex-col gap-8 mt-16 lg:mt-0">

                            {/* Title */}
                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl lg:text-3xl font-black">
                                    Pendaftaran Akun Baru
                                </h1>
                                <p className="text-text-sub text-sm">
                                    Lengkapi data diri Anda untuk membuat akun baru.
                                </p>
                            </div>

                            {/* DATA IBU & KEHAMILAN */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                    <User />
                                    DATA IBU & KEHAMILAN
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Nama Lengkap Ibu */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">
                                            Nama Lengkap Ibu <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            id="ibu-name-input"
                                            className="form-input h-11 px-4 rounded-xl border"
                                            placeholder="Masukkan nama lengkap"
                                        />
                                    </div>

                                    {/* Usia Ibu */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">
                                            Usia Ibu (Tahun) <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            id="ibu-age-input"
                                            className="form-input h-11 px-4 rounded-xl border"
                                            placeholder="Contoh: 28"
                                        />
                                    </div>

                                    {/* Usia Kehamilan */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">
                                            Usia Kehamilan (Minggu) <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            id="kehamilan-weeks-input"
                                            type="number"
                                            className="form-input h-11 px-4 rounded-xl border"
                                            placeholder="Contoh: 12"
                                        />
                                    </div>

                                    {/* No Telp Ibu */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">
                                            No. Telepon / WA Ibu <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            id="ibu-phone-input"
                                            className="form-input h-11 px-4 rounded-xl border"
                                            placeholder="+62 812 3456 7890"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* DATA SUAMI */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                    <Users />
                                    DATA SUAMI
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Nama Suami */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">Nama Suami</label>
                                        <input
                                            id="suami-name-input"
                                            className="form-input h-11 px-4 rounded-xl border"
                                            placeholder="Nama suami"
                                        />
                                    </div>

                                    {/* No Telp Suami */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">
                                            No. Telepon / WA Suami
                                        </label>
                                        <input
                                            id="suami-phone-input"
                                            className="form-input h-11 px-4 rounded-xl border"
                                            placeholder="+62 812 3456 7890"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/*  INFORMASI AKUN  */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                    <LockKeyhole />
                                    INFORMASI AKUN
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold">
                                        Alamat Email <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email-input"
                                        className="form-input h-11 px-4 rounded-xl border w-full"
                                        placeholder="anda@email.com"
                                    />
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm font-semibold">
                                        Kata Sandi <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="password-input"
                                        className="form-input h-11 px-4 rounded-xl border w-full"
                                        placeholder="Minimal 8 karakter"
                                    />
                                    <span className="text-xs text-text-sub">
                                        Gunakan kombinasi huruf, angka, dan simbol.
                                    </span>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-4 w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl"
                            >
                                Daftar Akun
                            </button>

                            <div className="text-center">
                                <span className="text-text-sub">Sudah punya akun? </span>
                                <Link href="/login" className="font-bold text-primary">Masuk</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
