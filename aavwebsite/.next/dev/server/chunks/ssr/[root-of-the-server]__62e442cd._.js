module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// "use client";
// import Link from "next/link";
// import { useState } from "react";
// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   return (
//     <header className="fixed top-0 left-0 w-full bg-[#1c1c1c] border-b border-gray-800 text-white z-50">
//       <div className="w-full flex justify-between items-center px-8 py-6 md:py-8">
//         {/* Logo */}
//         <Link href="/" className="font-bold text-xl hover:text-gray-300">
//           AAV - LOGO
//         </Link>
//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-8 text-base relative z-50">
//           <Link href="/" className="hover:text-gray-300">
//             Home
//           </Link>
//           {/* About Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">
//               About ▼
//             </button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-[#1c1c1c] border border-gray-700
//                 rounded-md w-40
//                 z-50
//               "
//             >
//               <Link href="/about/aboutus" className="block px-4 py-2 hover:bg-gray-800">
//                 About Us
//               </Link>
//               <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-800">
//                 Our Team
//               </Link>
//               <Link href="/about/achievements" className="block px-4 py-2 hover:bg-gray-800">
//                 Achievements
//               </Link>
//               <Link href="/about/news" className="block px-4 py-2 hover:bg-gray-800">
//                 News
//               </Link>
//             </div>
//           </div>
//           {/* ASV */}
//           <Link href="/asv" className="hover:text-gray-300">
//             ASV
//           </Link>
//           {/* UAV Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">
//               UAV ▼
//             </button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-[#1c1c1c] border border-gray-700
//                 rounded-md w-40
//                 z-50
//               "
//             >
//               <Link href="/uav/1" className="block px-4 py-2 hover:bg-gray-800">
//                 UAV 1.0
//               </Link>
//               <Link href="/uav/2" className="block px-4 py-2 hover:bg-gray-800">
//                 UAV 2.0
//               </Link>
//             </div>
//           </div>
//           {/* Competitions Dropdown */}
//           <div className="relative group inline-block">
//             <button className="hover:text-gray-300">
//               Competitions ▼
//             </button>
//             <div
//               className="
//                 absolute left-0 top-full
//                 hidden group-hover:block
//                 bg-[#1c1c1c] border border-gray-700
//                 rounded-md w-40
//                 z-50
//               "
//             >
//               <Link href="/competitions/robosub" className="block px-4 py-2 hover:bg-gray-800">
//                 RoboSub
//               </Link>
//               <Link href="/competitions/robotx" className="block px-4 py-2 hover:bg-gray-800">
//                 RobotX
//               </Link>
//             </div>
//           </div>
//           <Link href="/outreach" className="hover:text-gray-300">
//             Outreach
//           </Link>
//           <Link href="/sponsors" className="hover:text-gray-300">
//             Sponsors
//           </Link>
//           <Link href="/shop" className="hover:text-gray-300">
//             Shop
//           </Link>
//           <Link href="/contact" className="hover:text-gray-300">
//             Contact
//           </Link>
//         </nav>
//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden focus:outline-none z-50"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>
//       {/* Mobile Dropdown Menu */}
//       {isMenuOpen && (
//         <nav className="md:hidden px-8 pb-4 flex flex-col space-y-3 text-sm text-right bg-[#1c1c1c] border-t border-gray-800 z-40">
//           <Link href="/" className="hover:text-gray-300">
//             Home
//           </Link>
//           {/* Mobile About Dropdown */}
//           <div>
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "about" ? null : "about")
//               }
//               className="w-full text-right hover:text-gray-300"
//             >
//               About ▼
//             </button>
//             {openDropdown === "about" && (
//               <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
//                 <Link href="/about/aboutus" className="hover:text-white">
//                   About
//                 </Link>
//                 <Link href="/about/team" className="hover:text-white">
//                   Our Team
//                 </Link>
//                 <Link href="/about/achievements" className="hover:text-white">
//                   Achievements
//                 </Link>
//                 <Link href="/about/news" className="hover:text-white">
//                   News
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link href="/asv" className="hover:text-gray-300">
//             ASV
//           </Link>
//           {/* Mobile UAV Dropdown */}
//           <div>
//             <button
//               onClick={() =>
//                 setOpenDropdown(openDropdown === "uav" ? null : "uav")
//               }
//               className="w-full text-right hover:text-gray-300"
//             >
//               UAV ▼
//             </button>
//             {openDropdown === "uav" && (
//               <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
//                 <Link href="/uav/1" className="hover:text-white">
//                   UAV 1.0
//                 </Link>
//                 <Link href="/uav/2" className="hover:text-white">
//                   UAV 2.0
//                 </Link>
//               </div>
//             )}
//           </div>
//           {/* Mobile Competitions Dropdown */}
//           <div>
//             <button
//               onClick={() =>
//                 setOpenDropdown(
//                   openDropdown === "competitions" ? null : "competitions"
//                 )
//               }
//               className="w-full text-right hover:text-gray-300"
//             >
//               Competitions ▼
//             </button>
//             {openDropdown === "competitions" && (
//               <div className="flex flex-col space-y-1 mt-2 pr-4 text-gray-300">
//                 <Link href="/competitions/robosub" className="hover:text-white">
//                   RoboSub
//                 </Link>
//                 <Link href="/competitions/robotx" className="hover:text-white">
//                   RobotX
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link href="/sponsors" className="hover:text-gray-300">
//             Sponsors
//           </Link>
//           <Link href="/shop" className="hover:text-gray-300">
//             Shop
//           </Link>
//           <Link href="/contact" className="hover:text-gray-300">
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }
"use client";
;
;
;
;
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 w-full bg-black border-b border-gray-800 text-white z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-between items-center px-8 py-3 md:py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center hover:opacity-90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/aavlogo.jpg",
                            alt: "AAV Logo",
                            width: 220,
                            height: 70,
                            priority: true,
                            className: "h-14 w-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex space-x-8 text-lg relative z-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-gray-300",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "About ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-44   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about/aboutus",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about/team",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "Our Team"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about/achievements",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "Achievements"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about/news",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "News"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 293,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "ASV ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-60   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/asv",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "ASV 1.0 (RobotX 2024)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/asv/2",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "ASV 2.0 (RobotX 2026)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "UAV ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-60   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/uav/1",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "UAV 1.0 (RobotX 2024)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/uav/2",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "UAV 2.0 (SUAS 2025)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/uav/3",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "UAV 3.0 (RobotX 2026)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 338,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "Competitions ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-52   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/competitions/robotx-2024",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "RobotX 2024"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 356,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/competitions/suas-2025",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "SUAS 2025"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 359,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/competitions/robotx-2026",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "RobotX 2026"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/outreach",
                                className: "hover:text-gray-300",
                                children: "Outreach"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "Sponsors ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-44   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sponsors/2024",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "2024 Sponsors"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sponsors/2026",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "2026 Sponsors"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 387,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                className: "hover:text-gray-300",
                                children: "Shop"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/newsroom",
                                className: "hover:text-gray-300",
                                children: "Newsroom"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "hover:text-gray-300",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        className: "md:hidden focus:outline-none z-50",
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6h16M4 12h16m-7 6h7"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "md:hidden px-8 pb-4 flex flex-col space-y-3 text-base text-right bg-black border-t border-gray-800 z-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "hover:text-gray-300",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "about" ? null : "about"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "About ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this),
                            openDropdown === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/aboutus",
                                        className: "hover:text-white",
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 440,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/team",
                                        className: "hover:text-white",
                                        children: "Our Team"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/achievements",
                                        className: "hover:text-white",
                                        children: "Achievements"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/news",
                                        className: "hover:text-white",
                                        children: "News"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 449,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "asv" ? null : "asv"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "ASV ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this),
                            openDropdown === "asv" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/asv/1",
                                        className: "hover:text-white",
                                        children: "ASV 1.0 (RobotX 2024)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/asv/2",
                                        className: "hover:text-white",
                                        children: "ASV 2.0 (RobotX 2026)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 468,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 464,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "uav" ? null : "uav"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "UAV ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            openDropdown === "uav" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/uav/1",
                                        className: "hover:text-white",
                                        children: "UAV 1.0 (RobotX 2024)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/uav/2",
                                        className: "hover:text-white",
                                        children: "UAV 2.0 (SUAS 2025)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/uav/3",
                                        className: "hover:text-white",
                                        children: "UAV 3.0 (RobotX 2026)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 490,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 483,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "competitions" ? null : "competitions"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "Competitions ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this),
                            openDropdown === "competitions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/competitions/robotx-2024",
                                        className: "hover:text-white",
                                        children: "RobotX 2024"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 506,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/competitions/suas-2025",
                                        className: "hover:text-white",
                                        children: "SUAS 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 509,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/competitions/robotx-2026",
                                        className: "hover:text-white",
                                        children: "RobotX 2026"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 512,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 505,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 497,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/outreach",
                        className: "hover:text-gray-300",
                        children: "Outreach"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 519,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "sponsors" ? null : "sponsors"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "Sponsors ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this),
                            openDropdown === "sponsors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/sponsors/2024",
                                        className: "hover:text-white",
                                        children: "2024 Sponsors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 532,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/sponsors/2026",
                                        className: "hover:text-white",
                                        children: "2026 Sponsors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 535,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 531,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        className: "hover:text-gray-300",
                        children: "Shop"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 542,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/newsroom",
                        className: "hover:text-gray-300",
                        children: "Newsroom"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 546,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: "hover:text-gray-300",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                lineNumber: 426,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    // ===== Carousel data =====
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                title: "Project Build",
                subtitle: "Systems + Integration",
                image: "/carousel/slide1.jpg",
                href: "/about/team"
            },
            {
                title: "RobotX",
                subtitle: "Maritime Autonomy",
                image: "/carousel/slide2.jpg",
                href: "/competitions/robotx-2024"
            },
            {
                title: "SUAS",
                subtitle: "Aerial Mission Systems",
                image: "/carousel/slide3.jpg",
                href: "/competitions/suas-2025"
            },
            {
                title: "Field Tests",
                subtitle: "Iterate Fast",
                image: "/carousel/slide4.jpg",
                href: "/newsroom"
            },
            {
                title: "Sponsors",
                subtitle: "Partners",
                image: "/carousel/slide5.jpg",
                href: "/sponsors/2024"
            }
        ], []);
    const navigate = useNavigate();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clampIndex = (i)=>(i + items.length) % items.length;
    const goNext = ()=>setActive((p)=>clampIndex(p + 1));
    const goPrev = ()=>setActive((p)=>clampIndex(p - 1));
    // Auto-play
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // reset interval whenever active changes (so manual clicks feel responsive)
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(()=>{
            setActive((p)=>clampIndex(p + 1));
        }, 3500);
        return ()=>{
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        active,
        items.length
    ]);
    // Pause autoplay on hover (optional)
    const pause = ()=>{
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = null;
    };
    const resume = ()=>{
        if (intervalRef.current) return;
        intervalRef.current = window.setInterval(()=>{
            setActive((p)=>clampIndex(p + 1));
        }, 3500);
    };
    // Keyboard controls
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        items.length
    ]);
    // Helper to pick visible indices: prev, active, next
    const prevIdx = clampIndex(active - 1);
    const nextIdx = clampIndex(active + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-[#121212] text-white font-sans min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-60 text-center border-b border-[#1e1e1e]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl md:text-2xl font-medium",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: "/1. Section 1 - 15 Secs Video.mp4",
                                autoPlay: true,
                                muted: true,
                                loop: false,
                                playsInline: true,
                                controls: true,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 px-6 md:px-10 border-b border-[#1e1e1e]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl font-bold mb-4",
                                children: "Innovation in Motion"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-white/75 max-w-4xl",
                                children: "Our team at NTU AAV is constantly pushing boundaries in UAV and autonomous vehicle technologies."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid grid-cols-1 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-bold",
                                        children: "ASV"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            navigate('/asv');
                                        },
                                        className: "   px-6 py-2   bg-green-500   text-white text-sm   rounded-lg   hover:bg-green-600   transition",
                                        children: "Discover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-[#1e1e1e]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-bold",
                                        children: "UAV"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/uav/1",
                                        className: "text-sm text-gray-300 hover:text-white transition",
                                        children: "View More →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-bold",
                                        children: "RobotX"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/competitions/robotx-2024",
                                        className: "text-sm text-gray-300 hover:text-white transition",
                                        children: "View More →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-[#1e1e1e]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-bold",
                                        children: "SUAS"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/competitions/suas-2025",
                                        className: "text-sm text-gray-300 hover:text-white transition",
                                        children: "View More →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-r md:border-r border-[#1e1e1e]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-bold",
                                        children: "Sponsors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/sponsors/2024",
                                        className: "text-sm text-gray-300 hover:text-white transition",
                                        children: "View More →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#181818] h-80 p-10 flex flex-col justify-between border-b border-[#1e1e1e]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-bold",
                                        children: "Newsroom"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/newsroom",
                                        className: "text-sm text-gray-300 hover:text-white transition",
                                        children: "View More →"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-b border-[#1e1e1e]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6 md:px-10 py-16",
                            onMouseEnter: pause,
                            onMouseLeave: resume,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-8"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goPrev,
                                            "aria-label": "Previous slide",
                                            className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-white/15 bg-black/40 backdrop-blur hover:bg-black/60 transition grid place-items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "‹"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goNext,
                                            "aria-label": "Next slide",
                                            className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-white/15 bg-black/40 backdrop-blur hover:bg-black/60 transition grid place-items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl",
                                                children: "›"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-6 md:gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselCard, {
                                                    item: items[prevIdx],
                                                    variant: "side",
                                                    onClick: goPrev
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselCard, {
                                                    item: items[active],
                                                    variant: "active",
                                                    onClick: ()=>items[active].href && (window.location.href = items[active].href)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselCard, {
                                                    item: items[nextIdx],
                                                    variant: "side",
                                                    onClick: goNext
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-b border-[#1e1e1e]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-6 md:px-10 py-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/aboutus",
                                        className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[4/3]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/13. Section 5.1 - About Us.jpeg",
                                                        alt: "About Us",
                                                        fill: true,
                                                        priority: false,
                                                        className: "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]",
                                                        sizes: "(max-width: 768px) 100vw, 33vw"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white/95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs uppercase tracking-wider text-white/70",
                                                                children: "Learn more"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-semibold",
                                                                children: "About Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15",
                                                        children: [
                                                            "Discover",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "transition-transform duration-300 group-hover:translate-x-1",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/team",
                                        className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[4/3]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/14. Section 5.2 - Our Team.png",
                                                        alt: "Our Team",
                                                        fill: true,
                                                        className: "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]",
                                                        sizes: "(max-width: 768px) 100vw, 33vw"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white/95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs uppercase tracking-wider text-white/70",
                                                                children: "Meet the people"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-semibold",
                                                                children: "Our Team"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 317,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15",
                                                        children: [
                                                            "Discover",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "transition-transform duration-300 group-hover:translate-x-1",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[4/3]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/15. Section 5.3 - Contact Us.jpeg",
                                                        alt: "Contact Us",
                                                        fill: true,
                                                        className: "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]",
                                                        sizes: "(max-width: 768px) 100vw, 33vw"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white/95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs uppercase tracking-wider text-white/70",
                                                                children: "Get in touch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-semibold",
                                                                children: "Contact Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition group-hover:bg-white/15",
                                                        children: [
                                                            "Discover",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "transition-transform duration-300 group-hover:translate-x-1",
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 13
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                lineNumber: 260,
                                columnNumber: 5
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                        lineNumber: 258,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function CarouselCard({ item, variant, onClick }) {
    const isActive = variant === "active";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: [
            "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#181818] text-left transition-all duration-500 ease-out",
            "focus:outline-none focus:ring-2 focus:ring-white/30",
            isActive ? "w-[78%] md:w-[520px] h-[320px] md:h-[380px] shadow-2xl" : "w-[54%] md:w-[320px] h-[240px] md:h-[280px] opacity-80 hover:opacity-95"
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: item.image,
                alt: item.title,
                fill: true,
                className: "object-cover transition-transform duration-700 group-hover:scale-[1.03]",
                sizes: isActive ? "(max-width: 768px) 78vw, 520px" : "(max-width: 768px) 54vw, 320px",
                priority: isActive
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(255,255,255,0.20),transparent_55%)]"
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: `font-bold tracking-tight ${isActive ? "text-4xl" : "text-2xl"}`,
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                    lineNumber: 409,
                                    columnNumber: 13
                                }, this),
                                item.subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-1 text-white/75 ${isActive ? "text-base" : "text-sm"}`,
                                    children: item.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: [
                                "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur transition",
                                isActive ? "opacity-100" : "opacity-0 md:opacity-70"
                            ].join(" "),
                            children: [
                                "View",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "transition-transform duration-300 group-hover:translate-x-1",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/page.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62e442cd._.js.map