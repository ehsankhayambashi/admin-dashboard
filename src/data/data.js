import { GrInProgress } from "react-icons/gr";
import { BsClipboard2Data } from "react-icons/bs";
import { SiPytest } from "react-icons/si";
import { MdCloudDone } from "react-icons/md";
export const earningData = [
  {
    icon: <GrInProgress />,
    amount: "",
    percentage: "۴%",
    title: "در حال انجام",
    iconcolor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsClipboard2Data />,
    amount: "",
    percentage: "۲۳%",
    title: "انجام شده",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <SiPytest />,
    amount: "",
    percentage: "۳۸%",
    title: "بررسی",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <MdCloudDone />,
    amount: "",
    percentage: "۱۲%",
    title: "پایان یافته",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];
export const convertToPersianNumbers = (number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(number).replace(/\d/g, (digit) => persianDigits[digit]);
};
export const projects = [
  {
    id: convertToPersianNumbers(1),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "م. علی احمدی",
    progress: 16,
  },
  {
    id: convertToPersianNumbers(2),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "م. علی احمدی",
    progress: 90,
  },
  {
    id: convertToPersianNumbers(3),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "م. علی احمدی",
    progress: 87,
  },
  {
    id: convertToPersianNumbers(4),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "م. علی احمدی",
    progress: 23,
  },
  {
    id: convertToPersianNumbers(5),
    title: "استانداردها، کاربردها و نقشه راه ارتباطات رادیویی",
    owner: "د. ویسی",
    nazerElmi: "احسان خیام باشی",
    progress: 55,
  },
];
export const project = {
  stete: 1,
  progress: 77,
  staticInfo: [
    {
      name: "این یک متن تستی و برای نمونه است و در نهایت متن اصلی جایگزین می گردد",
      value: "موضوع متنی",
    },
    { name: "و در نهایت متن اصلی جایگزین می گردد", value: "موضوع متنی" },
    { name: "کار ۳", value: "موضوع متنی" },
    { name: "کار ۴", value: "موضوع متنی" },
    { name: "کار ۵", value: "موضوع متنی" },
    { name: "کار ۶", value: "موضوع متنی" },
    { name: "کار ۷", value: "موضوع متنی" },
    { name: "کار ۸", value: "موضوع متنی" },
    { name: "کار ۹", value: "موضوع متنی" },
    { name: "کار ۱۰", value: "موضوع متنی" },
    // { name: "کار ۱۱", value: "موضوع متنی" },
    // { name: "کار ۱۲", value: "موضوع متنی" },
  ],
};
