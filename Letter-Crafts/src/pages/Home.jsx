import React from 'react'
import Firstpage from '../components/home/Firstpage'
import SecondPage from '../components/home/SecondPage'
import Thirdpage from '../components/home/Thirdpage'
import Fourthpage from '../components/home/Fourthpage'
import Fifthpage from '../components/home/Fifthpage'
import SixthPage from '../components/home/SixthPage'
import Lastpage from '../components/home/Lastpage'
function Home() {
    return (
        <div className="w-full ">
            <Firstpage />
            <SecondPage />
            <Thirdpage />
            <Fourthpage />
            <Fifthpage />
            <SixthPage />
            <Lastpage />
        </div>
    )
}

export default Home

