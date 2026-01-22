"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import LeftHeroStart from "@/components/LeftHeroStart";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "@/lib/api";

export default function LoginPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const payloadLogin = {
                email: formData.email,
                password: formData.password,
            };

            const responseLogin = await api.post("/users/login", payloadLogin);
            console.log("Login Sukses:", responseLogin.data);

            const token = responseLogin.data?.token || responseLogin.data?.data?.token;

            if (!token) {
                throw new Error("Gagal mendapatkan token akses.");
            }

            localStorage.setItem("accessToken", token); // Simpan di LocalStorage
            Cookies.set("accessToken", token, { expires: 7 });

            alert("Login berhasil! Selamat datang kembali.");
            router.push("/dashboard");

        } catch (err) {
            console.error("Error process:", err);

            // 💡 UPGRADE 2: Penanganan Error yang Lebih Cerdas
            let errorMessage = "Terjadi kesalahan sistem :(";

            // Cek kalau ada respon dari server
            if (err.response) {
                // Prioritas 1: Pesan dari server
                errorMessage = err.response.data?.message;

                // Prioritas 2: Kalau server bisu tapi ngasih kode 401 (Unauthorized)
                if (!errorMessage && err.response.status === 401) {
                    errorMessage = "Email atau kata sandi salah nih, Bun. Cek lagi ya!";
                }

                // Prioritas 3: Kalau status 404 (Not Found)
                if (!errorMessage && err.response.status === 404) {
                    errorMessage = "Akun tidak ditemukan. Daftar dulu yuk!";
                }
            }
            // Kalau gak ada koneksi internet
            else if (err.message === "Network Error") {
                errorMessage = "Koneksi bermasalah, cek internet kamu ya.";
            }

            // Set pesan error final
            setError(errorMessage || "Terjadi kesalahan sistem, coba lagi nanti");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="font-display antialiased text-text-main min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="flex flex-1 w-full">

                    <LeftHeroStart />

                    {/* Login Form */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-12 xl:p-20">
                        <div className="w-full max-w-[440px] flex flex-col gap-8 mt-16 lg:mt-0">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-black">Masuk ke Akun</h1>
                                <p className="text-text-sub">Selamat Datang, Bunda! Pantau kesehatan kehamilan Anda dengan mudah.</p>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium animate-pulse">
                                    ⚠️ {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold">Email Pengguna</label>
                                    <div className="relative">
                                        <input required name="email" className="form-input w-full h-12 px-4 rounded-xl border " placeholder="contoh@email.com" onChange={handleChange} suppressHydrationWarning/>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between">
                                        <label className="text-sm font-semibold">Kata Sandi</label>
                                    </div>
                                    <input required name="password" type="password" className="form-input w-full h-12 px-4 rounded-xl border" placeholder="Masukkan kata sandi Anda" onChange={handleChange} suppressHydrationWarning/>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="mt-4 w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : "Masuk Akun"}
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
