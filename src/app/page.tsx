import { PortfolioPage } from "@/components/PortfolioPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("ko", "/");

export default function HomePage() {
  return <PortfolioPage locale="ko" />;
}
