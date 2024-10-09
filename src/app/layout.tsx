import MobileWrapper from "@/components/MobileWrapper";
import "./globals.css";

interface RootLayoutProps {
  children: JSX.Element;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MobileWrapper>
          {children}
        </MobileWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
