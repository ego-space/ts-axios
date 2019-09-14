import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  return xhr(config)
}

export default axios
