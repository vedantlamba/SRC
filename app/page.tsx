import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="text-3xl flex flex-col justify-center items-center gap-3">
      Sheriyan Research Club
      <div className="flex gap-3 text-xl">
        <span>Working On</span>
        <Button variant="outline" asChild>
          <Link href="/project">
            Project Page <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Page;
