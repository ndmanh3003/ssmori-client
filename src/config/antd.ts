import { ConfigProviderProps } from 'antd'

const antdConfig: ConfigProviderProps = {
  componentSize: 'large',
  theme: {
    token: {
      colorPrimary: '#DF4601',
      fontFamily: 'Manrope',
      borderRadius: 12,
      colorBgContainer: '#FFF7EB'
    },
    components: {
      Form: {
        labelFontSize: 18
      },
      Modal: {
        titleFontSize: 20
      },
      Table: {
        borderColor: '#DB7A3F',
        cellFontSize: 16,
        footerBg: 'transparent',
        headerBg: '#DB7A3F',
        headerBorderRadius: 20,
        headerColor: 'white'
      }
    }
  }
}

export default antdConfig
