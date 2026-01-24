import React from "react";

export default function RiwayatMedis() {
    return (
        <div className="flex flex-col mx-auto gap-8 p-4 md:p-4 lg:p-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d0c12]">
                        Riwayat Medis
                    </h1>
                    <p className="text-slate-500 text-base md:text-lg">
                        Pantau kesehatan Bunda dan janin hari ini.
                    </p>
                </div>
            </div>
        </div>
    );
}