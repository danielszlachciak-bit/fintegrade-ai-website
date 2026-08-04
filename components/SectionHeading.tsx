type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, lead, align = "left" }: Props) {
  return (
    <div className={`sectionHeading ${align === "center" ? "center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}
