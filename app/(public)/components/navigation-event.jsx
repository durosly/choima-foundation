"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		console.log(url);
		// You can now use the current URL
		if (typeof window !== "undefined") {
			const navCheckbox = document.querySelector("#my-drawer-3");

			if (navCheckbox.checked) {
				// console.log("checked");
				navCheckbox.checked = false;
			}
		}
		// ...
	}, [pathname, searchParams]);

	return null;
}
