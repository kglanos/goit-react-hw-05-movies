/* import { FaArrowRotateLeft } from 'react-icons/fa6'; */
import { StyledLink, StyledBtnBack } from './ButtonBack.styled';

const BtnBack = ({ to, children }) => {
    return (
        <StyledBtnBack>
        <StyledLink to={to}>
            {/* <FaArrowRotateLeft /> {children} */}
        </StyledLink>
        </StyledBtnBack>
    );
    };
export default BtnBack;