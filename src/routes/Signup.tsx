import React, { useState } from "react";
import styled from "styled-components";
// import axios from "axios"; 

const Signup = () => {
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
      // const response = await axios.post(`/auth/check/id`, {
      //   id: id,
      // });
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

  const handleSignup = async () => {
    if (year && month && day) {
      const birthday = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

      const signupData = {
        id,
        password,
        nickname,
        birthday,
      };

      console.log("회원가입 데이터:", signupData);

      try {
        // const response = await axios.post("/auth/register", signupData);
        // console.log("회원가입 성공:", response.data);

        // 임시 메시지
        console.log("회원가입 요청이 전송되었습니다.");
      } catch (error) {
        console.error("회원가입 실패:", error);
      }
    } else {
      console.log("생년월일이 입력되지 않았습니다.");
    }
  };

  const isSignupEnabled =
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
        <BackIcon src="/assets/backicon.png" alt="Back" />
      </Header>

      <Logo src="/assets/logo1.png" alt="Logo" />

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

      <SignupButton onClick={handleSignup} disabled={!isSignupEnabled}>
        회원가입
      </SignupButton>
    </Container>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const BackIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #fff;
`;

const IDContainer = styled.div`
  height: 20px;
  margin-left: 70px;
  margin-top: 3px;
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
  border: 1px solid #fc7900;
  border-radius: 4px;
  padding: 0 3px;

  &:focus {
    border-color: #FC7900;
    outline: none;
  }
`;

const Suffix = styled.span`
  margin-left: 3px;
  font-size: 10px;
  color: #fc7900;
`;

const Logo = styled.img`
  width: 300px;
  margin: 100px 0 20px 0;
`;

const SignupButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: #fc7900;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin: 10px 0 5px;

  &:hover {
    background-color: #e26b00;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Signup;



