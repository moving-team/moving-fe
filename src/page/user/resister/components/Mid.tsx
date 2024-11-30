import React from 'react';

import style from './Mid.module.css';
import ImgUpload from '../../../../components/page/resister/ImgUpload';
import Region from '../../../../components/page/resister/Region';
import ServiceType from '../../../../components/page/resister/ServiceType';
import { ResisterFormValidation, ResisterFormValues } from '../type';

export default function ResisterMidComponent({
  values,
  validation,
  inputHeandler,
  preview,
}: {
  values: ResisterFormValues;
  validation: ResisterFormValidation;
  inputHeandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  preview?: string;
}) {
  return (
    <div className={style.mid}>
      <ImgUpload inputHeandler={inputHeandler} preview={preview} />
      <hr className={style.rightLine} />
      <ServiceType
        title='이용 서비스'
        values={values}
        inputHeandler={inputHeandler}
        nomalMessage='*견적 요청 시 이용 서비스를 선택할 수 있어요.'
        errorMessage='* 1개 이상 선택해 주세요'
        validation={!!values.small || !!values.house || !!values.office}
      />
      <hr className={style.rightLine} />
      <Region
        title='내가 사는 지역'
        nomalMessage='*견적 요청 시 지역을 설정할 수 있어요.'
        errorMessage='* 1개만 선택해 주세요'
        inputHeandler={inputHeandler}
        region={values.region}
        validation={validation.region}
      />
    </div>
  );
}
