import React from 'react'
import Banner from './components/banner/Banner'
import Nav from './components/nav/Nav'
function Layout() {
    return (
        <div className='w-screen h-screen'>
            {/* --顶部操作栏-- */}
            <Banner />
            {/* --侧边导航栏-- */}
            <Nav />
            {/* --路由展示区-- */}
            <div>

            </div>
        </div>
    )
}

export default Layout