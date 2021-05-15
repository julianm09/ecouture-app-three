import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {colors} from './color'

const LoaderUI = styled.div`

background: ${colors.blue};
width: 100vw;
height: 100vh;
position: absolute;
z-index: 1000000000000000;
justify-content: center;
align-items: center;
transition: 1s ease;
display: flex;
`


export const Loader = () => {
    const [isLoading, setIsLoading] = useState(true)
 
    useEffect(() => {
        
            setIsLoading(false)
        
    }, [])
 

    return(
        
        <LoaderUI style={{ transform: isLoading ? 'translateY(0)' : 'translateY(-100vh)' }}>
            <img style={{animation: '4s spin linear infinite'}} width="100px" src="/loader.svg"/>
        </LoaderUI>

    )
}
