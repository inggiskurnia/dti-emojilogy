import {FC} from 'react'

const MobileWrapper:FC<{children:JSX.Element}> = ({children}) => {
    return (
        <main className='max-w-svh max-h-svh p-[24px] bg-[#FAF4E1] flex flex-col'>
            {children}
        </main>
    )
}

export default MobileWrapper