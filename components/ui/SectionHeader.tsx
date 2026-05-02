import { ReactNode } from "react";

type Props = {
  title: ReactNode;
  titleAccent?: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  maxTitle?: number;
  maxSubtitle?: number;
};

export function SectionHeader({
  title,
  titleAccent,
  subtitle,
  align = "left",
  maxTitle = 980,
  maxSubtitle = 580,
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={isCenter ? "mx-auto text-center" : "text-left"}
      style={{ maxWidth: isCenter ? maxTitle : undefined }}
    >
      <h2
        className="text-balance text-white font-light m-0"
        style={{
          fontSize: "clamp(34px, 4.4vw, 64px)",
          lineHeight: 1.08,
          letterSpacing: "-.02em",
          maxWidth: maxTitle,
          marginLeft: isCenter ? "auto" : undefined,
          marginRight: isCenter ? "auto" : undefined,
        }}
      >
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="font-bold">{titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className="text-text-muted mt-5"
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            maxWidth: maxSubtitle,
            marginLeft: isCenter ? "auto" : undefined,
            marginRight: isCenter ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
