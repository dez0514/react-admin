import { useEffect, useMemo, useState } from 'react'
import SwitchTheme from "../switchTheme"
import CustomColorPicker from '@/components/colorPicker'
import { CONFIG } from "@/config"
import { updateConfig } from '@/actions';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { GlobalConfigState } from '@/types/reducer'
import { ThemeType } from '@/types'
import { FormattedMessage } from "react-intl";
import { Typography, Switch } from 'antd'

function Setting () {
  const dispatch = useDispatch()
  const { theme, primaryColor, hideLogo, hideTagsView } = useSelector((state: GlobalConfigState) => state.globalConfig, shallowEqual)
  const curColor = useMemo(() => {
    return primaryColor || CONFIG[theme as ThemeType]?.colorPrimary
  }, [theme, primaryColor])
  const changeColor = (val: any) => {
    console.log(val)
    // 更新颜色 colorPrimary
    dispatch(updateConfig({ primaryColor: val }))
  }
  const handleChangeLogoShow = (val: boolean) => {
    dispatch(updateConfig({ hideLogo: !val }))
  }
  const handleChangeTagsViewShow = (val: boolean) => {
    dispatch(updateConfig({ hideTagsView: !val }))
  }
  return (
    <div>
      <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
        <div>
          <Typography.Text>
            <FormattedMessage id="layout.setting.themeType" />
          </Typography.Text>
        </div>
        <div>
          <SwitchTheme/>
        </div>
      </div>
      <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
        <div>
          <Typography.Text>
            <FormattedMessage id="layout.setting.themeColor" />
          </Typography.Text>
        </div>
        <div>
          <CustomColorPicker popoverStyle={{ paddingRight: '10px' }} hexval={curColor} onChange={changeColor} />
        </div>
      </div>
      <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
        <div>
          <Typography.Text>
            <FormattedMessage id="layout.setting.isshowlogo" />
          </Typography.Text>
        </div>
        <div>
          <Switch checked={!hideLogo} onChange={(value: boolean) => handleChangeLogoShow(value)}/>
        </div>
      </div>
      <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
        <div>
          <Typography.Text>
            <FormattedMessage id="layout.setting.isshowtagsview" />
          </Typography.Text>
        </div>
        <div>
          <Switch checked={!hideTagsView} onChange={(value: boolean) => handleChangeTagsViewShow(value)}/>
        </div>
      </div>
    </div>
  )
}

export default Setting