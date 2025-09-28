let baseUrl = null;
async function getServerUrl() {
    if (baseUrl) {
        console.log("baseUrl already set");
        return baseUrl;
    }
  const port = await window.electronAPI.waitForServerPort();
  console.log("get from server");
  baseUrl = `http://localhost:${port}`;
  return baseUrl;
}


async function adduser() {
await getServerUrl();
console.log(baseUrl);

}
export default adduser;