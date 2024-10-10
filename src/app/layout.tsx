import MobileWrapper from "@/components/MobileWrapper";
import "./globals.css";
import EmojiProvider from "@/context/EmojiProvider";

interface RootLayoutProps {
  children: JSX.Element;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MobileWrapper>
          <EmojiProvider>
            {children}
          </EmojiProvider>   
        </MobileWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
