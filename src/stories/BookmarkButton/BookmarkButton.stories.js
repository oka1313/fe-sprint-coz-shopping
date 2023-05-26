import { BookmarkButton } from "./BookmarkButton";

export default {
  title: "Atoms/BookmarkButton",
  component: BookmarkButton,
  parameters: {
    backgrounds: { default: "light" }, // 스토리의 배경색 설정
  },
};

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {
  args: {
    primary: false,
  },
};
