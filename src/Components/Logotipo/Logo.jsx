import logo from "../../assets/img/logo.png";
import styled from "styled-components";

const Logo = styled.img`
    height: 4rem;
    width: 16.8rem;
`;

const Logotipo = ({footer}) => {

    return <>
    {footer ? <Logo src={logo} style={{width: '25rem', height: '6rem'}}/> : <Logo src={logo} />}
    <h3>Kelvin Yomona "TLtubi" </h3>   
    </>
}
//I always like to leave my mark 5to TLtubi

export default Logotipo;