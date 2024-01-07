import fs from "fs";
import { readFile } from "./mock_module";

// moduleのpathを自動的に引数にする
// describeやitのトップレベルで記述する
jest.mock("fs");
const mockFs = jest.mocked(fs);
// fs.readFileSync.mockReturnValue("dummy data");
// typescriptは【fs】が理解できないのでインスタンスを作る
mockFs.readFileSync.mockReturnValue("dummy data");

it("readFileがデータを返却する", () => {
    const result = readFile("path/dummy");
    expect(result).toBe("dummy data");
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
})