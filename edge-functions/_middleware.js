// edge-functions/_middleware.js
export const config = {
  runtime: 'edge',
};

export default async (request, next) => {
  const url = new URL(request.url);

  // 检查请求的路径是否为a.html
  if (url.pathname === '/this_launches_in_popup.html') {
    // 设置响应头以添加Cookie
    const newHeaders = new Headers(request.headers);
    newHeaders.set('Set-Cookie', 'name=b; Path=/; Secure');
    const newRequest = new Request(request, {
      headers: newHeaders,
    });

    // 继续处理请求，但使用新的请求头
    return next(newRequest);
  }

  // 对于其他请求，继续正常处理
  return next();
};
