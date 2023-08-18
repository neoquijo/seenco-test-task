import { useAppSelector } from 'app/providers/store/TheOnlyOneStore/store'
import { FC, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface IPProps {
    children: ReactNode
    element?: ReactNode
}
export const ProtectedRoutesWrapper: FC<IPProps> = ({ children, element }) => {

    const { isAuth } = useAppSelector(s => s.authSlice)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) navigate('/login')
    }, [isAuth])

    return <>

        {children}
        {element}
    </>
}