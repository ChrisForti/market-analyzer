import { runJimmy } from "./lib/jimmy.js";
import { marketOpportunities } from "./db/schema.js";
import { supMarketAgent } from "./agents/sup-market.js";
import { startScheduler } from "./scheduler.js";

// Run the SUP Market Research Agent immediately
runJimmy(supMarketAgent, marketOpportunities);

// Start the scheduler for automated research runs
if (process.env.ENABLE_SCHEDULER === "true") {
  startScheduler();
  console.log("📅 Scheduler enabled - Jimmy will run automated research");
}
