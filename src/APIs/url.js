let baseUrl = null;
export default async function getServerUrl() {
    if (baseUrl) {
        console.log("baseUrl already set");
        return baseUrl;
    }
  const port = await window.electronAPI.waitForServerPort();
  console.log("get from server");
  baseUrl = `http://localhost:${port}`;
  return baseUrl;
}
 