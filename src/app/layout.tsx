import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "FamilyCube",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <html lang="bn">
        <body className={roboto.className}>
          <AppRouterCacheProvider>
            <>
              <Toaster position="top-center" />
              {children}
            </>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
