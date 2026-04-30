import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await db.execute(
    "SELECT first_name, bringing FROM rsvps WHERE bringing IS NOT NULL AND bringing != '' ORDER BY created_at ASC",
  );

  const signups = result.rows.map((row) => ({
    firstName: row.first_name,
    bringing: row.bringing,
  }));

  return Response.json(signups);
}
