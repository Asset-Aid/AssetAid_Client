import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
// import axios from "axios"; 

const EditUserInfo = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [idMessage, setIdMessage] = useState<string>("");
  const [isIdChecked, setIsIdChecked] = useState<boolean>(false);

  const handleIdCheck = async () => {
    try {
      // const response = await axios.post(`/auth/check/id`, { id });
      // if (response.data.isAvailable) {
      //   setIdMessage("사용 가능한 아이디입니다.");
      //   setIsIdChecked(true);
      // } else {
      //   setIdMessage("이미 사용 중인 아이디입니다.");
      //   setIsIdChecked(false);
      // }

      // 임시 설정
      setIdMessage("사용 가능한 아이디입니다.");
      setIsIdChecked(true);
    } catch (error) {
      console.error("API 오류:", error);
      setIdMessage("아이디 확인에 실패했습니다.");
      setIsIdChecked(false);
    }
  };

  const handleProfileEdit = async () => {
    if (year && month && day) {
      const birthday = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

      const profileData = {
        id,
        password,
        nickname,
        birthday,
      };

      console.log("수정된 정보:", profileData);

      try {
        // const response = await axios.patch(`/mypage/${userId}/profile/modify`, profileData);
        // console.log("정보 수정 성공:", response.data);

        // 임시 메시지
        console.log("수정 요청");
      } catch (error) {
        console.error("수정 실패:", error);
      }
    } else {
      console.log("생년월일이 입력되지 않았습니다.");
    }
  };

  const isEditEnabled =
    isIdChecked &&
    password.length >= 8 &&
    id &&
    nickname &&
    year &&
    month &&
    day;

  return (
    <Container>
      <Header>
        <BackIcon src="/assets/backicon.png" alt="Back" onClick={() => navigate("/mypage")}/>
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" onClick={() => navigate("/home")}/>
      </Header>

      <MyPageHeader>
        <Title>회원 정보 수정</Title>
        <Separator />
      </MyPageHeader>

      <InputRow>
        <InputLabel>아이디</InputLabel>
        <Input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </InputRow>
      <IDContainer>
        <InputMessageWrapper>
          <DuplicateCheckButton onClick={handleIdCheck}>중복 확인</DuplicateCheckButton>
          {idMessage && <IdMessage>{idMessage}</IdMessage>}
        </InputMessageWrapper>
      </IDContainer>

      <InputRow>
        <InputLabel>비밀번호</InputLabel>
        <div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordMessage isValid={password.length >= 8}>
            {password.length === 0
              ? "비밀번호는 8자리 이상으로 설정해주세요."
              : password.length >= 8
              ? "사용 가능한 비밀번호입니다."
              : "비밀번호는 8자리 이상이어야 합니다."}
          </PasswordMessage>
        </div>
      </InputRow>

      <InputRow>
        <InputLabel>닉네임</InputLabel>
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputRow>

      <InputRow>
        <InputLabel>생년월일</InputLabel>
        <DateInput>
          <SelectContainer>
            <Select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value=""></option>
              {Array.from({ length: 100 }, (_, i) => {
                const currentYear = new Date().getFullYear();
                return (
                  <option key={i} value={currentYear - i}>
                    {currentYear - i}
                  </option>
                );
              })}
            </Select>
            <Suffix>년</Suffix>
          </SelectContainer>

          <SelectContainer>
            <Select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value=""></option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
            <Suffix>월</Suffix>
          </SelectContainer>

          <SelectContainer>
            <Select value={day} onChange={(e) => setDay(e.target.value)}>
              <option value=""></option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
            <Suffix>일</Suffix>
          </SelectContainer>
        </DateInput>
      </InputRow>

      <EditButton onClick={handleProfileEdit} disabled={!isEditEnabled}>
        수정하기
      </EditButton>
    </Container>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.img`
  width: 100px;
  height: 14px;
`;

const BackIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const ExitIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 16px;
  background-color: #fff;
`;

const MyPageHeader = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 16px;
  color: #2d2d2d;
  margin: 15px 0px 10px 8px;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #c8c4bb;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
  margin-top: 10px;
  width: 100%;
  max-width: 460px;
  justify-content: space-between;
`;

const InputLabel = styled.label`
  flex: 1;
  color: #797979;
  font-size: 15px;
  font-weight: bold;
  white-space: nowrap;
  margin-left: 16px;
`;

const Input = styled.input`
  width: 230px;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 9px;
  padding: 0 10px;
  margin-bottom: 0px;
  margin-right: 16px;

  &:focus {
    border-color: #FC7900;
    outline: none;
  }
`;

const IDContainer = styled.div`
  height: 20px;
  margin-left: 80px;
  margin-top: 5px;
`;

const InputMessageWrapper = styled.div`
  display: flex;
  width: 230px;
  align-items: center;
`;

const DuplicateCheckButton = styled.button`
  height: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 6px;
  cursor: pointer;
  width: 60px;
  font-size: 10px;
  margin-right: 10px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const IdMessage = styled.div`
  font-size: 11px;
  color: #FFAE64;
`;

const PasswordMessage = styled.div<{ isValid: boolean }>`
  margin-top: 5px;
  font-size: 11px;
  color: #FFAE64;
`;

const DateInput = styled.div`
  flex: 2;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 60px;
  height: 20px;
  border: 1px solid #FC7900;
  border-radius: 4px;
  padding: 0 3px;
`;

const Suffix = styled.span`
  margin-left: 3px;
  font-size: 10px;
  color: #FC7900;
`;

const EditButton = styled.button`
  display: block;
  width: 330px;
  height: 45px;
  margin: 20px auto;
  border: 1px solid #fc7900;
  border-radius: 10px;
  background-color: transparent;
  color: #fc7900;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;



export default EditUserInfo;
