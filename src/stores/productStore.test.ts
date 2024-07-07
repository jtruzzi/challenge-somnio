import { renderHook, act } from "@testing-library/react";
import { useProductStore } from "@/stores/productStore";

describe("useProductStore", () => {
  it("should initialize with correct default values", () => {
    const { result } = renderHook(() => useProductStore());

    expect(result.current.pageLimit).toBe(3);
    expect(result.current.searchQuery).toBe("");
  });

  it("should update pageLimit", () => {
    const { result } = renderHook(() => useProductStore());

    act(() => {
      result.current.setPageLimit(5);
    });

    expect(result.current.pageLimit).toBe(5);
  });

  it("should update searchQuery", () => {
    const { result } = renderHook(() => useProductStore());

    act(() => {
      result.current.setSearchQuery("test query");
    });

    expect(result.current.searchQuery).toBe("test query");
  });
});
