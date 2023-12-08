import { Bars } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
    return (
        <StyledLoader>
            <Bars
                height="100"
                width="100"
                color="#495057"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
        </StyledLoader>
    );
};

export default Loader;