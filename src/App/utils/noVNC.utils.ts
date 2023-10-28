export const getPasswordVNC = () => {
  return process.env.PASSWORD_VNC || "";
};

export const getUrlVnc = (key: number) => {
  const serverIp =
    process.env.URL_PROXY_SERVER || "ws://10.11.0.228:6080/websockify";
  return serverIp + `?token=${key}`;
};
