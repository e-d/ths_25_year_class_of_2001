import { db } from "@/lib/db";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, maidenName, email, phone, plusOne, plusOneName } = body as {
    firstName?: string;
    lastName?: string;
    maidenName?: string;
    email?: string;
    phone?: string;
    plusOne?: boolean;
    plusOneName?: string;
  };

  if (!firstName || !lastName || !email || !phone) {
    return Response.json(
      { error: "firstName, lastName, email, and phone are required." },
      { status: 400 },
    );
  }

  const emailNormalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalized)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await db.execute({
      sql: `INSERT INTO rsvps (first_name, last_name, maiden_name, email, phone, plus_one, plus_one_name)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [
        firstName.trim(),
        lastName.trim(),
        maidenName?.trim() || null,
        emailNormalized,
        phone.trim(),
        plusOne ? 1 : 0,
        plusOneName?.trim() || null,
      ],
    });
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      err.message.includes("UNIQUE constraint failed")
    ) {
      return Response.json(
        { error: "This email has already been used to RSVP." },
        { status: 409 },
      );
    }
    throw err;
  }

  return Response.json({ success: true });
}
