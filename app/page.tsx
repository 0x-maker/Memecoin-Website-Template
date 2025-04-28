"use client";
import React from "react";
import { motion } from "framer-motion";
import config, { tokenCA } from "@/config";
import toast from "react-hot-toast";

export default function HomePage() {
  function playDuckSound() {
    const audio = new Audio("/sounds/duck.mp3");
    audio.play();
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <main className="flex flex-col max-w-[100vw] w-screen overflow-y-auto mt-[96px] lg:mt-0 overflow-x-hidden justify-center items-center h-full">
        <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-start lg:justify-between lg:px-[111px] px-5 xl:px-[190px] min-h-[calc(100vh-108px)]">
          <div className="lg:hidden flex mt-[52px] flex-col items-center justify-center">
            <img
              onClick={() => playDuckSound()}
              draggable="false"
              className="rounded-3xl active:opacity-[98%] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer size-[220px]"
              src="/meme.png"
            />
          </div>
          <div className="flex flex-col mt-[52px] md:ml-9 lg:mt-0 text-start items-start justify-center">
            <h1 className="font-bold leading-10 md:leading-normal text-[36px] lg:text-[42px] xl:text-[46px]">
              {config.homeMainSection.title}
            </h1>
            <h2 className="font-medium leading-7 mt-1 md:max-w-[400px] text-xl">
              {config.homeMainSection.description
                .split("\n")
                .map((line: any, index: any) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </h2>
            <div className="mt-3.5 flex flex-row items-center justify-center space-x-2">
              {config.homeMainSection.buttons.map(
                (button: any, index: number) => (
                  <a
                    key={index}
                    href={button.href || "about:blank"}
                    className="font-semibold px-4 border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-white active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2.5 rounded-xl"
                  >
                    {button.text}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="lg:flex hidden flex-col md:mr-9 items-center justify-center">
            <img
              onClick={() => playDuckSound()}
              draggable="false"
              className="rounded-3xl active:opacity-[98%] size-[290px] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer"
              src="/meme.png"
            />
          </div>
        </section>
        {tokenCA && (
          <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 border-t border-zinc-200 flex-col lg:flex-row items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
            <div className="flex my-36 xl:mx-9 w-full flex-col items-center justify-center">
              <div className="font-semibold flex flex-row items-center justify-center text-center space-x-5 relative px-6 border border-[#9e782c] shadow-[1px_1px_0_#9e782c] transition-all ease-linear duration-100 bg-yellow-50 text-black text-[17px] py-3 rounded-xl">
                <span>Contract Address</span>
                <a
                  onClick={() => {
                    navigator.clipboard
                      .writeText(tokenCA)
                      .then(() => {
                        toast.success("Copied to clipboard");
                      })
                      .catch((err) => {
                        toast.error("Could not copy");
                      });
                  }}
                  className="font-semibold cursor-pointer px-4 uppercase border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] active:translate-x-[1px] active:translate-y-[1px] text-white active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 text-[17px] py-2 rounded-xl"
                >
                  COPY
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
    </motion.div>
  );
}
//:end
