import { PoweroffOutlined } from '@ant-design/icons'
import { Typography, Dropdown, Space, Avatar } from 'antd'
import type { MenuProps } from 'antd'
import avatar from '@/assets/head.png'
import { CONFIG } from '@/config'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { resetLoginInfo } from '@/reducers/userReducer'
import { GlobalConfigState } from "@/types/reducer"
import { useNavigate } from 'react-router-dom'

const style = {
  padding: '0 10px',
  height: `${CONFIG.headerHeight}px`,
  cursor: 'pointer'
}

function UserAvatar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userinfo } = useSelector((store: GlobalConfigState) => store.userReducer, shallowEqual)
  const handleLogout = () => {
    sessionStorage.clear()
    dispatch(resetLoginInfo())
    navigate('/login', { replace: true })
  }
  const userDropMenu: MenuProps['items'] = [
    {
      key: '1',
      label: <a target='_blank' href="https://github.com/dez0514/react-admin">项目地址</a>
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      icon: <PoweroffOutlined />,
      label: <Typography.Text onClick={handleLogout}>退出登录</Typography.Text>
    }
  ]
  return (
    <div className="UserAvatar">
      <Dropdown menu={{ items: userDropMenu }} trigger={['click']}>
        <div className='flex-center custom_btn_hover' style={{...style}}>
          <Space>
            <Avatar style={{display: 'block'}} src={<img src={userinfo?.avatar || avatar} alt="avatar" />} />
            <Typography.Text>{ userinfo.name }</Typography.Text>
          </Space>
        </div>
      </Dropdown>
    </div>
  )
}
export default UserAvatar