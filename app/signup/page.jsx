"use client";

import Link from "next/link";
import { User, Users, LockKeyhole, Loader2 } from "lucide-react";
import LeftHeroStart from "@/components/LeftHeroStart";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "@/lib/api";

export default function SignupPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        full_name: "",
        age: "",
        pregnancy_week: "",
        phone: "",
        email: "",
        password: "",
        // Data Suami
        nama_suami: "",
        phone_suami: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // 2. HANDLER INPUT
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 3. SUBMIT (REGISTER -> SAVE TOKEN -> UPDATE SUAMI)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // --- STEP 1: REGISTER DATA IBU ---
            const payloadIbu = {
                full_name: formData.full_name,
                email: formData.email,
                password: formData.password,
                phone: formData.phone,
                age: parseInt(formData.age),
                pregnancy_week: parseInt(formData.pregnancy_week),
            };

            // 🚀 Request 1: Register
            const responseRegister = await api.post("/users/register", payloadIbu);
            console.log("Register Sukses:", responseRegister.data);

            // --- STEP 2: AMBIL & SIMPAN TOKEN ---
            // Asumsi token ada di response.data.token atau response.data.data.token
            // (Sesuaikan path ini dengan respon asli API kamu!)
            const token = responseRegister.data?.token || responseRegister.data?.data?.token;

            if (!token) {
                throw new Error("Gagal mendapatkan token akses.");
            }

            // 💾 Simpan Token (Tiket VIP)
            localStorage.setItem("accessToken", token); // Simpan di LocalStorage
            Cookies.set("accessToken", token, { expires: 7 }); // Simpan di Cookie (7 hari)

            // --- STEP 3: UPDATE DATA SUAMI (PUT) ---
            // Cuma jalan kalau form nama suami diisi
            if (formData.nama_suami) {
                const payloadSuami = {
                    name: formData.nama_suami, // Sesuai request body: "name"
                    phone: formData.phone_suami, // Sesuai request body: "phone"
                };

                // 🚀 Request 2: Update Suami (PUT)
                // PENTING: Kita harus lampirin Token di Header biar server tau ini user yang baru login
                await api.put("/users/husband", payloadSuami, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Tempel Tiket VIP di sini
                    },
                });

                console.log("Update Suami Sukses");
            }

            router.push("/dashboard");

        } catch (err) {
            console.error("Error process:", err);
            const errorMessage = err.response?.data?.message || "Terjadi kesalahan sistem :";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="font-display antialiased text-text-main min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="flex flex-1 w-full">

                    <LeftHeroStart />

                    {/* Register Form */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-12 xl:p-20">
                        <div className="w-full max-w-[520px] flex flex-col gap-8 mt-16 lg:mt-0">

                            <div className="flex flex-col gap-1">
                                <h1 className="text-2xl lg:text-3xl font-black">Pendaftaran Akun Baru</h1>
                                <p className="text-text-sub text-sm">Lengkapi data diri Anda untuk membuat akun baru.</p>
                            </div>

                            {/* Peringatan Eror */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium animate-pulse">
                                    ⚠️ {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                                {/* Input Data Ibu */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        <User size={18} /> DATA IBU & KEHAMILAN
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold">Nama Lengkap Ibu <span className="text-primary">*</span></label>
                                            <input required name="full_name" placeholder="Masukkan nama lengkap" className="form-input h-11 px-4 rounded-xl border" onChange={handleChange} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold">Usia Ibu (Tahun) <span className="text-primary">*</span></label>
                                            <input required name="age" type="number" placeholder="Contoh: 28" className="form-input h-11 px-4 rounded-xl border" onChange={handleChange} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold">Usia Kehamilan (Minggu) <span className="text-primary">*</span></label>
                                            <input required name="pregnancy_week" type="number" placeholder="Contoh: 12" className="form-input h-11 px-4 rounded-xl border" onChange={handleChange} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold">No. Telepon / WA Ibu <span className="text-primary">*</span></label>
                                            <input required name="phone" placeholder="+62 812 3456 7890" className="form-input h-11 px-4 rounded-xl border" onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>

                                {/* Input Data Suami */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        <Users size={18} /> DATA SUAMI
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold">Nama Suami</label>
                                            <input required name="nama_suami" placeholder="Nama suami" className="form-input h-11 px-4 rounded-xl border" onChange={handleChange} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold">No. Telepon / WA Suami</label>
                                            <input required name="phone_suami" placeholder="+62 812 3456 7890" className="form-input h-11 px-4 rounded-xl border" onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>

                                {/* Input Data Akun */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        <LockKeyhole size={18} /> INFORMASI AKUN
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">Alamat Email <span className="text-primary">*</span></label>
                                        <input required name="email" type="email" placeholder="anda@email.com" className="form-input h-11 px-4 rounded-xl border w-full" onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold">Kata Sandi <span className="text-primary">*</span></label>
                                        <input required name="password" type="password" placeholder="Minimal 6 karakter" className="form-input h-11 px-4 rounded-xl border w-full" onChange={handleChange} />
                                        <span className="text-xs text-text-sub">Gunakan kombinasi huruf, angka, dan simbol.</span>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    suppressHydrationWarning
                                    className="mt-4 w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" /> : "Daftar Akun"}
                                </button>
                            </form>

                            <div className="text-center text-sm">
                                Sudah punya akun? <Link href="/login" className="font-bold text-primary">Masuk</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}