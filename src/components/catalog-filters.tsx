"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { uiCopy } from "@/lib/copy";
import { Locale } from "@/lib/types";

export function CatalogFilters({ locale }: { locale: Locale }) {
  const params = useSearchParams();
  const router = useRouter();

  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());

    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }

    router.push(`/${locale}/catalog?${next.toString()}`);
  }

  return (
    <div className="filters-row">
      <input
        type="search"
        placeholder={uiCopy[locale].searchPlaceholder}
        defaultValue={params.get("q") ?? ""}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            update("q", (event.target as HTMLInputElement).value);
          }
        }}
      />
      <select
        aria-label={uiCopy[locale].sort}
        defaultValue={params.get("sort") ?? "featured"}
        onChange={(event) => update("sort", event.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: low to high</option>
        <option value="price-desc">Price: high to low</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
}
