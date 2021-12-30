import Loader from 'react-loader-spinner'
import { LoadingWrapper } from './styles'

const Loading = () => {
    return(
        <LoadingWrapper>
            <Loader 
                type="MutatingDots"
                color='black'
                secondaryColor='grey'
                height={100}
                width={100}
            />
        </LoadingWrapper>
    )
}

export default Loading;