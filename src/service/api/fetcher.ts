import { instance } from '.'

const fetcher = (url: string) => instance.get(url).then((res) => res.data)

export default fetcher
