export const maxDuration = 20;
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { input_value } = await req.json(); // Parse the JSON request body
    console.log(input_value);

    const response = await fetch(
      "https://api.langflow.astra.datastax.com/lf/95736785-054d-4954-abee-ea1f2e47c935/api/v1/run/162af610-a19c-48d6-9e5d-432e3ec0e0ea?stream=false",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP3}`, // Replace with your token
        },
        body: JSON.stringify({
          input_value,
          output_type: "chat",
          input_type: "chat",
          tweaks: {
            "ChatInput-HyjHf": {},
            "Prompt-NJwdw": {},
            "ChatOutput-XdXdi": {},
            "Google Generative AI Embeddings-pH1OP": {},
            "GoogleGenerativeAIModel-k6RPG": {},
            "Prompt-IgzYd": {},
            "AstraDB-xdRZH": {},
            "ParseData-Z7er1": {},
            "File-8z2pu": {},
            "SplitText-DFtQn": {}
          }
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