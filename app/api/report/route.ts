import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const apiBaseUrl = process.env.API_URL || "https://scamfreeind.in";

    // Proxy the request to the local API
    const response = await fetch(`${apiBaseUrl}/api/scam/lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || "External API error" },
        { status: response.status }
      );
    }

    const data = await response.json().catch(() => ({ success: true }));
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Proxy Error:", error);
    return NextResponse.json(
      { message: "Could not connect to the local API. Is it running on port 8000?" },
      { status: 500 }
    );
  }
}
