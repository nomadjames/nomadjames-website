import fs from "node:fs";
import path from "node:path";

type ClarenceGraphFrameProps = {
  className?: string;
  title?: string;
};

const graphHtml = fs.readFileSync(
  path.join(process.cwd(), "public/clarence-graph/index.html"),
  "utf8",
);

export default function ClarenceGraphFrame({
  className,
  title = "Clarence Knowledge Graph Visualization",
}: ClarenceGraphFrameProps) {
  return (
    <iframe
      srcDoc={graphHtml}
      title={title}
      loading="lazy"
      className={className}
    />
  );
}
