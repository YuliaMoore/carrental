import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItems = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 29px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const LoadMoreButton = styled.button`
  color: #3470ff;
  cursor: pointer;
  border: none;
  background: white;
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 16px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
