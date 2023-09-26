import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

function middleware(request) {
	// console.log('-- FROM MIDDLEWARE --');
	// console.log(request.nextUrl.pathname);
	// console.log(request.nextauth.token);
	const path = request.nextUrl.pathname;
	const token = request.nextauth.token;
	// console.log(path, token);
	// if (path === "/dashboard" && token?.account_type === "student") {
	// 	return NextResponse.redirect(
	// 		new URL("/dashboard/classroom", request.url)
	// 	);
	// }
}

export default withAuth(middleware, {
	callbacks: { authorized: ({ token }) => !!token },
});

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
