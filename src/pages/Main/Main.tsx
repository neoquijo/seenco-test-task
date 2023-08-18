import { CssBaseline } from '@mui/material'
import css from './Main.module.scss'
import { FC, useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { readme } from './marktown'

interface IPProps {

}
export const Main: FC<IPProps> = ({ }) => {






    return (<div className={'page-wrapper'}>
        <div className={css.container}>
            <ReactMarkdown className={css.markdown}>{readme}</ReactMarkdown>
        </div>
        <CssBaseline />
    </div>)
}