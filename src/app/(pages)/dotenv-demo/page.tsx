import React from "react";

export default function Page() {
    return <p>{process.env.NEXT_PUBLIC_API_URL}</p>
}