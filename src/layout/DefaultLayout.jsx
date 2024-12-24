
import { Outlet } from 'react-router-dom'

/*import Footer from '../components/Footer';*/
import Header from '../components/Header'

function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />

        </>
    )
}

export default DefaultLayout