import axios from "axios";

const BACKEND_DOMAIN = "http://localhost:8111";

export const AxiosApi = {
  signUp: async (id, password, email, nickname) => {
    try {
      const response = await axios.post(`${BACKEND_DOMAIN}/auth/signup`, {
        id,
        password,
        email,
        nickname,
      });
      if (response.data.success) {
        return true;
      } else {
        // success가 false이면 백엔드 응답 구조 상 원래 항상 catch로 가야하기 때문에
        // 이 라인에 도달하는 경우는 알 수 없는 응답으로 처리했습니다.
        throw new Error("알 수 없는 응답");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  checkUnique: async (field, value) => {
    try {
      const response = await axios.get(
        `${BACKEND_DOMAIN}/auth/signup/check-unique?field=${field}&value=${value}`
      );
      if (response.data.success) {
        return response.data.isUnique;
      } else {
        // success가 false이면 백엔드 응답 구조 상 원래 항상 catch로 가야하기 때문에
        // 이 라인에 도달하는 경우는 알 수 없는 응답으로 처리했습니다.
        throw new Error("알 수 없는 응답");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  login: async (id, password) => {
    try {
      const response = await axios.post(`${BACKEND_DOMAIN}/auth/login`, {
        id,
        password,
      });
      if (response.data.success) {
        return response.data.isAuthenticated;
      } else {
        // success가 false이면 백엔드 응답 구조 상 원래 항상 catch로 가야하기 때문에
        // 이 라인에 도달하는 경우는 알 수 없는 응답으로 처리했습니다.
        throw new Error("알 수 없는 응답");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default AxiosApi;
