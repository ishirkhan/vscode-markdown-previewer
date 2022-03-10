import {
  khanTextToKhanUz,
  khanUzTextToUg,
  ugTextToKhanUz,
  khanUzTextToKhan,
} from "khan-alphabet";

import { khanRemark } from "./khan-remark";

export function khanTextToUgText(text) {
  return khanUzTextToUg(khanTextToKhanUz(text));
}

export function khanTextToShirkhanUzText(text) {
  return khanTextToKhanUz(text);
}

export function ugTextToKhanText(text) {
  return khanUzTextToKhan(ugTextToKhanUz(text));
}

export function khanMarkdownToShirkhanUzMarkdown(markdownText) {
  return khanRemark
    .data("converter", (node) => {
      if (node.value) {
        try {
          return khanTextToShirkhanUzText(node.value);
        } catch (error) {
          console.log("error", error);
        }
      }
      return node.value;
    })
    .processSync(markdownText)
    .toString();
}

export function khanMarkdownToUgMarkdown(markdownText) {
  return khanRemark
    .data("converter", (node) => {
      if (node.value) {
        try {
          return khanTextToUgText(node.value);
        } catch (error) {
          console.log("error", error);
        }
      }
      return node.value;
    })
    .processSync(markdownText)
    .toString();
}

export function ugMarkdownToKhanMarkdown(markdownText) {
  return khanRemark
    .data("converter", (node) => {
      if (node.value) {
        try {
          return ugTextToKhanText(node.value);
        } catch (error) {
          console.log("error", error);
        }
      }
      return node.value;
    })
    .processSync(markdownText)
    .toString();
}
