(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function Navbar() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 w-full bg-black border-b border-gray-800 text-white z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-between items-center px-8 py-3 md:py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center hover:opacity-90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex space-x-8 text-lg relative z-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-gray-300",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "About ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-44   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about/aboutus",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about/team",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "Our Team"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about/achievements",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "Achievements"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "ASV ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-60   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/asv",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "ASV 1.0 (RobotX 2024)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "UAV ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-60   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/uav/1",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "UAV 1.0 (RobotX 2024)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/uav/2",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "UAV 2.0 (SUAS 2025)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "Competitions ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-52   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/competitions/robotx-2024",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "RobotX 2024"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 356,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/competitions/suas-2025",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "SUAS 2025"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 359,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/outreach",
                                className: "hover:text-gray-300",
                                children: "Outreach"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        children: "Sponsors ▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   absolute left-0 top-full   hidden group-hover:block   bg-black border border-gray-700   rounded-md w-44   z-50   ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/sponsors/2024",
                                                className: "block px-4 py-3 hover:bg-gray-800 text-base",
                                                children: "2024 Sponsors"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/shop",
                                className: "hover:text-gray-300",
                                children: "Shop"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/newsroom",
                                className: "hover:text-gray-300",
                                children: "Newsroom"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsMenuOpen(!isMenuOpen),
                        className: "md:hidden focus:outline-none z-50",
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "md:hidden px-8 pb-4 flex flex-col space-y-3 text-base text-right bg-black border-t border-gray-800 z-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "hover:text-gray-300",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "about" ? null : "about"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "About ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this),
                            openDropdown === "about" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/aboutus",
                                        className: "hover:text-white",
                                        children: "About Us"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 440,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/team",
                                        className: "hover:text-white",
                                        children: "Our Team"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about/achievements",
                                        className: "hover:text-white",
                                        children: "Achievements"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "asv" ? null : "asv"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "ASV ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this),
                            openDropdown === "asv" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/asv/1",
                                        className: "hover:text-white",
                                        children: "ASV 1.0 (RobotX 2024)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "uav" ? null : "uav"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "UAV ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            openDropdown === "uav" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/uav/1",
                                        className: "hover:text-white",
                                        children: "UAV 1.0 (RobotX 2024)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/uav/2",
                                        className: "hover:text-white",
                                        children: "UAV 2.0 (SUAS 2025)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "competitions" ? null : "competitions"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "Competitions ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this),
                            openDropdown === "competitions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/competitions/robotx-2024",
                                        className: "hover:text-white",
                                        children: "RobotX 2024"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 506,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/competitions/suas-2025",
                                        className: "hover:text-white",
                                        children: "SUAS 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 509,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/outreach",
                        className: "hover:text-gray-300",
                        children: "Outreach"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 519,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(openDropdown === "sponsors" ? null : "sponsors"),
                                className: "w-full text-right hover:text-gray-300",
                                children: "Sponsors ▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this),
                            openDropdown === "sponsors" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2 mt-2 pr-4 text-gray-300 text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/sponsors/2024",
                                        className: "hover:text-white",
                                        children: "2024 Sponsors"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                                        lineNumber: 532,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        className: "hover:text-gray-300",
                        children: "Shop"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 542,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/newsroom",
                        className: "hover:text-gray-300",
                        children: "Newsroom"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx",
                        lineNumber: 546,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Navbar, "Gu+L5ODQKD2FCa+2dYeIArqn9tU=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/components/navbar.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const originMilestones = [
    {
        year: "2014",
        location: "Singapore"
    },
    {
        year: "2016",
        location: "Hawaii, USA"
    },
    {
        year: "2018",
        location: "Hawaii, USA"
    },
    {
        year: "2020",
        location: "COVID-19"
    },
    {
        year: "2022",
        location: "Sydney, Australia"
    },
    {
        year: "2024",
        location: "Florida, USA"
    }
];
const newsItems = [
    {
        tag: "Planning",
        title: "Successfully Tested New Navigation System in Open Waters",
        date: "March 15, 2025",
        summary: "Completed full-scale field tests of the enhanced autonomous navigation system with robust performance under real sea conditions."
    },
    {
        tag: "Perception",
        title: "Perception Module Achieves 95% Object Detection Accuracy",
        date: "March 10, 2025",
        summary: "Latest improvements to our computer vision pipeline deliver highly reliable detection of buoys and obstacles in challenging environments."
    },
    {
        tag: "Communication",
        title: "New Communication Protocol Reduces Latency by 40%",
        date: "March 5, 2025",
        summary: "A custom ROS-based protocol now provides faster, more resilient communication between onboard modules and the base station."
    }
];
const timelineEvents = [
    {
        year: "2014",
        competition: "RobotX",
        location: "Singapore"
    },
    {
        year: "2016",
        competition: "RobotX",
        location: "Hawaii, USA"
    },
    {
        year: "2018",
        competition: "RobotX",
        location: "Hawaii, USA"
    },
    {
        year: "2022",
        competition: "RobotX",
        location: "Sydney, Australia"
    },
    {
        year: "2022",
        competition: "VRX Competition",
        location: "Virtual"
    },
    {
        year: "2023",
        competition: "VRX Competition",
        location: "Virtual"
    },
    {
        year: "2024",
        competition: "RobotX",
        location: "Florida, USA"
    },
    {
        year: "2025",
        competition: "SUAS",
        location: "Maryland, USA"
    },
    {
        year: "2026",
        competition: "RobotX",
        location: "Singapore"
    }
];
function AboutPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-[#f5f7f9] text-slate-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-28 pb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-linear-to-b from-[#f5fbff] via-[#f6fbfd] to-[#f5f7f9]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#b6e9f5]/40 blur-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-[#b6e9f5]/40 blur-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative max-w-5xl mx-auto px-4 md:px-6 text-center pb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] shadow-sm mb-6",
                                            children: "🛟 Est. 2024"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4",
                                            children: [
                                                "About",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#008fb3]",
                                                    children: "Our Team"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "max-w-3xl mx-auto text-sm md:text-base text-slate-600 mb-10",
                                            children: "Pioneering autonomous maritime systems through innovation, collaboration, and dedication to excellence."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                    value: "32",
                                                    label: "Team Members"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                    value: "10+",
                                                    label: "Years of History"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                    value: "7",
                                                    label: "Countries"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 text-xs uppercase tracking-[0.25em] text-slate-500 flex flex-col items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Scroll to explore"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg",
                                                    children: "↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "max-w-6xl mx-auto px-4 md:px-6 mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-10 md:grid-cols-[1.4fr,1fr] items-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center px-4 py-1 rounded-full bg-[#e6f7fa] text-xs font-semibold text-[#008fb3] shadow-sm mb-4",
                                            children: "🧭 Our Origin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-4xl font-extrabold mb-4",
                                            children: "NTU's History"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: timelineEvents.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-6 items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-4 h-4 bg-[#008fb3] rounded-full mt-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 21
                                                                }, this),
                                                                index !== timelineEvents.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1 h-20 bg-gradient-to-b from-[#008fb3] to-[#008fb3]/30 my-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                                    lineNumber: 115,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold text-[#008fb3]",
                                                                    children: event.year
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg font-semibold text-slate-900",
                                                                    children: event.competition
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-slate-600",
                                                                    children: event.location
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "max-w-6xl mx-auto px-4 md:px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-10 md:grid-cols-[1fr,1.2fr] items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl font-extrabold mb-4",
                                                children: "Maritime RobotX Challenge"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-slate-600 leading-relaxed",
                                                children: "Launched in 2012 by the U.S. Office of Naval Research (ONR) in collaboration with Singapore’s Future Technology Systems Directorate (FSTD), RobotX is an advanced robotics competition that brings together top teams from around the Pacific Rim. The competition focuses on the development of Autonomous Surface Vehicles (ASVs) and sensor technologies capable of performing complex tasks in dynamic maritime environments. Beyond the competition, RobotX serves as a platform to foster international collaboration between students, academic institutions, government agencies, and industry partners. It bridges research, commercial innovation, and defence applications, ensuring that solutions developed are both cutting-edge and practically relevant. Archimedes competes in the biennial RobotX Challenge, showcasing our capabilities in multi-domain robotics — operating on the surface, underwater, and in the air. In the 2024 edition, we achieved a 5th place finish and are now striving for a podium position in 2026."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-3xl overflow-hidden shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/Section 4 - Maritime RobotX Challenge.jpeg",
                                            alt: "RobotX Challenge"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "max-w-6xl mx-auto px-4 md:px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-10 md:grid-cols-[1fr,1.2fr] items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl md:text-4xl font-extrabold mb-4",
                                                children: "SUAS Competition"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-slate-600 leading-relaxed",
                                                children: "The Student Unmanned Aerial Systems (SUAS) Competition is an international competition organised by RoboNation, challenging university teams to design, build, and operate Unmanned Aerial Systems (UAS) capable of autonomous aerial missions. Since its inception in 2002, SUAS has tested students' ability to integrate airframes, avionics, sensors, and software to accomplish a set of mission-critical tasks. These tasks include Autonomous Flight, Obstacle Avoidance, Object Detection, Classification, and Localisation, as well as Precision Air Delivery of payloads. Following RobotX 2024, Archimedes is expanding beyond surface autonomy into aerial domains, with our participation in SUAS 2025 marking a strategic step forward. As UAVs and UAS technologies become increasingly vital in maritime, defence, and commercial operations, our team is committed to developing advanced aerial autonomy solutions that complement our maritime expertise."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-3xl overflow-hidden shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/4. Section 5 - SUAS.jpg",
                                            alt: "SUAS Competition"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = AboutPage;
/* Small reusable pieces */ function Stat({ value, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl md:text-4xl font-extrabold text-[#008fb3] mb-1",
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs uppercase tracking-wide text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_c1 = Stat;
function QuickCard(props) {
    const { icon, title, description, linkLabel, href } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "block bg-white rounded-3xl border border-slate-200 shadow-sm px-6 py-6 hover:shadow-md hover:-translate-y-0.5 transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl mb-3",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-slate-600 mb-4",
                children: description
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold text-[#008fb3] inline-flex items-center",
                children: [
                    linkLabel,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_c2 = QuickCard;
function LevelRow(props) {
    const { label, value, colorClass } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `h-3 w-3 rounded-full ${colorClass}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-slate-700",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AAV_WD_New$2f$AAV_Web_Development$2f$aavwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-lg font-bold text-slate-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/AAV_WD_New/AAV_Web_Development/aavwebsite/app/about/aboutus/page.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
_c3 = LevelRow;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "AboutPage");
__turbopack_context__.k.register(_c1, "Stat");
__turbopack_context__.k.register(_c2, "QuickCard");
__turbopack_context__.k.register(_c3, "LevelRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_AAV_WD_New_AAV_Web_Development_aavwebsite_919a1bde._.js.map