import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  height: 100vh;
  // justify-content: space-around;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props: { price: any; cautionZone: any; dangerZone: any; }) => {
    const { price, cautionZone, dangerZone } = props;
    
    if (price <= 0) {
      return '#f0ccf5';
    } else if (price > 0 && price < cautionZone) {
      return '#b9ef9c';
    } else if (price >= cautionZone && price < dangerZone) {
      return '#FF885A';
    } else {
      return '#ed8185';
    }
  }};
`;

export const HeightWrapper = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ColWrapper = styled.div`
  align-items: center;
  flex-direction: column;
`;