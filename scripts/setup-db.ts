import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL ?? "file:local.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function main() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS rsvps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      maiden_name TEXT,
      email TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL,
      plus_one INTEGER NOT NULL DEFAULT 0,
      plus_one_name TEXT,
      bringing TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  console.log("Table 'rsvps' ready.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
