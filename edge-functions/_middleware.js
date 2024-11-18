// edge-functions/_middleware.js
export const config = {
  runtime: 'edge',
};

export default async (request, next) => {
  const url = new URL(request.url);
   // 设置响应头以添加Cookie
    const newHeaders = new Headers(request.headers);
    newHeaders.set('Set-Cookie', 'name=b; Path=/; Secure');
    const newRequest = new Request(request, {
      headers: newHeaders,
    });

    // 继续处理请求，但使用新的请求头
    return next(newRequest);
};
