export async function sendContactMessage(data) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Sever error");
  }

  return json;
}
