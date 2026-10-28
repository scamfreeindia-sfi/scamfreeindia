import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      phoneNumber,
      email,
      state,
      city,
      barCouncil,
      enrollmentNumber,
      enrollmentYear,
      courtJurisdictions,
      specializations,
      experienceYears,
      consultationModes,
      languages,
    } = body;

    if (!fullName || fullName.trim().length < 3) {
      return NextResponse.json(
        { message: "Please provide your full legal name as per Bar Council records." },
        { status: 400 }
      );
    }

    if (!phoneNumber || phoneNumber.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { message: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!enrollmentNumber || enrollmentNumber.trim().length < 4) {
      return NextResponse.json(
        { message: "Please provide your valid State Bar Council enrollment number." },
        { status: 400 }
      );
    }

    const referenceId = `SFI-ADV-${Date.now().toString().slice(-4)}${Math.floor(1000 + Math.random() * 9000)}`;
    const apiBaseUrl = process.env.API_URL || "https://scamfreeind.in";

    try {
      const leadPayload = {
        name: `Advocate Registration: ${fullName} (${enrollmentNumber})`,
        phone_number: phoneNumber,
        problem_type: `Lawyer Onboarding | Bar: ${barCouncil || "State Bar"} | Specs: ${(specializations || []).slice(0, 3).join(", ")} | City: ${city || state || "India"} | Ref: ${referenceId}`,
      };

      await fetch(`${apiBaseUrl}/api/lawyer/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadPayload),
      }).catch((err) => {
        console.warn("Backend forward notice (non-blocking):", err);
      });
    } catch (e) {
      console.warn("Forwarding attempt skipped:", e);
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: "Advocate registration application submitted successfully for verification.",
      data: {
        fullName,
        enrollmentNumber,
        state,
        city,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Lawyer Registration Submission Error:", error);
    return NextResponse.json(
      { message: "Unable to process advocate registration. Please try again or contact support." },
      { status: 500 }
    );
  }
}
