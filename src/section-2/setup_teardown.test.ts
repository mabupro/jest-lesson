// beforeEach: 各テスト（it）の前に実行される
// afterEach: 各テスト（it）の後に実行される

// beforeAll: グループ内のすべてのテストの前に1度だけ実行される
// afterAll: グループ内のすべてのテストの後に1度だけ実行される

describe("outer describe block", () => {
  beforeEach(() => {
    console.log("outer beforeEach");
  });

  afterEach(() => {
    console.log("outer afterEach");
  });

  beforeAll(() => {
    console.log("outer beforeAll");
  });

  afterAll(() => {
    console.log("outer afterAll");
  });

  it("outer test 1", () => {
    console.log("outer test 1");
  });

  it("outer test 2", () => {
    console.log("outer test 2");
  });

  describe("inner describe block", () => {
    beforeEach(() => {
      console.log("inner beforeEach");
    });

    afterEach(() => {
      console.log("inner afterEach");
    });

    beforeAll(() => {
      console.log("inner beforeAll");
    });

    afterAll(() => {
      console.log("inner afterAll");
    });

    it("inner test 1", () => {
      console.log("inner test 1");
    });

    it("inner test 2", () => {
      console.log("inner test 2");
    });
  });
});

// 実行順序

// > jest-lesson@1.0.0 test
// > jest src/section-2/setup_teardown.test.ts

//   console.log
//     outer beforeAll

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:17:13)

//   console.log
//     outer beforeEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:9:13)

//   console.log
//     outer test 1

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:25:13)

//   console.log
//     outer afterEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:13:13)

//   console.log
//     outer beforeEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:9:13)

//   console.log
//     outer test 2

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:29:13)

//   console.log
//     outer afterEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:13:13)

//   console.log
//     inner beforeAll

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:42:15)

//   console.log
//     outer beforeEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:9:13)

//   console.log
//     inner beforeEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:34:15)

//   console.log
//     inner test 1

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:50:15)

//   console.log
//     inner afterEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:38:15)

//   console.log
//     outer afterEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:13:13)

//   console.log
//     outer beforeEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:9:13)

//   console.log
//     inner beforeEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:34:15)

//   console.log
//     inner test 2

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:54:15)

//   console.log
//     inner afterEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:38:15)

//   console.log
//     outer afterEach

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:13:13)

//   console.log
//     inner afterAll

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:46:15)

//   console.log
//     outer afterAll

//       at Object.<anonymous> (src/section-2/setup_teardown.test.ts:21:13)
