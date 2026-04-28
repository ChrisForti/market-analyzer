import cron from "node-cron";
import { runJimmy } from "./lib/jimmy.js";
import { marketOpportunities } from "./db/schema.js";
import { supMarketAgent } from "./agents/sup-market.js";

/**
 * Run automated SUP market research
 */
async function runMarketAnalysis() {
  console.log("[Scheduler] Running artisan watercraft market analysis...");

  try {
    const results = await runJimmy(supMarketAgent, marketOpportunities);
    console.log(
      `[Scheduler] Analysis complete: ${results.length} opportunities identified`,
    );
  } catch (error) {
    console.error("[Scheduler] Error during market analysis:", error);
  }
}

/**
 * Start the autonomous scheduler
 */
export function startScheduler() {
  console.log("[Scheduler] Starting autonomous market analysis...");

  // Run market analysis every 6 hours
  // Cron format: minute hour day month weekday
  cron.schedule("0 */6 * * *", () => {
    console.log("[Scheduler] Triggered: Market analysis");
    runMarketAnalysis();
  });

  // Optional: Run immediately on startup for testing
  if (process.env.RUN_ANALYSIS_ON_STARTUP === "true") {
    console.log("[Scheduler] Running initial market analysis...");
    runMarketAnalysis();
  }

  console.log("[Scheduler] Scheduled market analysis every 6 hours");
}
