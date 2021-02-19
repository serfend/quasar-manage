/**
 * main boot file
 */
// import _router from '../router/permission'
import './echarts'
import '../components/Markdown/Markdown'
import '../quasar.manage.config'
import '../axios/fetchData'
import { handleBaiduStatistics } from 'src/utils/clone-utils'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ app, router, Vue, publicPath }) => {
  handleBaiduStatistics()
}
