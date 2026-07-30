const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export async function sendContactMessage(data) {
  const res = await fetch(`${API_BASE}/api/contact/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Sever error");
  }

  return res.json();
}
