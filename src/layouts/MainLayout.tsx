import { Header, Footer } from "@/components/layout";
import GlobalSettingsButton from "@/components/GlobalSettingsButton";
import { useState, useEffect } from "react";

import { Toaster } from "@/components/ui/toaster";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSettingButtonShown, setIsSettingButtonShown] = useState(false);

  useEffect(() => {
    setIsSettingButtonShown(
      window.location.pathname === "/article" ||
        window.location.pathname === "/aireading"
    );
  }, []);
  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ease-in-out dark:bg-black dark:text-white`}
    >
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="grow container mx-auto p-4">{children}</main>

      <Toaster />

      {isSettingButtonShown && <GlobalSettingsButton />}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
