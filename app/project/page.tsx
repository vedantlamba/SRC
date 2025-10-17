import { ProjectHeader } from "@/components/Project/Components/Header/project-header";
import { ProjectCard } from "@/components/Project/Components/ui/project-card";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="md:p-20 flex justify-center pt-10 flex-col px-5 lg:gap-30 gap-10">
      <ProjectHeader />
      <div className="flex w-full flex-col lg:flex-row gap-20 flex-wrap">
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex gap-3 items-center">
            <Image
              src="/Icons/todo-icon.svg"
              width={38}
              height={38}
              alt="Todo Icon"
            />
            <span className="text-lg font-semibold">Todo</span>
          </div>
          <ProjectCard />
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex gap-3 items-center">
            <Image
              src="/Icons/ongoing.svg"
              width={38}
              height={38}
              alt="Ongoing Icon"
            />
            <span className="text-lg font-semibold">On Going</span>
          </div>
          <ProjectCard/>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex gap-3 items-center">
            <Image
              src="/Icons/completed.svg"
              width={38}
              height={38}
              alt="Completed Icon"
            />
            <span className="text-lg font-semibold">Completed</span>
          </div>
          <ProjectCard/>
        </div>
      </div>
    </div>
  );
}

export default Page;
