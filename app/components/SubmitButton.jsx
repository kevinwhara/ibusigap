import { ChartColumnIncreasing } from 'lucide-react';

export default function SubmitButton({ eventhandler }) {
    return (
        <div className="flex justify-end pt-2 pb-10">
            <button
                className="w-full bg-[#ff4284] hover:bg-[#d6306d] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-[#ff4284]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                onClick={eventhandler}
            >
                <span className="material-symbols-outlined"></span>
                <ChartColumnIncreasing />
                Analisis Keluhan
            </button>
        </div>
    );
}