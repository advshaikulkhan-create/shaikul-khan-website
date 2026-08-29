import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt =
      typeof body?.prompt === "string" ? body.prompt.trim() : "";

    if (!prompt) {
      return NextResponse.json(
        { reply: "कृपया अपना सवाल लिखिए।" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    /*
     * API key configured नहीं होने पर application crash नहीं होगी।
     * User को स्पष्ट response मिलेगा।
     */
    if (!apiKey) {
      return NextResponse.json({
        reply:
          "Ask AI अभी configure नहीं किया गया है। कृपया OPENAI_API_KEY configure करें।",
      });
    }

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-5.6-luna",
          instructions:
            "You are Ask AI Advocate, a legal research assistant for an Indian criminal defence advocate. Answer in Hindi or English according to the user's language. Do not invent statutes, sections, judgments or facts. Distinguish statutory text, case law, inference and uncertainty. For legal questions, provide precise, structured and professionally useful answers. Do not claim to be a lawyer or court.",
          input: prompt,
          max_output_tokens: 1200,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("OpenAI API error:", errorText);

      return NextResponse.json(
        {
          reply:
            "AI सेवा से उत्तर प्राप्त नहीं हो सका। कृपया थोड़ी देर बाद पुनः प्रयास करें।",
        },
        { status: 502 }
      );
    }

    const data = await response.json();

    const reply =
      typeof data?.output_text === "string"
        ? data.output_text
        : Array.isArray(data?.output)
          ? data.output
              .flatMap((item: any) => item?.content || [])
              .map((item: any) => item?.text || "")
              .filter(Boolean)
              .join("\n")
          : "";

    return NextResponse.json({
      reply: reply || "AI ने कोई उत्तर नहीं दिया। कृपया प्रश्न दोबारा पूछें।",
    });
  } catch (error) {
    console.error("Ask AI route error:", error);

    return NextResponse.json(
      {
        reply:
          "सर्वर पर समस्या आई है। कृपया कुछ देर बाद पुनः प्रयास करें।",
      },
      { status: 500 }
    );
  }
}
