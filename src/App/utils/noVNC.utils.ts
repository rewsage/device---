export const getPasswordVNC = () => {
  return import.meta.env.VITE_PASSWORD_VNC || "";
};

export const getUrlVnc = (key: number) => {
  const serverIp =
    import.meta.env.VITE_URL_PROXY_SERVER || "ws://10.11.0.228:6080/websockify";
  return serverIp + `?token=${key}`;
};
