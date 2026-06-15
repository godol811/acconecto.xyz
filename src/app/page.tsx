import { PortfolioPage } from "@/components/PortfolioPage";
import { pageMetadata } from "@/lib/metadata";
import { structuredData } from "@/lib/structuredData";

export const metadata = pageMetadata("ko", "/");

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">{structuredData("ko")}</script>
      <PortfolioPage locale="ko" />
    </>
  );
}
