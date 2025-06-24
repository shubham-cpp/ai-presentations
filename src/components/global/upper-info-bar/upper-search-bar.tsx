import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function UpperSearchBar() {
  return (
    <div className="min-w-[60%] relative flex items-center border rounded-full bg-secondary/90">
      <Button
        type="submit"
        size="sm"
        variant="ghost"
        className="absolute left-0 h-full rounded-l-none bg-transparent hover:bg-transparent"
      >
        <SearchIcon className="size-4" />
        <span className="sr-only">Search</span>
      </Button>
      <Input
        id="titleSearch"
        name="titleSearch"
        type="search"
        placeholder="Search by title"
        className="grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 ml-6"
        style={{
          background: "transparent",
        }}
      />
    </div>

  );
}

export default UpperSearchBar;
