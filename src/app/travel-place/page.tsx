"use client";
import TravelPlaceItem, {
  TravelPlaceProps,
} from "@/components/travel-place/TravelPlaceItem";
import TravelPlaceList from "@/components/travel-place/TravelPlaceList";
import React, { useState, useEffect } from "react";

export default function TravelPlacePage() {
  const [travelPlaces, setTravelPlaces] = useState<TravelPlaceProps[]>([]);

  useEffect(() => {
    async function loadTravelPlaces() {
      const data = await fetchPlaces();
      setTravelPlaces(data);
    }

    loadTravelPlaces();
  }, []);

  return (
    <div>
      <TravelPlaceList travelPlaces={travelPlaces} />
    </div>
  );
}

function fetchPlaces(): Promise<TravelPlaceProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(travelPlaceDatas);
    }, 1000);
  });
}

const travelPlaceDatas = [
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Faffiliate%2F2021%2F12%2F29%2F61cc26b285028.jpg&w=828&q=75",
    types: ["호텔", "리조트"],
    name: "럭셔리 호텔",
    areas: ["해운대", "바다 전망"],
    ratings: [4.7, 3200],
    sleepSalePrice: 130000,
    sleepCheckInTime: "15:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Faffiliate%2F2020%2F06%2F12%2F5ee2ce314b98e.jpg&w=640&q=75",
    types: ["게스트하우스"],
    name: "코지 게스트하우스",
    areas: ["광안리", "해변 근처"],
    ratings: [4.3, 250],
    borrowOriginalPrice: 70000,
    borrowSalePrice: 65000,
    borrowMaximumTime: "6시간",
    sleepOriginalPrice: 80000,
    sleepSalePrice: 75000,
    sleepCheckInTime: "14:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Faffiliate%2F2021%2F05%2F07%2F6094c1a7028c3.jpg&w=640&q=75",
    types: ["펜션", "해변"],
    name: "해변 펜션",
    areas: ["송정", "해변가"],
    ratings: [4.6, 1230],
    sleepSalePrice: 95000,
    sleepCheckInTime: "16:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Fadimg_new%2F74709%2F517878%2Fdfae1e96f6e96c3ba705b638ad6e2b18.jpg&w=640&q=75",
    types: ["호스텔", "도심"],
    name: "모던 호스텔",
    areas: ["서면", "시내 중심"],
    ratings: [4.1, 210],
    borrowSalePrice: 45000,
    borrowMaximumTime: "12시간",
    sleepOriginalPrice: 60000,
    sleepSalePrice: 55000,
    sleepCheckInTime: "15:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Faffiliate%2F2020%2F11%2F12%2F5facd1c4769bd.jpg&w=640&q=75",
    types: ["리조트", "풀빌라"],
    name: "오션뷰 리조트",
    areas: ["기장", "오션뷰"],
    ratings: [4.8, 340],
    borrowOriginalPrice: 180000,
    borrowSalePrice: 170000,
    borrowMaximumTime: "8시간",
    sleepOriginalPrice: 220000,
    sleepSalePrice: 200000,
    sleepCheckInTime: "14:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Faffiliate%2F2016%2F05%2F17%2F573ade296aabc.jpg&w=640&q=75",
    types: ["민박", "산촌"],
    name: "산속의 작은 민박",
    areas: ["강원도", "산속"],
    ratings: [4.2, 150],
    sleepOriginalPrice: 50000,
    sleepSalePrice: 45000,
    sleepCheckInTime: "14:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Faffiliate%2F2023%2F03%2F31%2F6426a6b54e93f.jpg&w=640&q=75",
    types: ["B&B", "전원"],
    name: "전원 B&B",
    areas: ["전주", "시골"],
    ratings: [4.5, 300],
    borrowOriginalPrice: 60000,
    borrowSalePrice: 55000,
    borrowMaximumTime: "4시간",
    sleepOriginalPrice: 70000,
    sleepSalePrice: 65000,
    sleepCheckInTime: "15:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Faffiliate%2F2021%2F08%2F12%2F611473fc22462.jpg&w=640&q=75",
    types: ["아파트", "시티뷰"],
    name: "도심 아파트 숙소",
    areas: ["서울", "도심"],
    ratings: [4.8, 500],
    sleepOriginalPrice: 120000,
    sleepSalePrice: 110000,
    sleepCheckInTime: "16:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Fadimg_new%2F74000%2F23922%2F764c4e5c292f71cdb4b3d63595086807.jpg&w=640&q=75",
    types: ["캠프장", "자연"],
    name: "자연 속 캠프장",
    areas: ["제주도", "해변가"],
    ratings: [4.6, 220],
    borrowOriginalPrice: 80000,
    borrowSalePrice: 70000,
    borrowMaximumTime: "10시간",
    sleepOriginalPrice: 90000,
    sleepSalePrice: 85000,
    sleepCheckInTime: "17:00",
  },
  {
    imgUrl:
      "https://www.yeogi.com/_next/image?url=https%3A%2F%2Fimage.goodchoice.kr%2Faffiliate%2F2023%2F10%2F20%2F65314d7fb6dd3.jpg&w=640&q=75",
    types: ["모텔", "도심 근처"],
    name: "시내 모텔",
    areas: ["부산", "시내 근처"],
    ratings: [3.9, 100],
    sleepOriginalPrice: 40000,
    sleepSalePrice: 35000,
    sleepCheckInTime: "13:00",
  },
];
