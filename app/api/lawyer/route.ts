import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { problemType, phoneNumber } = await request.json();

    if (!phoneNumber || phoneNumber.length < 10) {
      return NextResponse.json(
        { message: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!problemType) {
      return NextResponse.json(
        { message: "Please select a legal issue type." },
        { status: 400 }
      );
    }

    const apiBaseUrl = process.env.API_URL || "https://scamfreeind.in";

    // Format lead data for the external API
    const leadData = {
      name: "Lawyer Booking",
      phone_number: phoneNumber,
      problem_type: problemType,
    };

    // Proxy/forward the request to the main API
    const response = await fetch(`${apiBaseUrl}/api/lawyer/lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || "Failed to submit lead to backend" },
        { status: response.status }
      );
    }

    const data = await response.json().catch(() => ({ success: true }));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Lawyer Lead Submission Error:", error);
    return NextResponse.json(
      { message: "Could not submit. Something went wrong." },
      { status: 500 }
    );
  }
}
