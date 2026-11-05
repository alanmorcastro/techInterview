export const TEST_TIMEOUT = (isCI: boolean) => isCI ? 5 * 60 * 1000 : 2 * 60 * 1000; // 5 minutes for CI, 2 minutes for local runs
export const ACTION_TIMEOUT = (isCI: boolean) => isCI ? 45 * 1000 : 30 * 1000; // 45 seconds for CI, 30 seconds for local runs
export const EXPECT_TIMEOUT = (isCI: boolean) => isCI ? 45 * 1000 : 30 * 1000; // 45 seconds for CI, 30 seconds for local runs