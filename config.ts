/*
 * [$INSERT_TICKER] Website Config File
 */

// Main link (you must change on deploy with your domain name e.g. '')
export const mainLink = "";
export const telegramWebApp = ``; // Telegram bot's link

// Socials
export const instagramLink = ``; // Instagram
export const telegramLink = ``; // Telegram
export const twitterLink = ``; // Twitter

// Token Info
export const tokenCA = ""; // Token contract

// Page contents
export default {
  redLineText: "[$INSERT_TICKER] To The Moon!", // Red bar's text in top of the page
  // Main route (/)
  homeMainSection: {
    title: "[$INSERT_TICKER] to the Moon",
    description:
      "[$INSERT_TICKER] EDIT THIS SECTION IN THE config.ts FILE", // The \n component breaks lines if you want to add, you can.
    buttons: [
      {
        text: tokenCA ? "Buy now" : "Join now",
        href: tokenCA
          ? `https://jup.ag/SOL-${tokenCA}`
          : telegramLink,
      },
    ],
  },
  // Tokenomics route (/tokenomics)
  tokenomicsPage: {
    title: "TOKENOMICS",
    description: "[$INSERT_TICKER] Tokenomics",
  },
  // Tokenomics route (/roadmap)
  roadmapPage: {
    title: "OUR ROADMAP",
    description: `This roadmap outlines our journey to exciting milestones, including listings on major exchanges. Let's pave the way for innovative developments.`,
    phases: [
      // Phase 1
      {
        items: [
          "Launch the telegram",
          "Publish the website",
          "Build a strong community",
        ],
      },
      // Phase 2
      {
        items: [
          "Launch on pump.fun",
          "Airdrop for early members",
          "Launch [$INSERT_TICKER] [ADD STUFF HERE]",
        ],
      },
      // Phase 3
      {
        items: ["CoinGecko and CMC Listing", "Hire crypto influencers"],
      },
      // Phase 4
      {
        items: [
          "Establish DAO's for token's future",
          "Insure long-term sustainability",
        ],
      },
    ],
  },
};
//:end
