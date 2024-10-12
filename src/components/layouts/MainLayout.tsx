import React from 'react'
import Navbar from '@/components/fragments/Navbar'
import Container from './Container'
import { Outlet } from 'react-router-dom'
import Footer from '../Elements/Footer'

type MainLayoutProps = {
    className?: string
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const { className } = props
    return (
        <div className={`${className} w-full min-h-screen flex flex-col justify-between`}>
            <div>
                <Navbar />
                <Container>
                    {<Outlet />}
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout