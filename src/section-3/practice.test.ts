// 私の解答

// import axios from "axios";

// jest.mock("axios");
// const mockAxios = jest.mocked(axios);
// mockAxios.get.mockResolvedValue("Hello");

// it("データを取得する", async () => {
//     const result = await mockAxios.get("/users.json");
//     expect(result).toBe("Hello");
//     expect(mockAxios.get).toHaveBeenCalledTimes(1);
// })

//　解答
import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Users",()=>{
    beforeEach(()=>{
        // 各テストでGETなどが行われた場合でも初期状態にする
        mockAxios.get.mockClear();
    });

    it("ユーザーを取得できる",async()=>{
        const users = [{name: "Taro"},{name: "Hanako"}];
        const resp = {data:users};
        mockAxios.get.mockResolvedValue(resp);

        const result = await Users.all();
        expect(result).toEqual(users);
        expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
    })
})