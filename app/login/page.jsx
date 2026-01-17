"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="font-display antialiased text-text-main min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="flex flex-1 w-full">
                    {/* Left Hero */}
                    <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-8 xl:p-12 overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <div
                                className="w-full h-full bg-center bg-cover bg-primary transition-transform hover:scale-105 duration-700"
                            />
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

                    {/* Right Form */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-12 xl:p-20">
                        <div className="w-full max-w-[440px] flex flex-col gap-8 mt-16 lg:mt-0">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-black">Masuk ke Akun</h1>
                                <p className="text-text-sub">Selamat Datang, Bunda! Pantau kesehatan kehamilan Anda dengan mudah.</p>
                            </div>

                            <form className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold">Email Pengguna</label>
                                    <div className="relative">
                                        <input id="email-input" className="form-input w-full h-12 px-4 rounded-xl border " placeholder="contoh@email.com" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between">
                                        <label className="text-sm font-semibold">Kata Sandi</label>
                                    </div>
                                    <input id="password-input" type="password" className="form-input w-full h-12 px-4 rounded-xl border" placeholder="Masukkan kata sandi Anda" />
                                </div>

                                <button type="submit" className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl">
                                    Masuk
                                </button>
                            </form>

                            <div className="text-center">
                                <span className="text-text-sub">Belum punya akun? </span>
                                <Link href="/signup" className="font-bold text-primary">Daftar Sekarang</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
