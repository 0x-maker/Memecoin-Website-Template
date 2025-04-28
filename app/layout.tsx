"use client";
import React from "react";
import { Grandstander } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const grandstander = Grandstander({ subsets: ["latin"] });

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="[$INSERT_TICKER] is a funny cartoon duck mascot. Join the community now and dive into the meme magic!"
        />
        <meta
          name="keywords"
          content=" funny, crypto, pumpfun, raydium, memecoin, telegram mini app, telegram app"
        />
        <meta name="author" content="[$INSERT_TICKER]" />
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="[$INSERT_TICKER]" />
        <meta
          property="og:description"
          content="[$INSERT_TICKER] is a funny cartoon duck mascot. Join the community now and dive into the meme magic!"
        />
        <meta
          property="og:image"
          content="/meme.png"
        />
        <meta
          property="og:url"
          content="/meme.png"
        />
        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="[$INSERT_TICKER]" />
        <meta
          name="twitter:description"
          content="[$INSERT_TICKER] MEMECOIN WEBSITE"
        />
        <meta
          name="twitter:image"
          content="/meme.png"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Theme color */}
        <meta name="theme-color" content="#fafaf2" />
        <title>[$INSERT_TICKER] - Dive into the meme magic!</title>
      </head>
      <body
        className={
          "dark:bg-background-dark max-w-[100vw] overflow-x-hidden bg-background-light text-background-dark dark:text-background-light " +
          grandstander.className
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Toaster
            toastOptions={{
              className: "!z-[9999] !bg-[#fefce8] !border !border-[#fafaf2]",
            }}
            containerClassName="md:mt-14 mt-24"
          />
          <Header />
          {children}
        </motion.div>
      </body>
    </html>
  );
}
