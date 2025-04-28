"use client";
import React from "react";
import { motion } from "framer-motion";
import config, { tokenCA } from "@/config";

export default function TokenomicsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col mt-[108px] lg:mt-0 max-w-[100vw] overflow-x-hidden justify-center items-center h-[calc(100vh-108px)]">
        <section className="w-full flex mt-[24px] md:mt-0 flex-col items-center justify-center px-6 md:px-16">
          <div className="flex flex-col w-full text-center items-center justify-start">
            <h1 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px]">
              {config.tokenomicsPage.title}
            </h1>
            <h2 className="font-medium leading-7 text-lg xl:text-xl">
              {config.tokenomicsPage.description
                .split("\n")
                .map((line: any, index: any) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </h2>
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              src="/charts/tokenomics.png"
              className="size-[300px] rounded-full"
              draggable="false"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center text-center">
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="bg-yellow-400 border border-zinc-900/15 active:scale-[0.98] transition-all ease-linear duration-100 rounded-full w-5 h-5" />
              <span className="font-semibold text-lg mt-1">
                {"->"} Total Supply: 1 Billion [$INSERT_TICKER]
              </span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="bg-[#1132b5] border border-zinc-900/15 active:scale-[0.98] transition-all ease-linear duration-100 rounded-full w-5 h-5" />
              <span className="font-semibold text-lg mt-1">
                {"->"} Liquidity Pool (
                <a
                  className={`${
                    tokenCA
                      ? "text-blue-500 hover:text-blue-600/90 hover:underline"
                      : ""
                  } transition-all ease-linear duration-100`}
                  href={tokenCA && `https://pump.fun/coin/${tokenCA}`}
                >
                  Pump.fun
                </a>
                )
              </span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="bg-[#de44a3] border border-zinc-900/15 active:scale-[0.98] transition-all ease-linear duration-100 rounded-full w-5 h-5" />
              <span className="font-semibold text-lg mt-1">
                {"->"} Community Airdrop
              </span>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <div className="bg-[#69e0fe] border border-zinc-900/15 active:scale-[0.98] transition-all ease-linear duration-100 rounded-full w-5 h-5" />
              <span className="font-semibold text-lg mt-1">
                {"->"} Dev Holdings (Locked)
              </span>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
