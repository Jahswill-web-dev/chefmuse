'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
function BackButton() {
    const router = useRouter();
    return (
    <button onClick={() => router.back()}
    className="p-2 cursor-pointer hover:bg-gray-200 rounded-full transition active:scale-90">
        <ArrowLeft size={32} />
    </button>)

}
export default BackButton;