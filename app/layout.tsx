import { Footer, Header } from "@/_components/organisms";
import Providers from "./_context";
import "./styles/index.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
