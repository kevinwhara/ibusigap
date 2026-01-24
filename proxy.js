import { NextResponse } from "next/server";

// Proteksi router sama autentikasi

export function proxy(request) {
    const path = request.nextUrl.pathname;

    const token = request.cookies.get("accessToken")?.value;

    const protectedRoutes = ["/dashboard", "/cek-gizi", "/cek-kesehatan", "/cek-masalah", "/pengaturan", "/jurnal-gizi", "/riwayat-medis", "/deteksi-gangguan"];
    const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));

    if (isProtectedRoute && !token) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    const authRoutes = ["/login", "/signup"];
    if (authRoutes.includes(path) && token) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
    ],
};