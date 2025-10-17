import { ProjectHeader } from "@/components/Project/Components/Header/project-header";
import { ProjectCard } from "@/components/Project/Components/ui/project-card";
import Image from "next/image";
import React from "react";

const todoData = [
  {
    key: "0",
    projectName: "Landing Page Design",
    projectType: "Web",
    tags: ["Design", "High"],
    progressValue: 0,
    teamMember: [
      "/People/person-1.png",
      "/People/person-2.png",
      "/People/person-3.png",
      "/People/person-4.png",
    ],
    projectPreviewPhoto:
      "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg",
  },
];
const onGoingData = [
  {
    key: "0",
    projectName: "AI Chatbot Integration",
    projectType: "Web",
    tags: ["Design", "AI", "High"],
    progressValue: 52,
    teamMember: [
      "/People/person-6.png",
      "/People/person-4.png",
      "/People/person-3.png",
      "/People/person-5.png",
    ],
    projectPreviewPhoto:
      "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg",
  },
];
const completedData = [
  {
    key: "0",
    projectName: "Automation Dashboard",
    projectType: "Backend",
    tags: ["Development", "High"],
    progressValue: 100,
    teamMember: [
      "/People/person-5.png",
      "/People/person-3.png",
      "/People/person-7.png",
      "/People/person-6.png",
    ],
    projectPreviewPhoto:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
  },
];

export const ProjectPage = () => {
  return (
    <div>
      <div className="md:p-20 flex justify-center pt-10 flex-col px-5 lg:gap-30 gap-10">
        <ProjectHeader />
        <div className="flex w-full flex-col lg:flex-row gap-12 lg:gap-5 flex-wrap">
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
            {todoData.map((data) => {
              return (
                <ProjectCard
                  key={data.key}
                  projectName={data.projectName}
                  projectType={data.projectType}
                  progressValue={data.progressValue}
                  teamMember={data.teamMember}
                  projectPreviewPhoto={data.projectPreviewPhoto}
                />
              );
            })}
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
            {onGoingData.map((data) => {
              return (
                <ProjectCard
                  key={data.key}
                  projectName={data.projectName}
                  projectType={data.projectType}
                  progressValue={data.progressValue}
                  teamMember={data.teamMember}
                  projectPreviewPhoto={data.projectPreviewPhoto}
                />
              );
            })}
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
            {completedData.map((data) => {
              return (
                <ProjectCard
                  key={data.key}
                  projectName={data.projectName}
                  projectType={data.projectType}
                  progressValue={data.progressValue}
                  teamMember={data.teamMember}
                  projectPreviewPhoto={data.projectPreviewPhoto}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
