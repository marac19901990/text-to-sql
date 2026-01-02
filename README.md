# Text-to-SQL Agent

A Next.js application that converts natural language queries into SQL using Claude AI (Anthropic) and LangChain. The agent maintains conversation history and can query a SQLite database containing customer and order data.

## Features

- **AI-Powered SQL Generation**: Uses Claude Sonnet 4 to convert natural language to SQL queries
- **Interactive Chat Interface**: Real-time conversation with the AI agent
- **SQLite Database**: In-memory database with sample customer and order data
- **Message History**: Maintains conversation context across queries
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 16
- **AI/LLM**: Anthropic Claude (via @langchain/anthropic)
- **Agent Framework**: LangGraph
- **Database**: SQLite3
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Project Structure

```
text-to-sql/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── actions.ts          # Server actions for AI agent
│   │   └── page.tsx            # Main chat interface
│   └── lib/                    # Shared libraries
│       ├── constants.ts        # Database table schemas
│       └── database.ts         # SQLite database setup
├── scripts/
│   └── seed.ts                 # Database seeding script
├── .env.local                  # Environment variables (not in repo)
├── .env.local.dist             # Environment template
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm, yarn, or pnpm
- Anthropic API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marac19901990/text-to-sql.git
   cd text-to-sql
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the template and add your API key:
   ```bash
   cp .env.local.dist .env.local
   ```

   Edit `.env.local` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
   ```

   Get your API key from: https://console.anthropic.com/settings/keys

4. **Seed the database** (optional)
   ```bash
   npm run seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open the application**

   Navigate to http://localhost:3000

## Usage

### Asking Questions

Simply type natural language questions about the data in the chat interface:

- "Show me all customers"
- "Which customer has the most orders?"
- "What are the total shipping costs by customer?"
- "Find orders created in August 2024"

The AI agent will:
1. Convert your question to SQL
2. Execute the query (when connected to database)
3. Return the results in a readable format

### Database Schema

The application includes two tables:

**Customer Table:**
- `id` - Customer ID
- `email` - Customer email
- `name` - Customer name

**Order Table:**
- `id` - Order ID
- `createdate` - Order creation date
- `shippingcost` - Shipping cost
- `customerid` - Foreign key to customer
- `carrier` - Shipping carrier
- `trackingid` - Tracking number

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run seed` - Seed the database with sample data
- `npm run lint` - Run ESLint

## Configuration

### VSCode Settings

The project includes VSCode settings for:
- Format on save
- Format on paste

Settings are in `.vscode/settings.json`

### Environment Variables

- `ANTHROPIC_API_KEY` - Your Anthropic API key (required)

## Development

### Adding New Tables

1. Define the schema in `src/lib/constants.ts`
2. Add seed data in `src/lib/database.ts`
3. Run `npm run seed` to populate

### Modifying the AI Agent

The agent configuration is in `src/app/actions.ts`:
- Model: Claude Sonnet 4
- Tools: Currently empty, can add custom tools
- System prompt: Defined in `src/app/page.tsx`

### Database Queries

Execute SQL queries using the `execute` function from `src/lib/database.ts`

## Architecture

### Client-Server Communication

1. User sends message from `page.tsx` (client component)
2. Message serialized to `StoredMessage` format
3. Server action in `actions.ts` processes with Claude
4. Response serialized and sent back to client
5. Client updates UI with new messages

### Message Flow

```
User Input → HumanMessage → serialize → Server Action
                                         ↓
                                    Claude Agent
                                         ↓
AI Response ← deserialize ← StoredMessage ← Agent Response
```

## Troubleshooting

### API Key Not Found

- Ensure `.env.local` exists and contains `ANTHROPIC_API_KEY`
- Restart the dev server after adding the key

### Node Version Error

- Update to Node.js 20.9.0 or higher
- Use nvm: `nvm install 20 && nvm use 20`

### Database Not Seeding

- Check that `src/lib/constants.ts` exports table schemas
- Run `npm run seed` manually
- Check console for error messages

## License

MIT

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Anthropic Claude](https://www.anthropic.com/)
- Agent framework by [LangChain](https://langchain.com/)
