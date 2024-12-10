import { ConfigProviderProps } from 'antd'

const antdConfig: ConfigProviderProps = {
  componentSize: 'large',
  theme: {
    token: {
      colorPrimary: '#DF4601',
      fontFamily: 'Manrope',
      borderRadius: 12
    },
    components: {
      Form: {
        labelFontSize: 20
      }
    }
  }
}

export default antdConfig
