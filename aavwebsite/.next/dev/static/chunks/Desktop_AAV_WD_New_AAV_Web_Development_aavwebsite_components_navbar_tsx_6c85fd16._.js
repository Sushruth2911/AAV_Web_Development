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
]);

//# sourceMappingURL=Desktop_AAV_WD_New_AAV_Web_Development_aavwebsite_components_navbar_tsx_6c85fd16._.js.map