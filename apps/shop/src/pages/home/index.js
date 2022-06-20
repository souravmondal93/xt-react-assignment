import { Link } from '../../components';
import * as S from './home.styled';

const HomePage = () => {
  return (
    <S.HomePageWrapper>
      <S.LinkWrapper>
        <Link secondary='true' to='/products/1'>
          View Products
        </Link>
      </S.LinkWrapper>
    </S.HomePageWrapper>
  );
};

export default HomePage;
