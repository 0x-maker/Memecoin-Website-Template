"use client";
import React from "react";
import { motion } from "framer-motion";
import config from "@/config";

export default function RoadmapPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col mt-[108px] lg:mt-0 max-w-[100vw] overflow-hidden justify-center items-center min-h-[calc(100vh-108px)]">
        <section className="w-full flex mt-[58px] md:mt-[36px] flex-row items-center justify-center px-5 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col text-center items-center justify-start">
            <h1 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px]">
              {config.roadmapPage.title}
            </h1>
            <h2 className="font-medium md:max-w-[600px] leading-7 text-lg xl:text-xl">
              {config.roadmapPage.description
                .split("\n")
                .map((line: any, index: any) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </h2>
          </div>
        </section>
        {/* Mobile phases */}
        <section className="mt-8 left-0 flex flex-row items-start justify-start md:hidden">
          <ol className="relative left-0 border-s-2 w-full border-[#f6f3c9]">
            <li className="mb-6 ms-5 w-full">
              <span className="absolute flex mt-1 items-center justify-center w-5 h-5 bg-[#e9df57] rounded-full -start-[11px] ring-[7px] ring-[#f9f5cc]"></span>
              {/* Phase */}
              <div className="bg-[#f6f3c9] ml-1 z-10 text-start border border-[#efe99b] p-[19px] w-[326px] h-auto rounded-2xl">
                <div className="tracking-[-0.020em] flex flex-row items-center text-[20px] font-semibold">
                  Phase&nbsp;
                  <h2 className="text-xl font-bold tracking-normal">#1</h2>
                </div>
                {config.roadmapPage.phases[0].items.map((text: string) => (
                  <div
                    key={text + Math.random() * 100}
                    className="flex flex-row tracking-tight mt-1 items-center text-center justify-start"
                  >
                    <span className="size-2 bg-zinc-800 rounded-full" />
                    &nbsp;
                    <span className="font-medium text-[18px]">{text}</span>
                  </div>
                ))}
              </div>
            </li>
            <li className="mb-6 ms-5 w-full">
              <span className="absolute flex mt-1 items-center justify-center w-5 h-5 bg-[#e9df57] rounded-full -start-[11px] ring-[7px] ring-[#f9f5cc]"></span>
              {/* Phase */}
              <div className="bg-[#f6f3c9] ml-1 z-10 text-start border border-[#efe99b] p-[19px] w-[326px] h-auto rounded-2xl">
                <div className="tracking-[-0.020em] flex flex-row items-center text-[20px] font-semibold">
                  Phase&nbsp;
                  <h2 className="text-xl font-bold tracking-normal">#2</h2>
                </div>
                {config.roadmapPage.phases[1].items.map((text: string) => (
                  <div
                    key={text + Math.random() * 100}
                    className="flex flex-row tracking-tight mt-1 items-center text-center justify-start"
                  >
                    <span className="size-2 bg-zinc-800 rounded-full" />
                    &nbsp;
                    <span className="font-medium text-[18px]">{text}</span>
                  </div>
                ))}
              </div>
            </li>
            <li className="mb-6 ms-5 w-full">
              <span className="absolute flex mt-1 items-center justify-center w-5 h-5 bg-[#e9df57] rounded-full -start-[11px] ring-[7px] ring-[#f9f5cc]"></span>
              {/* Phase */}
              <div className="bg-[#f6f3c9] ml-1 z-10 text-start border border-[#efe99b] p-[19px] w-[326px] h-auto rounded-2xl">
                <div className="tracking-[-0.020em] flex flex-row items-center text-[20px] font-semibold">
                  Phase&nbsp;
                  <h2 className="text-xl font-bold tracking-normal">#3</h2>
                </div>
                {config.roadmapPage.phases[2].items.map((text: string) => (
                  <div
                    key={text + Math.random() * 100}
                    className="flex flex-row tracking-tight mt-1 items-center text-center justify-start"
                  >
                    <span className="size-2 bg-zinc-800 rounded-full" />
                    &nbsp;
                    <span className="font-medium text-[18px]">{text}</span>
                  </div>
                ))}
              </div>
            </li>
            <li className="mb-6 ms-5 w-full">
              <span className="absolute flex mt-1 items-center justify-center w-5 h-5 bg-[#e9df57] rounded-full -start-[11px] ring-[7px] ring-[#f9f5cc]"></span>
              {/* Phase */}
              <div className="bg-[#f6f3c9] ml-1 z-10 text-start border border-[#efe99b] p-[19px] w-[326px] h-auto rounded-2xl">
                <div className="tracking-[-0.020em] flex flex-row items-center text-[20px] font-semibold">
                  Phase&nbsp;
                  <h2 className="text-xl font-bold tracking-normal">#4</h2>
                </div>
                {config.roadmapPage.phases[3].items.map((text: string) => (
                  <div
                    key={text + Math.random() * 100}
                    className="flex flex-row tracking-tight mt-1 items-center text-center justify-start"
                  >
                    <span className="size-2 bg-zinc-800 rounded-full" />
                    &nbsp;
                    <span className="font-medium text-[18px]">{text}</span>
                  </div>
                ))}
              </div>
            </li>
          </ol>
        </section>
        <section className="hidden md:flex mb-10 md:flex-row flex-col w-full gap-[96px] relative items-start justify-start text-center max-w-[797px] h-full mt-8 lg:mt-10">
          <div className="h-full min-h-full w-[7px] md:left-1/2 left-[5%] transform -translate-x-1/2 top-0 bg-gradient-to-b from-[#dad49c] z-10 rounded-xl to-[#c9c03e] absolute" />
          {/* Phase balls */}
          <div className="md:left-1/2 left-[5%] transform z-50 absolute -translate-x-1/2">
            {/* Phase 1 ball */}
            <div className="mt-[24px] relative">
              <div className="bg-[#f9f5cc] flex items-center justify-center rounded-full size-7">
                <div className="bg-[#e9df57] rounded-full size-5"></div>
              </div>
              <div className="w-full min-w-[32px] md:min-w-[36px] h-px border border-dashed border-[#e9df57] md:-translate-x-[100%] translate-x-[85%] absolute top-1/2 transform -translate-y-1/2"></div>
            </div>
            {/* Phase 2 ball */}
            <div className="mt-[124px] relative">
              <div className="bg-[#f9f5cc] flex items-center justify-center rounded-full size-7">
                <div className="bg-[#e9df57] rounded-full size-5"></div>
              </div>
              <div className="w-full min-w-[32px] h-px border border-dashed border-[#e9df57] translate-x-[85%] absolute top-1/2 transform -translate-y-1/2"></div>
            </div>
            {/* Phase 3 ball */}
            <div className="mt-[124px] relative">
              <div className="bg-[#f9f5cc] flex items-center justify-center rounded-full size-7">
                <div className="bg-[#e9df57] rounded-full size-5"></div>
              </div>
              <div className="w-full min-w-[36px] h-px border border-dashed border-[#e9df57] -translate-x-[100%] absolute top-1/2 transform -translate-y-1/2"></div>
            </div>
            {/* Phase 4 ball */}
            <div className="mt-[124px] relative">
              <div className="bg-[#f9f5cc] flex items-center justify-center rounded-full size-7">
                <div className="bg-[#e9df57] rounded-full size-5"></div>
              </div>
              <div className="w-full min-w-[32px] h-px border border-dashed border-[#e9df57] translate-x-[85%] absolute top-1/2 transform -translate-y-1/2"></div>
            </div>
          </div>
          {/* Left side */}
          <div className="left-[5%] md:left-0 mt-0 pl-[6px] flex flex-col">
            {/* Phase 1 */}
            <div className="bg-[#f6f3c9] z-10 text-start border border-[#efe99b] p-[19px] w-full md:w-[343px] h-auto rounded-2xl">
              <div className="tracking-[-0.020em] flex flex-row items-center text-[20px] font-semibold">
                Phase&nbsp;
                <h2 className="text-xl font-bold tracking-normal">#1</h2>
              </div>
              {config.roadmapPage.phases[0].items.map((text: string) => (
                <div
                  key={text + Math.random() * 100}
                  className="flex flex-row mt-1 items-center text-center justify-start"
                >
                  <span className="size-2 bg-zinc-800 rounded-full" />
                  &nbsp;
                  <span className="font-medium tracking-tight text-[18px]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            {/* Phase 3 */}
            <div className="bg-[#f6f3c9] z-10 mt-[151px] text-start border border-[#efe99b] p-[19px] w-full md:w-[343px] h-auto rounded-2xl">
              <div className="tracking-[-0.020em] flex flex-row items-center text-[20px] font-semibold">
                Phase&nbsp;
                <h2 className="text-xl font-bold tracking-normal">#3</h2>
              </div>
              {config.roadmapPage.phases[2].items.map((text: string) => (
                <div
                  key={text + Math.random() * 100}
                  className="flex flex-row mt-1 items-center text-center justify-start"
                >
                  <span className="size-2 bg-zinc-800 rounded-full" />
                  &nbsp;
                  <span className="font-medium tracking-tight text-[18px]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Right side */}
          <div className="right-0 flex flex-col">
            {/* Phase 2 */}
            <div className="bg-[#f6f3c9] mt-[155px] z-10 text-start border border-[#efe99b] p-[19px] w-full md:w-[343px] h-auto rounded-2xl">
              <div className="tracking-[-0.020em] flex flex-row items-center text-[20px] font-semibold">
                Phase&nbsp;
                <h2 className="text-xl font-bold tracking-normal">#2</h2>
              </div>
              {config.roadmapPage.phases[1].items.map((text: string) => (
                <div
                  key={text + Math.random() * 100}
                  className="flex flex-row mt-1 items-center text-center justify-start"
                >
                  <span className="size-2 bg-zinc-800 rounded-full" />
                  &nbsp;
                  <span className="font-medium tracking-tight text-[18px]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            {/* Phase 4 */}
            <div className="bg-[#f6f3c9] mt-[155px] z-10 text-start border border-[#efe99b] p-[19px] w-full md:w-[343px] h-auto rounded-2xl">
              <div className="tracking-[-0.020em] flex flex-row items-center text-[20px] font-semibold">
                Phase&nbsp;
                <h2 className="text-xl font-bold tracking-normal">#4</h2>
              </div>
              {config.roadmapPage.phases[3].items.map((text: string) => (
                <div
                  key={text + Math.random() * 100}
                  className="flex flex-row mt-1 items-center text-center justify-start"
                >
                  <span className="size-2 bg-zinc-800 rounded-full" />
                  &nbsp;
                  <span className="font-medium tracking-tight text-[18px]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
