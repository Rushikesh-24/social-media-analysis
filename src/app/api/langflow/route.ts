import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { input_value } = await req.json(); // Parse the JSON request body
    console.log(input_value);

    const response = await fetch(
      "https://api.langflow.astra.datastax.com/lf/629526ed-a9a5-4287-adc8-4f105621aaa2/api/v1/run/24ea2fd0-4f61-4344-abf1-c83d94007b04?stream=false",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP}`, // Replace with your token
        },
        body: JSON.stringify({
          input_value,
          output_type: "chat",
          input_type: "chat",
          tweaks: {
            "ChatInput-8O38n": {},
            "Prompt-X6mux": {},
            "ChatOutput-IOKzh": {},
            "Google Generative AI Embeddings-k7fn4": {},
            "GoogleGenerativeAIModel-CytJY": {},
            "Prompt-8NmIe": {},
            "AstraDB-rkWCw": {},
            "ParseData-mqwyy": {},
            "File-K7XBi": {},
            "SplitText-G3PcG": {},
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json({ data });
  } catch (error: any) {
    console.error("Error in POST request:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}