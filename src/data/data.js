import { GrInProgress } from "react-icons/gr";
import { BsClipboard2Data } from "react-icons/bs";
import { SiPytest } from "react-icons/si";
import { MdCloudDone } from "react-icons/md";
import sample from "../data/sample.jpg";
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
  state: 4,
  progress: 77,
  columnInfo: [
    { name: "مبلغ قرارداد", value: "۵۰۰" },
    { name: "طبقه بندی", value: "محرمانه" },
    {
      name: "زمان شروع",
      value: "۹۸/۲/۱۰",
    },

    { name: "مدت قرارداد (ماه)", value: "۱۱" },
    { name: "مجری", value: "سینا احمدیان" },
    { name: "روش انتخاب مجری", value: "فراخوان و امتیازدهی" },
    { name: "مسئول پیگیری", value: "ایزدی فر" },
    { name: "مدیر پروژه", value: "مهدی زارعی" },
    { name: "ناظر سازمانی", value: "کوروش رحمانی" },
    { name: "ناظر علمی", value: "داوود فرهانی" },
    { name: "تعداد فازها", value: "۵" },
    { name: "یگان بهره بردار", value: "فاوا" },
  ],
  tableInfo: [
    {
      name: "تایید حفا مجری",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "سطح1: بیانیه نیاز",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "قرارداد ناظر",
      state: false,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "مصوبه شورا",
      state: false,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "سامانه جامع",
      state: false,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "کارنامک",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "شناسنامه",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "پروپزال",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "پیوست فنی",
      state: false,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "مجوز پژوهشگاه",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "قرارداد مجری",
      state: false,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "فرم کاربست",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "هماهنگی بهره بردار",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "تایید بهره بردار",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "گالینگور",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "مقاله",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "تسویه حساب",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "ابلاغ خاتمه یافتگی",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "مصوبه کاربست",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
    {
      name: "گواهی اسناد",
      state: true,
      comment:
        "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.",
      file: sample,
    },
  ],
};
export const loginFields = [
  {
    labelText: "ایمیل",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "ایمیل",
  },
  {
    labelText: "رمز عبور",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "رمز عبور",
  },
];
export const signupFields = [
  {
    labelText: "نام کاربری",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "نام کاربری",
  },
  {
    labelText: "ایمیل",
    labelFor: "email",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "ایمیل",
  },
  {
    labelText: "رمز عبور",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "رمز عبور",
  },
  {
    labelText: "تکرار رمز عبور",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "تکرار رمز عبور",
  },
];
