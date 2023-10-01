import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
import { CSSFramwork, UIFramework } from "@/app/types/LLM.types";

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

  const chatCompletionMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: "You are a frontend developer building UI's for the web."
    }
  ]


  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    temperature: 0.9,
    stream: true,
    messages: chatCompletionMessages
  })

  // type error from response
  const stream = OpenAIStream(response as any);

  return new StreamingTextResponse(stream);
}
