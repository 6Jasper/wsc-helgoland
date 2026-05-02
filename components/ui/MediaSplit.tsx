import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  media: ReactNode;
  reverse?: boolean;
  maxWidth?: number;
};

export function MediaSplit({ children, media, reverse, maxWidth = 1280 }: Props) {
  return (
    <div
      className="grid items-center gap-14 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
      style={{ maxWidth, margin: "0 auto" }}
    >
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>{children}</div>
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>{media}</div>
    </div>
  );
}
