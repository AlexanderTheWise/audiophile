import { Footer, Header } from "@/_components/organisms";
import ProductCartProvider from "./_context/ProductCart";
import "./styles/index.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProductCartProvider initalState={{}}>
          <Header />
          <main>{children}</main>
        </ProductCartProvider>
        <Footer />
      </body>
    </html>
  );
}
