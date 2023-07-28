import React from "react";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Card from "../../components/Card/Card";
import ShowState from "../../components/ShowState/ShowState";
import InfoColumn from "../../components/InfoColumn/InfoColumn";
import { project } from "../../data/data";

function Project() {
  const firstColNum = project.staticInfo.length / 2;
  const secondColNum = project.staticInfo.length;
  const firstCol = project.staticInfo.slice(0, firstColNum);
  const secondCol = project.staticInfo.slice(firstColNum, secondColNum);
  return (
    <div className="bg-zinc-300 w-screen min-h-screen p-3 flex flex-col items-center gap-5">
      <ProjectHeader title="استانداردها، کاربردها و نقشه راه ارتباطات رادیویی" />
      <div className="flex flex-row w-full items-center justify-center gap-5">
        <Card>
          <div className="flex flex-row items-center w-96 gap-2">
            <p className="font-iransansMedium text-sm">وضعیت پروژه</p>
            <ShowState state={project.stete} />
          </div>
        </Card>
        <Card>
          <div className="flex flex-row items-center w-96">
            <p className="font-iransansMedium text-sm w-1/4">روند پیشرفت</p>
            <ProgressBar percentage={project.progress} />
          </div>
        </Card>
      </div>
      <div className="flex flex-row w-full items-center justify-center gap-5">
        <Card>
          <div className="w-96">
            <InfoColumn info={firstCol} />
          </div>
        </Card>
        <Card>
          <div className="w-96">
            <InfoColumn info={secondCol} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Project;
