import { FaLeftLong  } from 'react-icons/fa6';
import { StyledLink, StyledBtnBack } from './ButtonBack.styled';

const ButtonBack = ({ to, children }) => {
    return (
        <StyledBtnBack>
        <StyledLink to={to}>
            <FaLeftLong  /> {children}
        </StyledLink>
        </StyledBtnBack>
    );
    };
export default ButtonBack;