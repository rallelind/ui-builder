// Defining the expected type output from the LLM
// LLM's are inherently stocastic so we want a quite deterministic output format
// This way we capture the creativity from the LLM without the caos

// We can achieve this in multiple ways, maybe we just output it as as generic UI block
// And then we have a UI component that can render it depending on the type

// Do you use the LLM as a engine or as a generator? Meaning do we get the LLM to output json of what to render
// Or the code itself and then we render the outputted code? I think the latter is better because it's more deterministic.

export type UIFramework = "react";
export type CSSFramwork = "tailwind";

interface UIBlock {

}
