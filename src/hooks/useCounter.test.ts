import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { act } from "react";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("Initial count test", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  test("increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("decrement the count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(9);
  });
});
