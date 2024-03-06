import { useState } from "react";

const apiConfig = {
    url: "http://127.0.0.1:8080/",
}

export const Api = () => {
    const [apiConfigH, setApiConfig] = useState(apiConfig);

    return { apiConfigH };
};