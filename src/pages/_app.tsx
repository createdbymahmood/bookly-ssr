/* loading styles */
import 'antd/dist/antd.css';
import 'assets/fonts/dana/fontiran.css';
import 'assets/styles/global.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'dayjs/locale/fa';
import 'swiper/swiper.scss';
/* wrapping services */
import { RecoilService } from 'services/recoil/recoilService';
import { ReactQueryService } from 'services/react-query/reactQueryService';
import { ConfigProvider } from 'antd';

import relativeTime from 'dayjs/plugin/relativeTime';
import dayJs from 'dayjs';

dayJs.extend(relativeTime);
dayJs.locale('fa');

function MyApp({ Component, pageProps }) {
    return (
        <RecoilService>
            <ReactQueryService>
                <ConfigProvider direction="rtl">
                    <Component {...pageProps} />
                </ConfigProvider>
            </ReactQueryService>
        </RecoilService>
    );
}

export default MyApp;
