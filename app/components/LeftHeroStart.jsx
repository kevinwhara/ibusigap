import Image from "next/image";

export default function LeftHeroStart() {
    return (
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
    );
}