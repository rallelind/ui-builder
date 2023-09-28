import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

type UIFramework = "react";
type CSSFramwork = "tailwind";

interface CreateUIBlockRequestInterface {
  prompt: string;
  uiFramework: UIFramework;
  cssFramework: CSSFramwork;
}

interface RequestUIBlock extends Request {
  json: () => Promise<CreateUIBlockRequestInterface>;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_AI_KEY,
});

export const runtime = "edge";

class UIBlockPromptFormat {
  uiFramework: UIFramework;
  cssFramework: CSSFramwork;

  constructor(uiFramework: UIFramework, cssFramework: CSSFramwork) {
    this.uiFramework = uiFramework;
    this.cssFramework = cssFramework;
  }

  formatPrompt() {
    switch (this.uiFramework) {
      case "react":
        return this.formatPromptForReact();
      default:
        return "No ui framework provided";
    }
  }

  formatPromptForReact() {
    return `Format the returned UI block to React.js using ${this.cssFramework} as the CSS framework. The React.js code should be formatted as a functional component. Do not use a UI component or import any packages.`;
  }
}

export async function POST(req: RequestUIBlock) {
  const { prompt, uiFramework, cssFramework } = await req.json();

  const formatUIBlockPrompt = new UIBlockPromptFormat(
    uiFramework,
    cssFramework
  );

  const generateUIBlockPrompt = formatUIBlockPrompt.formatPrompt();

  const response = await openai.completions.create({
    model: "text-davinci-003",
    stream: true,
    max_tokens: 4000,
    prompt: `Create a frontend for the web
    ${generateUIBlockPrompt}
    Here is what needs to be build: ${prompt}
    `,
  });

  // type error from response
  const stream = OpenAIStream(response as any);

  return new StreamingTextResponse(stream);
}
