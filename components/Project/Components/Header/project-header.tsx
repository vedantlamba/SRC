import { CompletedDialog } from "../Completed/completed-dialog";
import { OnGoingDialog } from "../OnGoing/ongoing-dialog";
import { TodoDialog } from "../Todo/todo-dialog";

export const ProjectHeader = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10">
      <div className="flex flex-col gap-4 md:gap-8 flex-1">
        <h2 className="text-2xl md:text-4xl tracking-tighter font-medium">
          Projects
        </h2>
        <div className="flex gap-3 flex-wrap">
          <div className="flex gap-1 flex-col">
            <span className="font-bold text-lg md:text-2xl tracking-tighter">
              45
            </span>
            <p className="flex gap-3 font-normal tracking-tighter text-[#C4C4C4] md:text-xl text-sm">
              In Progress{" "}
              <span className="self-end pb-1">
                <Eclipse />
              </span>
            </p>
          </div>
          <div className="flex gap-1 flex-col">
            <span className="font-bold text-lg md:text-2xl tracking-tighter">
              12
            </span>
            <p className="flex gap-3  font-normal tracking-tighter text-[#C4C4C4] md:text-xl text-sm">
              Completed{" "}
              <span className="self-end pb-1">
                <Eclipse />
              </span>
            </p>
          </div>
          <div className="flex gap-1 flex-col">
            <span className="font-bold text-lg md:text-2xl tracking-tighter">
              10
            </span>
            <p className="flex gap-3 font-normal tracking-tighter text-[#C4C4C4] md:text-xl text-sm">
              Upcoming{" "}
              <span className="self-end pb-1">
                <Eclipse />
              </span>
            </p>
          </div>
          <div className="flex gap-1 flex-col">
            <span className="font-bold text-lg md:text-2xl tracking-tighter">
              67
            </span>
            <p className="flex gap-3 font-normal tracking-tighter text-[#C4C4C4] md:text-xl text-sm">
              Total Projects{" "}
            </p>
          </div>
        </div>
      </div>
      {/*  Card Form Dialog Buttons  */}

      <div className="flex justify-center items-end gap-2">
        <TodoDialog />
        <OnGoingDialog />
        <CompletedDialog />
      </div>
    </div>
  );
};

export const Eclipse = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="8"
      height="8"
      viewBox="0 0 8 8"
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApElEQVR4AVSOzRWCMBCEIRVQgnYAZ050gCVQgpVYAiVoB16Sl6N0oB3IOb/O5428zMtkdnZ3TKPjvT9Za5/CV6jOuTuaSo2B5Jxftda+bdsHEJ/RqJlSyk3OLqU0jOO4CJcY41laI9NqcNM1TdMHEcDRxHsy7CJAz+F2+nUYNqawT8L/wtGYYrRvQdW+N+mFVZzQewjhatgn04CbLoWe1bARmtoPAAD//5+7Z7QAAAAGSURBVAMAuUd2Vy+n6xwAAAAASUVORK5CYII="
        x="0"
        y="0"
        width="8"
        height="8"
      />
    </svg>
  );
};
