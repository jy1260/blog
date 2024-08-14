import { getPostData } from "../components/get-post";

import StyledMarkdown from "../styles/styled-markdown";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import "katex/dist/katex.min.css";

export default function Page({ params }: { params: { id: string } }) {
  const file = getPostData(params.id);

  const content = file.content;

  return (
    <section className="flex flex-col items-center">
      <StyledMarkdown>
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeHighlight]}
        >
          {content}
        </ReactMarkdown>
      </StyledMarkdown>
    </section>
  );
}
