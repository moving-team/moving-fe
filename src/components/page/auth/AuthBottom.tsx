import style from './AuthBottom.module.css';
import google from '../../../assets/images/img_login_google_large.svg';
import kakao from '../../../assets/images/img_login_kakao_large.svg';
import naver from '../../../assets/images/img_login_naver_large.svg';
import googleMedium from '../../../assets/images/img_login_google_medium.svg';
import kakaoMedium from '../../../assets/images/img_login_kakao_medium.svg';
import naverMedium from '../../../assets/images/img_login_naver_medium.svg';
import { useMedia } from '../../../lib/function/useMediaQuery';

export const UserLoginBottom = () => {
  const { pc } = useMedia();
  // const loginKakao = async () => {
  //   try {
  //     await auth.get('user/kakao?userType=CUSTOMER');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div className={style.bottom}>
      <span>SNS 계정으로 간편 가입하기</span>
      <div className={style.snsIcon}>
        {pc ? (
          <>
            <img src={google} alt='' />
            <a href='https://moving-be-render.onrender.com/user/kakao?userType=CUSTOMER'>
              <img src={kakao} alt='' />
            </a>
            <img src={naver} alt='' />
          </>
        ) : (
          <>
            <img src={googleMedium} alt='' />
            <a href='https://moving-be-render.onrender.com/user/kakao?userType=CUSTOMER'>
              <img src={kakaoMedium} alt='' />
            </a>
            <img src={naverMedium} alt='' />
          </>
        )}
      </div>
    </div>
  );
};

export const DriverLoginBottom = () => {
  const { pc } = useMedia();
  return (
    <div className={style.bottom}>
      <span>SNS 계정으로 간편 가입하기</span>
      <div className={style.snsIcon}>
        {pc ? (
          <>
            <img src={google} alt='' />
            <a href='https://moving-be-render.onrender.com/user/kakao?userType=MOVER'>
              <img src={kakao} alt='' />
            </a>
            <img src={naver} alt='' />
          </>
        ) : (
          <>
            <img src={googleMedium} alt='' />
            <a href='https://moving-be-render.onrender.com/user/kakao?userType=MOVER'>
              <img src={kakaoMedium} alt='' />
            </a>
            <img src={naverMedium} alt='' />
          </>
        )}
      </div>
    </div>
  );
};

export const UserSignupBottom = () => {
  const { pc } = useMedia();
  return (
    <div className={style.bottom}>
      <span>SNS 계정으로 간편 가입하기</span>
      <div className={style.snsIcon}>
        {pc ? (
          <>
            <img src={google} alt='' />
            <a href='https://moving-be-render.onrender.com/user/kakao?userType=CUSTOMER'>
              <img src={kakao} alt='' />
            </a>
            <img src={naver} alt='' />
          </>
        ) : (
          <>
            <img src={googleMedium} alt='' />
            <a href='https://moving-be-render.onrender.com/user/kakao?userType=CUSTOMER'>
              <img src={kakaoMedium} alt='' />
            </a>
            <img src={naverMedium} alt='' />
          </>
        )}
      </div>
    </div>
  );
};

export const DriverSignupBottom = () => {
  const { pc } = useMedia();
  return (
    <div className={style.bottom}>
      <span>SNS 계정으로 간편 가입하기</span>
      <div className={style.snsIcon}>
        {pc ? (
          <>
            <img src={google} alt='' />
            <a href='https://moving-be-render.onrender.com/user/kakao?userType=MOVER'>
              <img src={kakao} alt='' />
            </a>
            <img src={naver} alt='' />
          </>
        ) : (
          <>
            <img src={googleMedium} alt='' />
            <a href='https://moving-be-render.onrender.com/user/kakao?userType=MOVER'>
              <img src={kakaoMedium} alt='' />
            </a>
            <img src={naverMedium} alt='' />
          </>
        )}
      </div>
    </div>
  );
};
