import {  Dropdown } from 'antd';
import type { MenuProps } from 'antd'
import { CONFIG } from '@/config'
import { updateConfig } from '@/actions';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { GlobalConfigState } from '@/types/reducer'
import { TypeLang } from '@/types';
import { ReactComponent as IconLang } from '@/assets/icons/lang.svg';

const style = {
  padding: '0 15px',
  height: `${CONFIG.headerHeight}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '18px'
}

function SwitchLanguage({ showHover = true }: { showHover?: Boolean }) {
  const dispatch = useDispatch()
  const { language } = useSelector((state: GlobalConfigState) => state.globalConfig, shallowEqual)
  const handleSelect = (val: any) => {
    dispatch(updateConfig({ language: val.key }))
  }
  const langMenu: MenuProps['items'] = [
    {
      key: 'zh',
      label: '简体中文'
    },
    {
      key: 'en',
      label: 'English'
    }
  ]
  return (
    <div className='language'>
      <Dropdown
        menu={
          { 
            items: langMenu,
            selectable: true,
            selectedKeys: [language as TypeLang],
            onSelect: handleSelect
          }
        }
        trigger={['click']}
      >
        <div className={showHover ? 'custom_btn_hover' : ''} style={{...style}}>
          <IconLang />
        </div>
      </Dropdown>
    </div>
  )
}
export default SwitchLanguage