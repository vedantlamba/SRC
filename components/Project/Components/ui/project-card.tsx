import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar02Icon,
  Chatting01Icon,
  FigmaIcon,
  LinkSquare02Icon,
  UserAdd01Icon,
} from "@hugeicons/core-free-icons";
import { Progress } from "@/components/ui/progress";

interface Props {
  projectName: string;
  projectType: string;
  tags?: string[];
  progressValue: number;
  teamMember: string[];
  projectPreviewPhoto: string;
}

export const ProjectCard = ({
  projectName,
  progressValue,
  projectPreviewPhoto,
  projectType,
  teamMember,
}: Props) => {
  return (
    <div className="rounded-3xl bg-[#FBFBFB] lg:p-10" key={projectName}>
      <div className="rounded-3xl shadow-sm p-5 bg-white flex flex-col gap-5">
        {/* Header  */}
        <div className="flex justify-between items-center flex-wrap gap-6">
          {/* //Project Members  */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {teamMember.map((member, idx) => {
                return (
                  <img
                    src={member}
                    key={idx}
                    alt={`${member}-1`}
                    className="rounded-full w-6 md:w-9"
                  />
                );
              })}

              {/* <img
                src="/People/person-2.png"
                alt="person-1"
                className="rounded-full w-6 md:w-9"
              />
              <img
                src="/People/person-3.png"
                alt="person-1"
                className="rounded-full w-6 md:w-9"
              />
              <img
                src="/People/person-4.png"
                alt="person-1"
                className="rounded-full w-6 md:w-9"
              /> */}
            </div>

            <button className="cursor-pointer">
              <HugeiconsIcon
                icon={UserAdd01Icon}
                color="#757575"
                className="hover:text-black transition-colors"
              />
            </button>
          </div>
          {/* ///////  */}

          {/* Due Date  */}
          <div className="flex gap-2 items-center">
            <HugeiconsIcon icon={Calendar02Icon} color="#C4C4C4" width={20} />
            {/* Due date for project  */}
            <span className="text-[#C4C4C4] text-sm font-light">
              Due: Oct 28, 2025
            </span>
          </div>
          {/* /////  */}

          {/* Project Type Tag   */}
          <span className="px-4 py-1 rounded-full bg-[#DDD5B0] text-[#8F7813] text-sm">
            Web
          </span>
          {/* ///////  */}
        </div>
        {/* Header End  */}

        {/* Heading  */}
        <div>
          <h3 className="font-normal text-xl">{projectName}</h3>
        </div>
        {/* //////  */}
        {/* Link and tags  */}
        <div className="flex gap-3">
          <div className="flex gap-3">
            <span className="px-4 py-1 rounded-full bg-[#B1DDB0] text-[#3E823B] text-sm">
              Design
            </span>
            <span className="px-4 py-1 rounded-full bg-[#DDB0CF] text-[#A23D3D] text-sm">
              High
            </span>
          </div>
          <div className="flex gap-1">
            <a href="https://www.figma.com/">
              <HugeiconsIcon icon={FigmaIcon} />
            </a>
            <a href="/">
              <HugeiconsIcon icon={Chatting01Icon} />
            </a>
            <a href="/">
              <HugeiconsIcon icon={LinkSquare02Icon} />
            </a>
          </div>
        </div>
        {/* /////////  */}
        {/* Progress Bar  */}
        <div className="flex items-center gap-3">
          <Progress
            value={progressValue}
            className="md:w-[60%] bg-transparent border border-[#D4FF00]"
          />
          <span className="text-[#CACACA] text-sm tracking-wider">
            {progressValue}%
          </span>
        </div>
        {/* ///////  */}
        <div>
          <div className="h-56 rounded-3xl border">
            <img
              src={projectPreviewPhoto}
              alt={`${projectName}-preview-photo`}
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
