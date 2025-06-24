"use client";

import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";

function NavFooterUpgradeButton() {
  const [loading, setLoading] = useState(false);

  const handleUpgrade = useCallback(() => {
    setLoading(true);
    try {

    }
    catch (error) {

    }
    finally {
      setLoading(false);
    }
  }, []);
  return (
    <div className="w-full p-0.5 rounded-full gradient-border-creative h-full">
      <Button
        size="lg"
        className="w-full gradient-border-creative-inner hover:bg-background/90 text-primary-foreground rounded-full font-bold"
        onClick={handleUpgrade}
      >
        {loading
          ? "Upgrading..."
          : "Upgrade"}
      </Button>
    </div>
  );
}

export default NavFooterUpgradeButton;
