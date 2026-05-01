import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await db.execute(
    "SELECT name, item FROM food_signups ORDER BY created_at ASC",
  );

  const signups = result.rows.map((row) => ({
    name: row.name,
    item: row.item,
  }));

  return Response.json(signups);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, item } = body as { name?: string; item?: string };

  if (!name?.trim() || !item?.trim()) {
    return Response.json(
      { error: "Name and food item are required." },
      { status: 400 },
    );
  }

  await db.execute({
    sql: "INSERT INTO food_signups (name, item) VALUES (?, ?)",
    args: [name.trim(), item.trim()],
  });

  return Response.json({ success: true });
}
