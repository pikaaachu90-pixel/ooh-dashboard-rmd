const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
export const fetchData = async (filters = {}) => {
  const q = new URLSearchParams(filters).toString();
  const res = await fetch(`${BASE}/data?${q}`);
  return res.json();
};
export const fetchInsights = async () => (await fetch(`${BASE}/insights`)).json();
