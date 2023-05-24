export const getPasswordVNC = () => {
  return process.env.PASSWORD_VNC || "";
};

export const getUrlVnc = (key: string) => {
  const serverIp =
    process.env.URl_PROXY_SERVER || "ws://192.168.88.228:6080/websockify";
  return serverIp + `?token=${key}`;
};
