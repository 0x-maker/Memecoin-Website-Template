"use client";
import React, { useEffect, useState } from "react";
import TextScroller from "./textslider";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import config, {
  instagramLink,
  telegramLink,
  tokenCA,
  twitterLink,
} from "@/config";

// Header component
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
      {/* Toggleable Hamburger menu for mobile devices */}
      <nav
        className={`${
          sidebarOpen ? "translate-x-[0%]" : "translate-x-[100%]"
        } w-screen z-[9999] transition-all mt-[107px] space-y-5 px-6 py-5 ease-in-out duration-200 fixed top-0 right-0 bg-[#f1efce] h-full`}
      >
        <Link
          href="/"
          onClick={() => setSidebarOpen(false)}
          className="border-b-2 cursor-pointer text-lg w-full text-start items-center flex flex-row justify-start border-[#f0c949]/90 text-zinc-950 font-semibold"
        >
          Home
        </Link>
        <Link
          href="/tokenomics"
          onClick={() => setSidebarOpen(false)}
          className="border-b-2 cursor-pointer text-lg w-full text-start items-center flex flex-row justify-start border-[#f0c949]/90 text-zinc-950 font-semibold"
        >
          Tokenomics
        </Link>
        <Link
          href="/roadmap"
          onClick={() => setSidebarOpen(false)}
          className="border-b-2 cursor-pointer text-lg w-full text-start items-center flex flex-row justify-start border-[#f0c949]/90 text-zinc-950 font-semibold"
        >
          Roadmap
        </Link>
        <div className="flex flex-col h-full relative items-center justify-center space-y-3">
          <div className="flex flex-row items-center justify-center space-x-2.5">
            <a
              id="twitterButton"
              href={twitterLink}
              className="hover:bg-yellow-500/80 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl active:scale-[0.99] transition-all ease-linear duration-100"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_45_5124)">
                  <path
                    d="M21.5222 18.2441L27.4785 11.3203H26.0671L20.8952 17.3321L16.7644 11.3203H12L18.2466 20.4113L12 27.6719H13.4115L18.8732 21.3232L23.2356 27.6719H28L21.5218 18.2441H21.5222ZM19.5889 20.4914L18.956 19.5861L13.9201 12.3829H16.0882L20.1522 18.1961L20.7851 19.1014L26.0677 26.6576H23.8997L19.5889 20.4917V20.4914Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_5124">
                    <rect
                      width="16"
                      height="16.36"
                      fill="white"
                      transform="translate(12 11.3203)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              id="telegramButton"
              href={telegramLink}
              className="hover:bg-yellow-500/80 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl active:scale-[0.99] transition-all ease-linear duration-100"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4621 21.0913L9.80904 19.5753C9.80904 19.5753 9.25295 19.3496 9.43201 18.838C9.46887 18.7325 9.54323 18.6428 9.76566 18.4885C10.7967 17.7699 28.8485 11.2816 28.8485 11.2816C28.8485 11.2816 29.3582 11.1098 29.6588 11.2241C29.7331 11.2471 29.8 11.2894 29.8527 11.3468C29.9053 11.4042 29.9417 11.4745 29.9583 11.5506C29.9907 11.6849 30.0043 11.8232 29.9986 11.9613C29.9972 12.0807 29.9827 12.1915 29.9718 12.3651C29.8618 14.1391 26.5717 27.3785 26.5717 27.3785C26.5717 27.3785 26.3748 28.1532 25.6695 28.1797C25.4962 28.1853 25.3235 28.156 25.1618 28.0934C25.0001 28.0308 24.8526 27.9363 24.7281 27.8156C23.3441 26.6251 18.5605 23.4102 17.5034 22.7032C17.4796 22.6869 17.4595 22.6658 17.4445 22.6411C17.4296 22.6164 17.4201 22.5888 17.4167 22.5602C17.4019 22.4857 17.4829 22.3934 17.4829 22.3934C17.4829 22.3934 25.8125 14.9894 26.0342 14.2122C26.0513 14.1519 25.9865 14.1222 25.8994 14.1486C25.3462 14.3521 15.7557 20.4086 14.6972 21.077C14.621 21.1001 14.5405 21.105 14.4621 21.0913Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              id="instagramButton"
              href={instagramLink}
              className="hover:bg-yellow-500/80 w-[44px] h-[44px] active:scale-[0.99] flex items-center justify-center border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl transition-all ease-linear duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {tokenCA && (
              <a
                id="dexscreenerButton"
                href={`https://dexscreener.com/solana/${tokenCA}`}
                className="hover:bg-yellow-500/80 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl active:scale-[0.99] transition-all ease-linear duration-100"
              >
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_76_47)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.6515 15.9055C22.4162 15.5242 23.3893 14.9628 24.3636 14.1937C24.569 14.6203 24.5915 14.9926 24.4856 15.2932C24.4106 15.505 24.2693 15.6893 24.0835 15.8358C23.8822 15.9943 23.6309 16.1096 23.3531 16.1719C22.8259 16.2907 22.2104 16.2213 21.6515 15.9055ZM21.7841 19.8127L22.7964 20.3974C20.7294 21.5559 20.1675 23.7071 19.5 25.8023C18.8326 23.7071 18.2706 21.5559 16.2036 20.3974L17.216 19.8127C17.3139 19.7757 17.3976 19.7086 17.4551 19.6211C17.5126 19.5336 17.5409 19.4302 17.536 19.3256C17.4432 17.3633 17.9731 16.4956 18.6877 15.9507C18.9441 15.7556 19.2239 15.6576 19.5 15.6576C19.7761 15.6576 20.0559 15.7556 20.3123 15.9507C21.027 16.4956 21.5568 17.3633 21.4641 19.3256C21.4591 19.4302 21.4875 19.5336 21.5449 19.6211C21.6024 19.7086 21.6861 19.7757 21.7841 19.8127ZM19.5 7C20.6701 7.03142 21.8432 7.25858 22.8613 7.7005C23.5663 8.00692 24.2241 8.41167 24.8198 8.89567C25.0888 9.11417 25.3103 9.32525 25.5543 9.56825C26.2124 9.591 27.1741 8.85992 27.6206 8.17583C26.8522 10.695 23.3457 13.6699 20.9181 14.8083C20.9171 14.8078 20.9165 14.8073 20.9157 14.8068C20.4801 14.4741 19.9901 14.3078 19.5 14.3078C19.0099 14.3078 18.52 14.4741 18.0843 14.8068C18.0836 14.8072 18.0829 14.8079 18.0819 14.8083C15.6542 13.6699 12.1478 10.695 11.3794 8.17583C11.8258 8.85992 12.7876 9.591 13.4456 9.56825C13.6897 9.32533 13.9112 9.11417 14.1801 8.89567C14.7758 8.41167 15.4336 8.00692 16.1386 7.7005C17.1568 7.25858 18.3299 7.03142 19.5 7ZM17.3485 15.9055C16.5838 15.5242 15.6106 14.9628 14.6365 14.1937C14.4311 14.6203 14.4086 14.9926 14.5143 15.2932C14.5894 15.505 14.7307 15.6893 14.9165 15.8358C15.1178 15.9943 15.3691 16.1096 15.647 16.1719C16.1741 16.2907 16.7896 16.2213 17.3485 15.9055Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.4306 13.2513C25.9669 12.7101 26.4395 12.111 26.8195 11.5764L27.0125 11.9397C27.6338 13.1827 27.9567 14.4208 27.9567 15.8142L27.9553 18.0252L27.967 19.1713C28.012 21.9852 28.6208 24.8321 30 27.4374L27.1144 25.1106L25.0727 28.4238L22.9277 26.4046L19.5 31.967L16.0723 26.4047L13.9274 28.4239L11.8857 25.1107L9 27.4375C10.3792 24.8322 10.988 21.9853 11.0331 19.1714L11.0448 18.0252L11.0434 15.8142C11.0434 14.4208 11.3662 13.1827 11.9877 11.9397L12.1806 11.5765C12.5606 12.1111 13.0331 12.7101 13.5695 13.2514L13.402 13.5993C13.0766 14.2751 12.9688 15.0307 13.2223 15.7492C13.3858 16.2121 13.684 16.609 14.0685 16.912C14.4418 17.2062 14.8837 17.4046 15.3463 17.5087C15.6476 17.5766 15.9546 17.6045 16.2596 17.595C16.1884 17.9984 16.1573 18.4168 16.1553 18.8432L13.4333 20.4153L15.5338 21.5928C15.7017 21.6869 15.8615 21.7947 16.0117 21.9152C17.7434 23.47 18.7846 28.0698 19.5001 30.3165C20.2157 28.0698 21.2568 23.47 22.9886 21.9152C23.1387 21.7947 23.2985 21.6869 23.4664 21.5928L25.5669 20.4153L22.8448 18.8432C22.8428 18.4168 22.8117 17.9984 22.7406 17.595C23.0456 17.6045 23.3526 17.5766 23.6539 17.5087C24.1165 17.4046 24.5584 17.2062 24.9317 16.912C25.3161 16.609 25.6144 16.2121 25.7777 15.7492C26.0313 15.0307 25.9235 14.2752 25.5982 13.5993L25.4307 13.2514L25.4306 13.2513Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_76_47">
                      <rect
                        width="21"
                        height="25"
                        fill="black"
                        transform="translate(9 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            )}
          </div>
          {config.homeMainSection.buttons.map((button: any, index: number) => (
            <a
              key={index}
              href={button.href || "about:blank"}
              className="font-semibold text-center w-[55%] border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-white active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 py-[8.95px] rounded-xl"
            >
              {button.text}
            </a>
          ))}
        </div>
      </nav>
      {/* Red slider for sm devices */}
      <nav className="h-[40px] z-[9997] flex w-full top-0 fixed lg:hidden text-white border-b-2 border-zinc-800 font-medium items-center justify-center bg-red-500">
        <TextScroller />
      </nav>
      <motion.div
        initial={{ opacity: 0, x: -0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <header className="fixed z-[9998] grid lg:mt-0 mt-[40px] px-5 grid-cols-2 md:grid-cols-3 grid-rows-1 top-0 left-0 right-0 w-full h-[68px] bg-[#fefce1] border-b-2 border-zinc-800">
          <div className="w-full flex items-center flex-row justify-start">
            <h1
              onClick={() => router.replace("/")}
              className="text-2xl font-semibold cursor-pointer active:scale-[0.98]"
            >
              [$INSERT_TICKER]
            </h1>
          </div>
          <div className="w-full hidden md:flex flex-row items-center justify-center space-x-6">
            <a
              onClick={() => router.push("/")}
              className={`${
                pathname === "/"
                  ? "font-bold"
                  : "font-medium hover:font-semibold"
              } active:scale-[0.98] text-zinc-800 hover:text-black transition-all ease-linear duration-100 cursor-pointer text-[17px]`}
            >
              Home
            </a>
            <a
              onClick={() => router.push("/tokenomics")}
              className={`${
                pathname === "/tokenomics"
                  ? "font-bold"
                  : "font-medium hover:font-semibold"
              } active:scale-[0.98] text-zinc-800 hover:text-black transition-all ease-linear duration-100 cursor-pointer text-[17px]`}
            >
              Tokenomics
            </a>
            <a
              onClick={() => router.push("/roadmap")}
              className={`${
                pathname === "/roadmap"
                  ? "font-bold"
                  : "font-medium hover:font-semibold"
              } active:scale-[0.98] text-zinc-800 hover:text-black transition-all ease-linear duration-100 cursor-pointer text-[17px]`}
            >
              Roadmap
            </a>
          </div>
          <div className="w-full flex lg:hidden flex-row items-center justify-end">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hover:bg-yellow-500/80 p-[10px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl active:scale-[0.98] transition-all ease-linear duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="w-full hidden lg:flex flex-row space-x-2 items-center justify-end">
            <a
              id="twitterButton"
              href={twitterLink}
              className="hover:bg-yellow-500/80 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl active:scale-[0.99] transition-all ease-linear duration-100"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_45_5124)">
                  <path
                    d="M21.5222 18.2441L27.4785 11.3203H26.0671L20.8952 17.3321L16.7644 11.3203H12L18.2466 20.4113L12 27.6719H13.4115L18.8732 21.3232L23.2356 27.6719H28L21.5218 18.2441H21.5222ZM19.5889 20.4914L18.956 19.5861L13.9201 12.3829H16.0882L20.1522 18.1961L20.7851 19.1014L26.0677 26.6576H23.8997L19.5889 20.4917V20.4914Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_5124">
                    <rect
                      width="16"
                      height="16.36"
                      fill="white"
                      transform="translate(12 11.3203)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              id="telegramButton"
              href={telegramLink}
              className="hover:bg-yellow-500/80 border active:scale-[0.99] border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl transition-all ease-linear duration-100"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4621 21.0913L9.80904 19.5753C9.80904 19.5753 9.25295 19.3496 9.43201 18.838C9.46887 18.7325 9.54323 18.6428 9.76566 18.4885C10.7967 17.7699 28.8485 11.2816 28.8485 11.2816C28.8485 11.2816 29.3582 11.1098 29.6588 11.2241C29.7331 11.2471 29.8 11.2894 29.8527 11.3468C29.9053 11.4042 29.9417 11.4745 29.9583 11.5506C29.9907 11.6849 30.0043 11.8232 29.9986 11.9613C29.9972 12.0807 29.9827 12.1915 29.9718 12.3651C29.8618 14.1391 26.5717 27.3785 26.5717 27.3785C26.5717 27.3785 26.3748 28.1532 25.6695 28.1797C25.4962 28.1853 25.3235 28.156 25.1618 28.0934C25.0001 28.0308 24.8526 27.9363 24.7281 27.8156C23.3441 26.6251 18.5605 23.4102 17.5034 22.7032C17.4796 22.6869 17.4595 22.6658 17.4445 22.6411C17.4296 22.6164 17.4201 22.5888 17.4167 22.5602C17.4019 22.4857 17.4829 22.3934 17.4829 22.3934C17.4829 22.3934 25.8125 14.9894 26.0342 14.2122C26.0513 14.1519 25.9865 14.1222 25.8994 14.1486C25.3462 14.3521 15.7557 20.4086 14.6972 21.077C14.621 21.1001 14.5405 21.105 14.4621 21.0913Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              id="instagramButton"
              href={instagramLink}
              className="hover:bg-yellow-500/80 w-[44px] h-[44px] active:scale-[0.99] flex items-center justify-center border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl transition-all ease-linear duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {tokenCA && (
              <a
                id="dexscreenerButton"
                href={`https://dexscreener.com/solana/${tokenCA}`}
                className="hover:bg-yellow-500/80 active:scale-[0.99] border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] active:bg-yellow-500/90 bg-yellow-500/70 rounded-xl transition-all ease-linear duration-100"
              >
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_76_47)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.6515 15.9055C22.4162 15.5242 23.3893 14.9628 24.3636 14.1937C24.569 14.6203 24.5915 14.9926 24.4856 15.2932C24.4106 15.505 24.2693 15.6893 24.0835 15.8358C23.8822 15.9943 23.6309 16.1096 23.3531 16.1719C22.8259 16.2907 22.2104 16.2213 21.6515 15.9055ZM21.7841 19.8127L22.7964 20.3974C20.7294 21.5559 20.1675 23.7071 19.5 25.8023C18.8326 23.7071 18.2706 21.5559 16.2036 20.3974L17.216 19.8127C17.3139 19.7757 17.3976 19.7086 17.4551 19.6211C17.5126 19.5336 17.5409 19.4302 17.536 19.3256C17.4432 17.3633 17.9731 16.4956 18.6877 15.9507C18.9441 15.7556 19.2239 15.6576 19.5 15.6576C19.7761 15.6576 20.0559 15.7556 20.3123 15.9507C21.027 16.4956 21.5568 17.3633 21.4641 19.3256C21.4591 19.4302 21.4875 19.5336 21.5449 19.6211C21.6024 19.7086 21.6861 19.7757 21.7841 19.8127ZM19.5 7C20.6701 7.03142 21.8432 7.25858 22.8613 7.7005C23.5663 8.00692 24.2241 8.41167 24.8198 8.89567C25.0888 9.11417 25.3103 9.32525 25.5543 9.56825C26.2124 9.591 27.1741 8.85992 27.6206 8.17583C26.8522 10.695 23.3457 13.6699 20.9181 14.8083C20.9171 14.8078 20.9165 14.8073 20.9157 14.8068C20.4801 14.4741 19.9901 14.3078 19.5 14.3078C19.0099 14.3078 18.52 14.4741 18.0843 14.8068C18.0836 14.8072 18.0829 14.8079 18.0819 14.8083C15.6542 13.6699 12.1478 10.695 11.3794 8.17583C11.8258 8.85992 12.7876 9.591 13.4456 9.56825C13.6897 9.32533 13.9112 9.11417 14.1801 8.89567C14.7758 8.41167 15.4336 8.00692 16.1386 7.7005C17.1568 7.25858 18.3299 7.03142 19.5 7ZM17.3485 15.9055C16.5838 15.5242 15.6106 14.9628 14.6365 14.1937C14.4311 14.6203 14.4086 14.9926 14.5143 15.2932C14.5894 15.505 14.7307 15.6893 14.9165 15.8358C15.1178 15.9943 15.3691 16.1096 15.647 16.1719C16.1741 16.2907 16.7896 16.2213 17.3485 15.9055Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.4306 13.2513C25.9669 12.7101 26.4395 12.111 26.8195 11.5764L27.0125 11.9397C27.6338 13.1827 27.9567 14.4208 27.9567 15.8142L27.9553 18.0252L27.967 19.1713C28.012 21.9852 28.6208 24.8321 30 27.4374L27.1144 25.1106L25.0727 28.4238L22.9277 26.4046L19.5 31.967L16.0723 26.4047L13.9274 28.4239L11.8857 25.1107L9 27.4375C10.3792 24.8322 10.988 21.9853 11.0331 19.1714L11.0448 18.0252L11.0434 15.8142C11.0434 14.4208 11.3662 13.1827 11.9877 11.9397L12.1806 11.5765C12.5606 12.1111 13.0331 12.7101 13.5695 13.2514L13.402 13.5993C13.0766 14.2751 12.9688 15.0307 13.2223 15.7492C13.3858 16.2121 13.684 16.609 14.0685 16.912C14.4418 17.2062 14.8837 17.4046 15.3463 17.5087C15.6476 17.5766 15.9546 17.6045 16.2596 17.595C16.1884 17.9984 16.1573 18.4168 16.1553 18.8432L13.4333 20.4153L15.5338 21.5928C15.7017 21.6869 15.8615 21.7947 16.0117 21.9152C17.7434 23.47 18.7846 28.0698 19.5001 30.3165C20.2157 28.0698 21.2568 23.47 22.9886 21.9152C23.1387 21.7947 23.2985 21.6869 23.4664 21.5928L25.5669 20.4153L22.8448 18.8432C22.8428 18.4168 22.8117 17.9984 22.7406 17.595C23.0456 17.6045 23.3526 17.5766 23.6539 17.5087C24.1165 17.4046 24.5584 17.2062 24.9317 16.912C25.3161 16.609 25.6144 16.2121 25.7777 15.7492C26.0313 15.0307 25.9235 14.2752 25.5982 13.5993L25.4307 13.2514L25.4306 13.2513Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_76_47">
                      <rect
                        width="21"
                        height="25"
                        fill="black"
                        transform="translate(9 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            )}
            {config.homeMainSection.buttons.map(
              (button: any, index: number) => (
                <a
                  key={index}
                  href={button.href || "about:blank"}
                  className="font-semibold px-4 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-white active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 py-[8.95px] rounded-xl"
                >
                  {button.text}
                </a>
              )
            )}
          </div>
        </header>
        {/* Red slider for lg devices */}
        <nav className="h-[40px] mt-[68px] w-full hidden lg:flex text-white border-b-2 border-zinc-800 font-medium items-center justify-center bg-red-500">
          <TextScroller />
        </nav>
      </motion.div>
    </>
  );
}
