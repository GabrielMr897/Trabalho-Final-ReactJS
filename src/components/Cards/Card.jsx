import styled from "styled-components";
import { pxvwp } from "../../uteis/pxvwp.js";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: center;
  height: 65vh;
  width: 80%;
  margin: auto;
  justify-content: center;
  `;

export const Card = styled.div`
  display: flex;
  width: ${pxvwp(320, 320)};
  min-height: ${pxvwp(200, 320)};
  flex-direction: column;
  padding: ${pxvwp(65)};
  margin: ${pxvwp(20)};
  background-color: #f5f5f5;
  box-shadow: -1px 11px 24px -11px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  height: 100%;
  border-radius: 13%;
  margin-top: 6px;
  
  @media (min-width: 768px) {
    width: ${pxvwp(320, 768)};
    min-height: ${pxvwp(200, 768)};
    height: 100%;
  }

  @media (min-width: 1075px) {
    width: ${pxvwp(500)};
    min-height: ${pxvwp(300)};
    height: 100%;
  }
  `;

export const CardTitle = styled.h3`
  margin-top: ${pxvwp(10)};
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1075px) {
    font-size: 1.5rem;
  }
`;

export const CardText = styled.p`
  margin-top: ${pxvwp(10)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1075px) {
    font-size: 1rem;
  }
`;

export const CardImg = styled.img`
  margin-top: ${pxvwp(30)};
  margin: auto;
  height: 250px;
  width: 250px;
  border-radius: 8%;
 `;

