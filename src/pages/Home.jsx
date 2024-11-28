import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Div, Img1 } from "../components/homeComponent";
import theme1 from "../images/theme1.jpg";

const Home = () => {
  // const [members, setMembers] = useState("");

  return(
    <Container>
      <Div className="phone-container">

        {/* 헤더바 */}
        <Div className="phone-header">
          <Img1 src={theme1} alt="theme1" />

          <Div className="phone-headerbar">
            <Div className="phone-headerLeft">
              {/* 왼쪽 메뉴 버튼 */}
              <button className="phone-menuBtn">
                =
              </button>
            </Div>
            
            <Div className="phone-headerRight">
              {/* 테마 변경 버튼 */}
              <button className="phone-themeBtn">
                테마
              </button>
              <div className="phone-searchBox">
                <input />
                <button>검색</button>
              </div>
              <button className="phone-sort">정렬</button>
            </Div>
          </Div>

          <Div className="phone-header-theme">
            <button>2024-11</button>
          </Div>
        </Div>

        {/* 일기 섹션 */}
        <Div className="diary-container">
          <Div className="diary-box">
            <p className="diary-date">03</p>
            {/* <button>수정하기</button> 수정 버튼 없이 일기 상세 페이지에서 수정하기 구현해도 될 듯 */}
            <p className="diary-title">Title1</p>
            <p className="diary-desc">Description1</p>
          </Div>
          <Div className="diary-box">
            <p className="diary-date">07</p>
            {/* <button>수정하기</button> 수정 버튼 없이 일기 상세 페이지에서 수정하기 구현해도 될 듯 */}
            <p className="diary-title">Title2</p>
            <p className="diary-desc">Description2</p>
          </Div>
          <Div className="diary-box">
            <p className="diary-date">12</p>
            {/* <button>수정하기</button> 수정 버튼 없이 일기 상세 페이지에서 수정하기 구현해도 될 듯 */}
            <p className="diary-title">Title3</p>
            <p className="diary-desc">Description3</p>
          </Div>
        </Div>

        {/* 하단 메뉴 */}
        <Div className="phone-footer">
          <button>달력</button>
          <button>+</button>
          <button>MyPage</button>
        </Div>
      </Div>
    </Container>
  );
};
export default Home;