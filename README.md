# Market Analyzer - Artisan Watercraft Market Research Agent

**Market Analyzer** is an autonomous AI agent designed to run on a Raspberry Pi and research market trends in the high-end artisan watercraft industry. The agent performs real-time market analysis using **Tavily Search API** (free tier) + **OpenRouter** (free models) for virtually cost-free operation.

**Role:** Senior Market Strategist & Artisan Researcher  
**Industry Focus:** High-End Artisan Personal Watercraft (SUP, Surf, Kayak, Canoe)  
**Core Philosophy:** Hollow-wood, Cedar-strip, Cold-molded, and CNC-integrated composite artisan builds

**Stack:** Node, TypeScript, Drizzle ORM, PostgreSQL, Tavily Search API, OpenRouter

## Project Overview

- **Deployment**: Runs autonomously on Raspberry Pi
- **Remote Access**: Manage from Mac via SSH
- **Primary Function**: Artisan watercraft market opportunity research
- **Database**: PostgreSQL with Drizzle ORM
- **AI Architecture**: Tavily (free search) → OpenRouter (free/cheap LLMs)
- **Monthly Cost**: ~$5-10 (just database hosting!)
- **Transparency**: Every insight includes source citations (e.g., "NMMA 2026 Report", "Etsy Trending")
- **Focus**:
  - **Primary**: Wooden SUPs (Touring, Displacement, All-around hulls)
  - **Secondary**: Hollow wooden surfboards, cedar-strip canoes/kayaks, artisan accessories

## Two-Step Research Workflow

**Why This Architecture?**

- Tavily provides FREE real-time web search (1,000/month)
- OpenRouter offers FREE LLMs (Gemini 2.0 Flash)
- Result: Virtually free market research with current data!

**Step 1: Tavily Search (FREE)**

- Agent sends optimized search queries to Tavily
- Tavily returns AI-ready clean text from 10+ sources
- No credit card required for free tier

**Step 2: OpenRouter Analysis (Nearly FREE)**

- Agent sends Tavily results to OpenRouter (Gemini Flash)
- LLM structures data into actionable market opportunities
- Cost: ~$0.001 per research run

**Cost: ~$0** per month for API usage (free tiers) + ~$5-10 for database

## Research Objectives

### The "Paddleboard Phase" (Primary Focus)

The agent scans 2026 global/regional markets for wood-constructed SUPs (no inflatables/foam-core):

- **Shape & Performance Trends**: Touring vs Displacement vs All-Around, preferred lengths (12'6" vs 14')
- **Aesthetic Materiality**: Viral wood combinations (Western Red Cedar, Dark Walnut, Paulownia)
- **Luxury Feature Gaps**: Integrated tech (GPS mounts), specialized fins, Eco-Luxe bio-resin finishes
- **Price Ceiling**: Boutique hand-built hollow wooden board retail positioning

### Custom Craft Expansion (Secondary Focus)

Identifies "Build Gaps" where artisan woodworking provides competitive advantage:

- Hollow Wooden Surfboards (Longboard/Mid-length segments)
- Cedar-Strip Canoes & Kayaks (Solo Pack Boats, Expedition Kayaks, Prospector shapes)
- Technical Accessories (wooden paddles, CNC-machined fin boxes, decorative inlays)

## Shop Capabilities

Research is constrained/optimized by actual shop capabilities:

- **Hand-Build Mastery**: Zero size limits for cedar-strip or hollow-wood projects
- **CNC Precision**: 3018 Pro (300mm x 400mm) for custom parts, placards, hardware, inlays
- **Material Access**: Marine Hardwoods (Teak, Mahogany, Walnut), Acrylics, King StarBoard

## Tech Stack

- **Runtime**: Node.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **AI APIs**:
  - **Tavily Search API** - Real-time web search (FREE tier: 1,000 searches/month)
  - **OpenRouter** - LLM analysis with free Gemini 2.0 Flash model
- **Scheduling**: node-cron for automated research runs
- **Cost**: ~$5-10/month (just database hosting!)

## Getting Started

### 1. Install Dependencies

```bash
cd agent
npm install
```

### 2. Configure Environment

Copy the example environment file and add your API keys:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```
DATABASE_URL=postgresql://user:password@localhost:5432/market_analyzer
TAVILY_API_KEY=tvly-xxxxxxxxxxxxx
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxx
```

### 3. Set Up Database

Generate and run migrations:

```bash
npm run db:generate
npm run db:migrate
```

### 4. Run the Agent

Development mode (with hot reload):

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

## Database Schema

The `market_opportunities` table stores structured research following agent guidelines:

**Core Opportunity Fields** (per Agent Guidelines Section 4):

- **opportunity**: High-value build opportunity (e.g., "14' Hollow-Wood Touring SUP")
- **sourceOrigin**: Primary data source citations (e.g., "NMMA 2026 Report", "Etsy Trending", "Verified Market Research") - ensures transparency and verifiability
- **marketWhy**: Data supporting demand
- **materialRecommendation**: Wood/finish combo that will sell
- **cncEdge**: How the 3018 Pro CNC adds value
- **targetBuyerPersona**: Who buys & what they value

**Technical Details**:

- **craftType**: SUP, Surfboard, Kayak, Canoe, Accessory
- **hullType**: Touring, Racing, Displacement, All-around
- **constructionMethod**: Hollow-wood, Cedar-strip, Cold-molded
- **length/width**: Dimensions

**Materials & Aesthetics**:

- **primaryWood**: Western Red Cedar, Paulownia, Teak, etc.
- **accentWood**: Walnut, Sapele Mahogany, etc.
- **finishTrend**: Matte, High-Gloss, Bio-Epoxy, Eco-Luxe

**Market Intelligence**:

- **pricePoint**: Retail positioning
- **marketSentiment**: Demand indicators
- **luxuryFeatures**: GPS mounts, custom inlays, fin setups, etc.

## Guidelines

- **Radical Simplicity**: Keep code minimal, avoid over-engineering, prefer straightforward solutions
- **Testing**: Unit tests only needed for flaky code – focus on complex logic, edge cases, and error-prone areas

## Deploying to Raspberry Pi

### First-Time Setup (Raspberry Pi)

1. **Connect to Pi via Tailscale:**

   ```bash
   # On Mac: Ensure Tailscale is running
   tailscale status

   # SSH to Pi
   ssh chris@100.119.12.61
   ```

2. **Clone and setup:**

   ```bash
   cd ~
   git clone <your-repo-url> market-analyzer
   cd market-analyzer/agent
   npm install
   ```

3. **Configure environment:**

   ```bash
   cp .env.example .env
   nano .env  # Add your API keys and database URL
   ```

4. **Run migrations and start:**

   ```bash
   npm run db:migrate
   npm run build
   npm start
   ```

### Regular Operation

To start/stop the agent on the Pi:

```bash
# Connect to Pi
ssh chris@100.119.12.61

# Navigate and start
cd ~/market-analyzer/agent
npm run dev  # or npm start for production
```

## Research Agent

The artisan watercraft research agent follows a structured approach:

1. **Queries Perplexity AI** for real-time market intelligence on artisan watercraft
2. **Analyzes opportunities** across SUPs, surfboards, kayaks, canoes, and accessories
3. **Structures insights** per Agent Guidelines (opportunity, marketWhy, materialRecommendation, cncEdge, buyerPersona)
4. **Stores strategic data** in PostgreSQL for trend tracking and build planning
5. **Can be scheduled** with cron for automated research runs (every 6 hours)

**Output Format**: Each research cycle produces 5-10 high-value opportunities with:

- Market evidence and demand data
- Specific wood/finish recommendations
- CNC value-add suggestions (3018 Pro capabilities)
- Target buyer personas with willingness-to-pay
- Focus on boutique/artisan markets (not mass production)

Customize the agent in [src/agents/sup-market.ts](agent/src/agents/sup-market.ts).

# On Pi:

curl -X POST http://localhost:3141/chat \
 -H "Content-Type: application/json" \
 -d '{"message":"What time is it?"}'

# From Mac:

curl -X POST http://100.119.12.61:3141/chat \
 -H "Content-Type: application/json" \
 -d '{"message":"What products should we analyze today?"}'

````

### Using sessions (memory):

```bash
curl -X POST http://localhost:3141/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Remember: my name is Alex.","sessionId":"user-1"}'

curl -X POST http://localhost:3141/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"What is my name?","sessionId":"user-1"}'
````

## Troubleshooting

### "model 'llama3.2' not found"

Pull the model first:

```bash
docker exec -it ollama ollama pull llama3.2
```

### Check if containers are running:

```bash
docker ps
# Should show: market-analyzer-agent, ollama, open-webui
```

### View agent logs:

```bash
docker logs market-analyzer-agent --tail 50
docker logs market-analyzer-agent -f  # Follow logs in real-time
```

### Restart everything:

```bash
docker compose down && docker compose up -d
```

### Can't SSH to Pi:

Check Tailscale is running on Mac:

```bash
tailscale status
# If not connected: tailscale up
```

## Development

### Local development on Mac:

Edit code locally, changes sync to Pi automatically if using a shared folder, or:

```bash
# Edit files on Mac
cd ~/repos/jimmy

# Then on Pi, rebuild:
ssh chris@100.119.12.61
cd ~/Jimmy
docker compose down
docker compose up -d --build
```

### Install dependencies for editor IntelliSense (Mac only):

```bash
cd ~/repos/jimmy/agent
npm install
```

## Configuration

### Agent Persona

Edit `prompts/agent-persona.md` to change Jimmy's behavior and instructions.

### Change AI Model

Edit `docker-compose.yml` and set `OLLAMA_MODEL`:

```yaml
environment:
  - OLLAMA_MODEL=llama3.2 # or deepseek-r1, etc.
```

### Change API URL

Edit `docker-compose.yml` and set `FOURTHREADS_API_URL`:

```yaml
environment:
  - FOURTHREADS_API_URL=https://your-api.com
```

## Autonomous Scheduling

Jimmy runs market analysis automatically **every 6 hours**. Check what he's doing:

```bash
docker logs jimmy-agent | grep "Scheduler"
```

To run analysis immediately on startup, set in `docker-compose.yml`:

```yaml
environment:
  - RUN_ANALYSIS_ON_STARTUP=true
```

## Available Models

| Model       | Pull command                                     | Notes                  |
| ----------- | ------------------------------------------------ | ---------------------- |
| Llama 3.2   | `docker exec -it ollama ollama pull llama3.2`    | Default, good tool use |
| DeepSeek R1 | `docker exec -it ollama ollama pull deepseek-r1` | Strong reasoning       |
| DeepSeek V3 | `docker exec -it ollama ollama pull deepseek-v3` | Large MoE (671B)       |

## Raspberry Pi Deployment

### Prerequisites

Install dependencies on your Pi:

```bash
# Docker and Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker pi

# Node.js (if needed outside Docker)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Remote Access

Find your Pi's IP address:

```bash
hostname -I
```

SSH from your Mac:

```bash
ssh pi@<PI_IP_ADDRESS>
```

Deploy to Pi:

```bash
# Clone repo on Pi
git clone <repository-url> ~/jimmy
cd ~/jimmy

# Start services
docker compose up -d
```

### Integration with 4dthreads

Jimmy integrates with your existing POD infrastructure:

- **API** (Railway): Set `FOURTHREADS_API_URL` in `docker-compose.yml` to your Railway API endpoint
- **Site** (GitHub): Frontend hosted separately
- **Printful credentials**: Stored in your API's .env on Railway

Update the API URL in `docker-compose.yml`:

```yaml
- FOURTHREADS_API_URL=https://your-api.railway.app
```
