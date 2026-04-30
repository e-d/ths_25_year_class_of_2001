import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await db.execute(
    "SELECT first_name, last_name, plus_one, plus_one_name FROM rsvps ORDER BY created_at ASC",
  );

  const guests = result.rows.map((row) => ({
    firstName: row.first_name,
    lastName: row.last_name,
    plusOne: row.plus_one === 1,
    plusOneName: row.plus_one_name ?? null,
  }));

  return Response.json(guests);
}
