import { ChipType } from "../../components/card/type";

// 시간 변환
// type => yyyy. mm. dd / ss초 전 표시 x
// type X => yy. mm. dd / ss초 전 표시
export function getNotificationDate(inputDate: string | Date, type?: string) {
  const now = new Date();
  const date = new Date(inputDate);
  const difference = now.getTime() - date.getTime();
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (difference < 24 * 60 * 60 * 1000) {
    if (hours > 0) return `${hours}시간 전`;
    if (minutes > 0) return `${minutes}분 전`;
    if (!type) return `${seconds}초 전`;
  } else {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return type ? `${year}. ${month}. ${day}` : `${year.toString().slice(-2)}. ${month}. ${day}`;
  }
}

// 한국기준 금액 형식 출력
export function formatCurrency(cost: number, onlyNum?: boolean) {
  const price = cost.toLocaleString('ko-KR');

  return onlyNum ? price : price + '원';
}

export const getChips = (chipList: ChipType[], count: number) => {
  const chips: ChipType[][] = [];
  let k = 0;

  for (let i = 0; i < chipList.length / count; i++) {
    chips[i] = [];
    for (let j = k; j < k + count && j < chipList.length; j++) {
      chips[i].push(chipList[j]);
    }
    k += count;
  }
  return chips;
};
