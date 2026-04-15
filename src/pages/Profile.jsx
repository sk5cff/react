import Sidebar from '../components/Sidebar'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className='global-wrap'>
      <Sidebar />
      <div className={styles.profile}>
        <div className='photo'>
          
        </div>
        <lable class={styles.data}>
          <input placeholder='Имя'/>
          <input placeholder='User Name'/>
          <input placeholder='E-mail'/>
          <input type='date'/>
          <input type='password' placeholder='Пароль'/>
        </lable>
      </div>
    </div>
  )
}

export default Profile
