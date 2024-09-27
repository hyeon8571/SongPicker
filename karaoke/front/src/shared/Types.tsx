// 텍스트 크기별 파일에 사용
export type TextProps = {
    text: string
}

// 결제 페이지 카테고리 데이터에 사용
export type PayingInfo = {
    amount: number;
    moneyText: string;
  };

//버튼
export type ButtonProps = {
    text: string;
    handleClick: () => void;
  };