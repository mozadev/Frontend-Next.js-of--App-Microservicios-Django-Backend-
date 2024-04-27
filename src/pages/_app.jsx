import '@styles/globals.css'

import { Provider } from 'react-redux';
import { wrapper } from '@/redux/store';


export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    const { store, props } = wrapper.useWrappedStore(pageProps);

    return <Provider store={store}>{getLayout(<Component {...props} />)}</Provider>
}