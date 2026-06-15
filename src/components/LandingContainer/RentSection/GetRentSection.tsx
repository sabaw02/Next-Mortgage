const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const GetRentSection = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const res = await fetch(`${API_BASE_URL}/houses`, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return [];
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Invalid content type:", contentType);
      return [];
    }

    const responseText = await res.text();

    if (!responseText || responseText.trim() === "") {
      console.warn("Empty response received");
      return [];
    }

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Response preview:", responseText.substring(0, 200));
      return [];
    }

    const houses = Array.isArray(result?.houses) ? result.houses : [];

    return houses;
  } catch (error) {
    console.error(" GetRentSection:", error);

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        console.error("Request timeout - server took too long to respond");
      } else if (error.message.includes("Failed to fetch")) {
        console.error("Network error - check if server is running");
      }
    }

    return [];
  }
};
