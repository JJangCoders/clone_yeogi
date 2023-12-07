import Image from "next/image";
import React from "react";
import { formatNumberWithCommas } from "../../util/string_util";

export interface TravelPlaceItemProps {
  imgUrl: string;
  types: string[];
  name: string;
  areas: string[];
  ratings: number[];
  borrowOriginalPrice?: number;
  borrowSalePrice?: number;
  borrowMaximumTime?: string;
  sleepOriginalPrice?: number;
  sleepSalePrice?: number;
  sleepCheckInTime?: string;
}

export default function TravelPlaceItem({
  imgUrl,
  types,
  name,
  areas,
  ratings,
  borrowOriginalPrice,
  borrowSalePrice,
  borrowMaximumTime,
  sleepOriginalPrice,
  sleepSalePrice,
  sleepCheckInTime,
}: TravelPlaceItemProps) {
  return (
    // 아이템 영역
    <div className="flex flex-row w-full h-240pxr md:h-200pxr">
      {/* 이미지 */}
      <div className="relative w-1/3 overflow-hidden max-w-[300px] md:w-5/12 rounded-xl">
        <Image
          className="object-cover object-center"
          src={imgUrl}
          layout="fill"
          alt="Picture of the author"
        />
      </div>
      {/* 세부정보 */}
      <div className="flex flex-col justify-between flex-grow h-full ml-4">
        {/* 기본정보 */}
        <div>
          {/* 종류 */}
          <div className="text-xs text-color-112">
            {types.map((item, index) => (
              <span className="" key={item}>
                {item}
                {index < types.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>

          {/* 이름 */}
          <p className="font-bold text-18pxr">{name}</p>

          {/* 위치 */}
          <div className="flex items-center text-xs text-color-112">
            {areas.map((item, index) => (
              <span key={item} className={`${index == 0 ? "font-bold" : ""}`}>
                {item}
                {index < areas.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>

          {/* 사용자 평가 */}
          <div className="flex flex-row items-center mt-1">
            {/* 평점 */}
            <div className="flex flex-row p-1 text-xs rounded-md bg-yellow bg-color-orange">
              <span>★</span>
              <span className="pl-1 font-semibold">{ratings[0]}</span>
            </div>
            {/* 평가자 수 */}
            <div className="pl-2 text-sm font-normal text-color-112">
              <span>{formatNumberWithCommas(ratings[1])}</span>
              <span className="pl-1">평가</span>
            </div>
          </div>
        </div>

        {/* 가격정보 */}
        <div>
          {/* 대실 */}
          {borrowSalePrice !== undefined && (
            <div className="flex flex-col w-full">
              {/* 대실 체크인 시간 및 원가 */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <span className="font-semibold text-12pxr">대실</span>
                  <span className="font-semibold m-4pxr text-10pxr text-color-112">
                    최대 {borrowMaximumTime}
                  </span>
                </div>
                {borrowOriginalPrice !== undefined ? (
                  <div className="text-sm text-color-112">
                    <span className="line-through ">
                      {formatNumberWithCommas(borrowOriginalPrice as number)}
                    </span>
                    <span className="line-through">원</span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {/* 대실 판매가 */}
              <div className="flex items-end justify-end">
                <span className="font-bold text-22pxr ">
                  {formatNumberWithCommas(borrowSalePrice as number)}
                </span>
                <span className="font-semibold text-16pxr">원</span>
              </div>
            </div>
          )}

          {sleepSalePrice !== undefined && borrowSalePrice !== undefined ? (
            <div className="h-[8px]"></div>
          ) : (
            <></>
          )}

          {/* 숙박 */}
          <div className="flex flex-col w-full">
            {/* 숙박 체크인 시간 및 원가 */}
            <div className="flex justify-between w-full">
              <div>
                <span
                  className={`${
                    borrowSalePrice === undefined ? "invisible" : ""
                  } text-12pxr font-semibold`}
                >
                  숙박
                </span>
                {sleepCheckInTime !== undefined &&
                borrowSalePrice !== undefined ? (
                  <span className="font-semibold m-4pxr text-10pxr text-color-112">
                    {sleepCheckInTime} 체크인
                  </span>
                ) : (
                  ""
                )}
              </div>
              {sleepOriginalPrice !== undefined ? (
                <div className="text-sm text-color-112">
                  <span className="line-through ">
                    {formatNumberWithCommas(sleepOriginalPrice as number)}
                  </span>
                  <span className="line-through">원</span>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* 숙박 판매가 */}
            <div className="flex items-end justify-end">
              <span className="font-bold text-22pxr ">
                <span
                  className={`${
                    sleepOriginalPrice !== undefined ? "invisible" : ""
                  } text-color-112`}
                ></span>
                {formatNumberWithCommas(sleepSalePrice as number)}
              </span>
              <span className="font-semibold text-16pxr">원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
