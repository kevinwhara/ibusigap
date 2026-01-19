import { Lightbulb } from 'lucide-react';

export default function SubmitButton({ message }) {
    return (
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
                    <p className="text-sm mt-0.5">{message}</p>
                </div>
            </div>
        </div>
    );
}