async function getRankingsData() {
  try {
    const response = await fetch("https://api.octagon-api.com/rankings");
    if (!response.ok) {
      throw new Error("Failed to fetch rankings data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching rankings data:", error);
    throw error; // Re-throw the error to handle it upstream
  }
}

export async function GET() {
  try {
    const data = await getRankingsData();
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}