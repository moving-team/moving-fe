import { Outlet } from 'react-router-dom';
import style from './UserLayout.module.css';
import '../style/globals.css';
import NonLoginNav from '../components/nav/NonLoginNav';

export default function UserLayout() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <NonLoginNav />
        <Outlet />
      </div>
    </div>
  );
}
