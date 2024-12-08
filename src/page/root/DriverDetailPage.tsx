import React from "react";
import { useParams } from "react-router-dom";
import style from "./DriverDetail.module.css";
import DriverCard from "../../components/card/DriverCard";
import Review from "../../components/review/Review";
import { MOCK_DATA } from "../root/searchDriver/mockData";
import { ChipProps } from "../../components/chip/Chip";
import {
  translateServiceRegion,
  translateServiceType,
} from "./searchDriver/EnumMapper";

const DriverDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 기사님 ID 가져오기
  const driver = MOCK_DATA.find((driver) => driver.id === parseInt(id || "", 10)); // ID로 기사 찾기

  if (!driver) {
    return (
      <div className={style.container}>
        <p>해당 기사님을 찾을 수 없습니다.</p>
      </div>
    );
  }

  const transformedDriver = {
    ...driver,
    serviceType: driver.serviceType.map((type) => type as ChipProps["type"]),
  };

  return (
    <div className={style.outerContainer}>
      <div className={style.noPadding}></div>
      <div className={style.container}>
        <div className={style.leftFilters}>
          <DriverCard user={transformedDriver} />
          <div className={style.section}>
            <div className={style.border}></div>
            <h2 className={style.sectionTitle}>상세설명</h2>
            <p className={style.description}>{driver.description}</p>
            <div className={style.border}></div>
            <h2 className={style.sectionTitle}>제공 서비스</h2>
            <div className={style.chips}>
              {driver.serviceType.map((type, index) => (
                <span key={index} className={style.serviceChip}>
                  {translateServiceType(type)}
                </span>
              ))}
            </div>
            <div className={style.border}></div>
            <h2 className={style.sectionTitle}>서비스 가능 지역</h2>
            <div className={style.chips}>
              {driver.serviceRegion.map((region, index) => (
                <span key={index} className={style.regionChip}>
                  {translateServiceRegion(region)}
                </span>
              ))}
            </div>
            <div className={style.reviewSeparator}></div>
            <div className={style.reviewSection}>
              <Review />
            </div>
          </div>
        </div>
        <div className={style.rightFilters}>
          <h2>{driver.nickname} 기사님에게 지정 견적을 요청해보세요!</h2>
        </div>
      </div>
    </div>
  );
};

export default DriverDetailPage;

